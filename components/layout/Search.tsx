"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchProps {
    bgClass: string;    // For background container class
    formClass: string;  // For form or inner container class
}

const Search: React.FC<SearchProps> = ({ bgClass, formClass }) => {
    type OptionType = {
        value: string;
        label: string;
    };

    const [communityOptions, setCommunityOption] = useState<OptionType[]>([]);  // Store community options
    const [developerOptions, setDeveloperOption] = useState<OptionType[]>([]);  // Store community options
    const [typeOptions, setTypeOption] = useState<OptionType[]>([]);  // Store community options
    
    const searchParams = useSearchParams();
    const router = useRouter();

    const [form, setForm] = useState({
        community: "",
        accommodation: "",
        developer: "",
        search: "",  // Add search keyword to form state
    });


    useEffect(() => {
        const newForm = { ...form };
        
        if (searchParams.has("accommodation")) {
          newForm.accommodation = searchParams.get("accommodation") || "";
        }
    
        if (searchParams.has("community")) {
          newForm.community = searchParams.get("community") || "";
        }

        if (searchParams.has("developer")) {
            newForm.developer = searchParams.get("developer") || "";
          }
    
       
    
        setForm(newForm);
      }, [searchParams]);

      
    // Handle search button click
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form from submitting and reloading the page

        const queryParams = new URLSearchParams({
            community: form.community || "",
            accommodation: form.accommodation || "",
            developer: form.developer || "",
            search: form.search || "",  // Include search keyword in query params
        });

        const url = `off-plan?${queryParams}`;
        router.push(url); // Navigate to the properties page with query params
    };

    // Populate form with search params
    useEffect(() => {
        const params: Record<string, string> = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        setForm((prev) => ({
            ...prev,
            ...params,
        }));
    }, [searchParams]);

    // Fetch community options
    useEffect(() => {
        let getCommunitiesURL = process.env.API_HOST + "communnityOptions";
        fetch(getCommunitiesURL)
          .then((response) => response.json())
          .then((res) => {
            if (res.success) {
                setCommunityOption(res.data);
            }
          })
          .catch((error) => {
            console.error("Error:", error); // Handle the error response object
          });


        let getDeveloperURL = process.env.API_HOST + "developerOptions";
        fetch(getDeveloperURL)
          .then((response) => response.json())
          .then((res) => {
            if (res.success) {
                setDeveloperOption(res.data);
            }
          })
          .catch((error) => {
            console.error("Error:", error); // Handle the error response object
          });


          let getTypeURL = process.env.API_HOST + "accommodationOptions";
        fetch(getTypeURL)
          .then((response) => response.json())
          .then((res) => {
            if (res.success) {
                setTypeOption(res.data);
            }
          })
          .catch((error) => {
            console.error("Error:", error); // Handle the error response object
          });

    }, []);

    return (
        <div className="textContent pt-3 pb-5">
            <div className={`${bgClass}`}>
                <form onSubmit={handleSearch} className={`${formClass}`}>
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
                                value={form.search} // Bind search input to form state
                                onChange={(e) => setForm({ ...form, search: e.target.value })}
                            />
                        </div>

                        {/* Community Name Dropdown */}
                        {/* <div className="col-6 col-lg-auto">
                            <label htmlFor="community">Community</label>
                            <select
                                name="community"
                                id="community"
                                value={form.community}
                                onChange={(e) => setForm({ ...form, community: e.target.value })}
                                className="formSelect form-select form-select-lg"
                            >
                                {communityOptions?.map((community, index) => (
                                    <option value={community.label} key={index}>
                                        {community.label}
                                    </option>
                                ))}
                            </select>
                        </div> */}

                        {/* Developer Dropdown */}
                        <div className="col-6 col-lg-auto">
                            <label htmlFor="developer">Developer</label>
                            <select
                                name="developer"
                                id="developer"
                                value={form.developer}
                                onChange={(e) => setForm({ ...form, developer: e.target.value })}
                                className="formSelect form-select form-select-lg"
                            >
                               {developerOptions?.map((developer, index) => (
                                    <option value={developer.label} key={index}>
                                        {developer.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Project Status Dropdown */}
                        <div className="col-6 col-lg-auto">
                            <label htmlFor="accoomodation_type">Type</label>
                            <select
                                name="accoomodation_type"
                                id="accoomodation_type"
                                value={form.accommodation}
                                onChange={(e) => setForm({ ...form, accommodation: e.target.value })}
                                className="formSelect form-select form-select-lg"
                            >
                                {typeOptions?.map((type, index) => (
                                    <option value={type.label} key={index}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Search Button */}
                        <div className="col-6 col-lg-auto mt-auto searchBtn">
                            <button type="submit" className="btn btn-lg btn-white w-100" onClick={handleSearch}>
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
