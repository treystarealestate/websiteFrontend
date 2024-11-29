"use client";
import Search from '@/components/layout/Search';
import Breadcrumb from '@/components/UI/Breadcrumb';
import React, { useState } from 'react';

import { Pagination } from 'react-bootstrap'; // Using Bootstrap for pagination
import ProjectGrid from '@/components/UI/ProjectGrid';
import ProjectList from '@/components/UI/ProjectList';

const projects = [
    { 
        id: 1, 
        title: 'Project A', 
        description: 'Luxury apartments', 
        imageUrl: '/assets/frontend/images/about1.jpg', 
        price: 500000, 
        bedroom: '3', 
        accommodation: 'Apartment', 
        developer: 'Developer A',
        handover: "Q4 2026", 
    },
    { 
        id: 2, 
        title: 'Project B', 
        description: 'Beachfront villas', 
        imageUrl: '/assets/frontend/images/about.jpg', 
        price: 80000, 
        bedroom: '5', 
        accommodation: 'Villa', 
        developer: 'Developer B',
        handover: "Q4 2026", 
    },
    { 
        id: 3, 
        title: 'Project C', 
        description: 'Modern townhouses', 
        imageUrl: '/assets/frontend/images/about1.jpg', 
        price: 350000, 
        bedroom: '4', 
        accommodation: 'Townhouse', 
        developer: 'Developer C',
        handover: "Q4 2026", 
    },
    { 
        id: 4, 
        title: 'Project D', 
        description: 'City apartments', 
        imageUrl: '/assets/frontend/images/about.jpg', 
        price: 600000, 
        bedroom: '2', 
        accommodation: 'Apartment', 
        developer: 'Developer D',
        handover: "Q4 2026", 
    },
    { 
        id: 5, 
        title: 'Project E', 
        description: 'Suburban villas', 
        imageUrl: '/assets/frontend/images/about1.jpg', 
        price: 450000, 
        bedroom: '3', 
        accommodation: 'Villa', 
        developer: 'Developer E',
        handover: "Q4 2026", 
    },
    { 
        id: 6, 
        title: 'Project F', 
        description: 'Luxury penthouses', 
        imageUrl: '/assets/frontend/images/about1.jpg', 
        price: 900000, 
        bedroom: '6', 
        accommodation: 'Penthouse', 
        developer: 'Developer F',
        handover: "Q4 2026", 
    },
];

const Page = () => {
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Off-Plan Properties", link: "/off-plan", active: true },
    ];

    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // Items per page for pagination
    const [sortBy, setSortBy] = useState<'title' | 'id' | 'price-low-high' | 'price-high-low'>('id');

    // Sorting logic
    const sortedProjects = [...projects].sort((a, b) => {
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

    // Paginate projects based on current page
    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    const currentProjects = sortedProjects.slice(indexOfFirstProject, indexOfLastProject);

    // Handle pagination change
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                            <p>{projects.length} Properties</p>
                        </div>

                        {/* Sorting and View Toggle */}
                        <div className="col-12 col-lg-6 d-flex justify-content-end align-items-center">
                            <select title='sort'
                                className="form-select formSort w-auto me-3"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'title' | 'id' | 'price-low-high' | 'price-high-low')}
                            >
                                <option value="id">Sort by ID</option>
                                <option value="title">Sort by Title</option>
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
                    {view === 'grid' ? <ProjectGrid projects={currentProjects} /> : <ProjectList projects={currentProjects} />}
                </div>
            </section>

            {/* Pagination */}
            <section>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <Pagination>
                            {[...Array(Math.ceil(projects.length / itemsPerPage))].map((_, index) => (
                                <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </div>
            </section>
        </main>
    );
};

// Fix: Add a default export
export default Page;
