"use client";
import Search from '@/components/layout/Search';
import Breadcrumb from '@/components/UI/Breadcrumb';
import React, { useState, useEffect, useRef, useContext } from "react";

import { Pagination } from 'react-bootstrap'; // Using Bootstrap for pagination
import ProjectGrid from '@/components/UI/ProjectGrid';
import ProjectList from '@/components/UI/ProjectList';
import ProjectModal from '@/components/UI/ProjectModal';

const ProjectPageList = () => {

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

  // Sorting logic
  const sortedProjects = [...properties].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === 'price-low-high') {
      return a.price - b.price; // Sort by price low to high
    }
    if (sortBy === 'price-high-low') {
      return b.price - a.price; // Sort by price high to low
    }
    return a.id - b.id; // Default: sort by id
  });


  // Handle pagination change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [form, setForm] = useState({
    accommodation_id: "",
    bedrooms: "",
    minprice: "",
    maxprice: "",
    minarea: "",
    maxarea: "",
    amenities: "",
    bathroom: "",
    completion_status_id: "",
    isCommercial: "",
    lastUpdated: ""
  });


  useEffect(() => {
    let getPropertiesURL = process.env.API_HOST + "projects?";
    getPropertiesURL += `page=${currentPage}&`; // Append the page number to the URL
    let payload = { ...form };
    for (let key in payload) {
      if (payload.hasOwnProperty(key)) {
        if (payload[key]) {
          if (key === "searchBy" && payload[key].length) {
            let searchBy = undefined;
            if (typeof payload[key] == "string") {
              searchBy = JSON.parse(payload[key]);
            } else if (Array.isArray(payload[key])) {
              searchBy = payload[key];
            } else {
              searchBy = [];
            }
            searchBy.forEach((element) => {
              delete element.id;
              delete element.slug;
            });
            payload[key] = JSON.stringify(searchBy);
            getPropertiesURL += `${key}=${payload[key]}&`;
          } else {
            getPropertiesURL += `${key}=${payload[key]}&`;
          }
        }
      }
    }
    setLoading(true);
    fetch(getPropertiesURL)
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          const propertiesDup = res.data.data;
          setProperties([...propertiesDup]);
          setTotalProperties(res.data.meta.total);
          setLinks(res.data.links);
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Handle the error response object
      })
      .finally(() => {
        setLoading(false);
      });
  }, [form, currentPage]);

  useEffect(() => {
    setForm({ ...form, sortBy });
  }, [sortBy]);
  const totalPages = Math.ceil(totalProperties / itemsPerPage);
  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12">
              <Search bgClass="bgSearchLight" formClass="formSearchLight" />
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
              <select title='sort'
                className="form-select formSort  me-3"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price-low-high' | 'price-high-low')}
              >
                <option value="">Sort</option>
                <option value="price-low-high">Sort by Price (Low to High)</option>
                <option value="price-high-low">Sort by Price (High to Low)</option>
              </select>

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