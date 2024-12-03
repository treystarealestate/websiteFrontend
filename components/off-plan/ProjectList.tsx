"use client";
import Search from '@/components/layout/ProjectSearch';
import Breadcrumb from '@/components/UI/Breadcrumb';
import React, { useState, useEffect, useRef, useContext } from "react";

import { Pagination } from 'react-bootstrap'; // Using Bootstrap for pagination
import ProjectGrid from '@/components/UI/ProjectGrid';
import ProjectList from '@/components/UI/ProjectList';
import ProjectModal from '@/components/UI/ProjectModal';
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const ProjectPageList = () => {
  interface Form {
    accommodation: string;
    community: string;
    developer: string;
    search: string;
  }
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState("");
  const [links, setLinks] = useState({ next: "", first: "" });
  const [properties, setProperties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);
  const [selectedProject, setSelectedProject] = useState<{
    projectName: string;
    fileUrl: string;
    formName: string;
  } | null>(null);

  // Function to open the modal and pass project details and formName
  const openModal = (projectName: string, fileUrl: string, formName: string) => {
    setSelectedProject({ projectName, fileUrl, formName });
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Off-Plan Properties", link: "/off-plan", active: true },
  ];

  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Items per page for pagination
  const [sortBy, setSortBy] = useState<'title' | 'id' | 'price-low-high' | 'price-high-low'>('id');



  // Handle pagination change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const searchParams = useSearchParams();
  const [form, setForm] = useState<Form>({
    accommodation: "",
    community: "",
    developer: "",
    search: "",
  });
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

    if (searchParams.has("developer")) {
      newForm.developer = searchParams.get("developer") || "";
    }



    setForm(newForm);
  }, [searchParams]);

 

  const totalPages = Math.ceil(totalProperties / itemsPerPage);


  type OptionType = {
    value: string;
    label: string;
  };

  const [developerOptions, setDeveloperOptions] = useState<OptionType[]>([]);
  const [typeOptions, setTypeOptions] = useState<OptionType[]>([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
  useEffect(() => {
    let getPropertiesURL = process.env.API_HOST + "projects?";
    getPropertiesURL += `page=${currentPage}&`; // Append the page number to the URL

    let payload: Form = { ...form };

    // Iterate through the keys of the form
    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        // Use keyof Form to assert that key is a valid key of Form
        const typedKey = key as keyof Form;
        if (payload[typedKey]) {
          getPropertiesURL += `${typedKey}=${payload[typedKey]}&`;
        }
      }
    }

    setLoading(true);
    fetch(getPropertiesURL)
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {

          const propertiesDup = res.data.data || [];
          setProperties(propertiesDup);
        
          if (propertiesDup.length === 0) {
            console.log("No properties found!");
          }

          setTotalProperties(res.data.meta.total || 0);
          setLinks(res.data.links || []);
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Handle the error response object
      })
      .finally(() => {
        setLoading(false);
      });
  }, [form, currentPage]);
  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">



              <div className="textContent pt-3 pb-5">
                <div className="bgSearchLight">
                  <form onSubmit={handleSearch} className="formSearchLight">
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

            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 col-lg-6">
              <h4>Off-Plan Properties</h4>
              <p>{totalProperties} Properties</p>
            </div>

            {/* Sorting and View Toggle */}
            <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center">
              {/* <select title='sort'
                className="form-select formSort  me-3"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price-low-high' | 'price-high-low')}
              >
                <option value="">Sort</option>
                <option value="price-low-high">Sort by Price (Low to High)</option>
                <option value="price-high-low">Sort by Price (High to Low)</option>
              </select> */}

              {/* View Toggle */}
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className={`btn me-1 ${view === 'grid' ? 'btn-main-black' : 'btn-main'}`}
                  onClick={() => setView('grid')}
                >
                  <i className="bi bi-grid"></i> {/* Grid Icon */}
                </button>
                <button
                  type="button"
                  className={`btn ${view === 'list' ? 'btn-main-black' : 'btn-main'}`}
                  onClick={() => setView('list')}
                >
                  <i className="bi bi-list"></i> {/* List Icon */}
                </button>
              </div>
            </div>
          </div>

          {/* Display Projects based on view */}
          {view === 'grid' ? <ProjectGrid projects={properties} /> : <ProjectList projects={properties} openModal={openModal} />}
        </div>
      </section>

      {/* Pagination */}
      <section>
        <div className="container">
          <div className="d-flex justify-content-center">
            {/* Pagination */}
            {totalProperties > 1 && (
              <nav>
                <ul className="pagination justify-content-center">
                  {/* Previous Button */}

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      className={`page-item ${currentPage === index + 1 ? "active" : ""
                        }`}
                      key={index}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  {/* Next Button */}
                  <li
                    className={`page-item ${currentPage === totalPages ? "disabled" : ""
                      }`}
                  >

                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </section>
      <ProjectModal
        isOpen={!!selectedProject}
        title={selectedProject?.projectName || ""}
        formName={selectedProject?.formName || "Pre-Register Now"}
        fileUrl={selectedProject?.fileUrl}
        onClose={closeModal}
      />
    </main>
  );
};

// Fix: Add a default export
export default ProjectPageList;
