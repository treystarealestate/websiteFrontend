"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchProps {
  bgClass: string; // For background container class
  formClass: string; // For form or inner container class
}

const Search: React.FC<SearchProps> = ({ bgClass, formClass }) => {
  type OptionType = {
    value: string;
    label: string;
  };

  const [developerOptions, setDeveloperOptions] = useState<OptionType[]>([]);
  const [typeOptions, setTypeOptions] = useState<OptionType[]>([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [form, setForm] = useState({
    community: "",
    accommodation: "",
    search: "",
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const suggestionBox = document.getElementById("suggestion-box");
      if (suggestionBox && !suggestionBox.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  // Fetch dropdown options
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const developerRes = await fetch(
          `${process.env.API_HOST}developerOptions`
        );
        const developerData = await developerRes.json();
        if (developerData.success) {
          setDeveloperOptions(developerData.data);
        }

        const typeRes = await fetch(
          `${process.env.API_HOST}accommodationOptions`
        );
        const typeData = await typeRes.json();
        if (typeData.success) {
          setTypeOptions(typeData.data);
        }
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      }
    };

    fetchOptions();
  }, []);

  // Populate form from URL params
  useEffect(() => {
    const newForm = { ...form };

    if (searchParams.has("accommodation")) {
      newForm.accommodation = searchParams.get("accommodation") || "";
    }
    if (searchParams.has("community")) {
      newForm.community = searchParams.get("community") || "";
    }
    if (searchParams.has("search")) {
        newForm.search = searchParams.get("search") || "";
      }

    setForm(newForm);
  }, [searchParams]);

  // Search function
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      community: form.community || "",
      accommodation: form.accommodation || "",
      search: form.search || "",
    });

    router.push(`off-plan?${queryParams}`);
  };

  // Handle search input change and fetch suggestions
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setForm((prev) => ({ ...prev, search: val }));

    if (!val) {
      setShowSuggestions(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.API_HOST}searchR?keyword=${val}`
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setSuggestions(data.data); // Directly set the suggestions from the API response
      setShowSuggestions(data.data.length > 0); // Show suggestions if there are any
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setShowSuggestions(false); // Hide suggestions in case of an error
    }
  };

  return (
    <div className="textContent pt-3 pb-5">
      <div className={bgClass}>
        <form onSubmit={handleSearch} className={formClass}>
          <div className="row g-3">
            {/* Search Keyword Text Field */}
            <div className="col-12 col-lg">
              <label htmlFor="search">Project Name</label>
              <input
                type="text"
                name="search"
                id="search"
                className="formSelect form-control form-control-lg"
                placeholder="Search Keyword"
                value={form.search}
                onChange={handleInputChange}
              />
              {showSuggestions && (
                <div
                  id="suggestion-box"
                  style={{ height: "100px", overflow: "auto" }}
                >
                  <div id="suggestions">
                    {suggestions.map((sug: any, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setForm((prev) => ({ ...prev, search: sug.name }));
                          setShowSuggestions(false); // Hide suggestions after selection
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <p
                          className="suggestion-link"
                          dangerouslySetInnerHTML={{ __html: sug.name }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Developer Dropdown */}
            <div className="col-6 col-lg-auto">
              <label htmlFor="developer">Developer</label>
              <select
                name="developer"
                id="developer"
                value={form.community}
                onChange={(e) =>
                  setForm({ ...form, community: e.target.value })
                }
                className="formSelect form-select form-select-lg"
              >
                {developerOptions.map((developer, index) => (
                  <option value={developer.label} key={index}>
                    {developer.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Status Dropdown */}
            <div className="col-6 col-lg-auto">
              <label htmlFor="accommodation">Type</label>
              <select
                name="accommodation"
                id="accommodation"
                value={form.accommodation}
                onChange={(e) =>
                  setForm({ ...form, accommodation: e.target.value })
                }
                className="formSelect form-select form-select-lg"
              >
                {typeOptions.map((type, index) => (
                  <option value={type.label} key={index}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="col-6 col-lg-auto mt-auto searchBtn">
              <button type="submit" className="btn btn-lg btn-white w-100">
                <i className="text-gold bi bi-search"></i> Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
