"use client";
import React, { useState } from 'react';
import Breadcrumb from '@/components/UI/Breadcrumb';
interface BlogPost {
    title: string;
    date: string;
    image: string;
    url: string;
}

const blogPosts: BlogPost[] = [
    {
        title: "Dubai’s Q2 2024 Economic Growth Reaches 3.3%",
        date: "November 11, 2024",
        image: "/assets/frontend/images/service4.webp",
        url: "/blog/dubai-economy-growth-q2-2024",
    },
    {
        title: "The Impact of Remote Work on Rental Choices",
        date: "November 05, 2024",
        image: "/assets/frontend/images/service3.webp",
        url: "/blog/remote-work-rental-choices-2024",
    }, {
        title: "Dubai’s Q2 2024 Economic Growth Reaches 3.3%",
        date: "November 11, 2024",
        image: "/assets/frontend/images/service1.webp",
        url: "/blog/dubai-economy-growth-q2-2024",
    },
    {
        title: "The Impact of Remote Work on Rental Choices",
        date: "November 05, 2024",
        image: "/assets/frontend/images/service6.webp",
        url: "/blog/remote-work-rental-choices-2024",
    }, {
        title: "Dubai’s Q2 2024 Economic Growth Reaches 3.3%",
        date: "November 10, 2024",
        image: "/assets/frontend/images/service4.webp",
        url: "/blog/dubai-economy-growth-q2-2024",
    },
    {
        title: "The Impact of Remote Work on Rental Choices",
        date: "November 12, 2024",
        image: "/assets/frontend/images/service2.webp",
        url: "/blog/remote-work-rental-choices-2024",
    }, {
        title: "Dubai’s Q2 2024 Economic Growth Reaches 3.3%",
        date: "November 15, 2024",
        image: "/assets/frontend/images/service1.webp",
        url: "/blog/dubai-economy-growth-q2-2024",
    },
    {
        title: "The Impact of Remote Work on Rental Choices",
        date: "November 23, 2024",
        image: "/assets/frontend/images/service5.webp",
        url: "/blog/remote-work-rental-choices-2024",
    },
    // Add more blog posts here
];
const page = () => {
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Blogs", link: "/blogs", active: true },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    return (
        <main>
            <Breadcrumb items={breadcrumbItems} />
            <section>
                <div className="container py-5">
                    <div className="descCont text-center pb-3 ">
                        <h4 className="text-head ">Our Blogs</h4>
                        <p className="text-desc">Get insight on the latest trends in Dubai Real Estate.</p>
                    </div>
                    <div className="row">
                        {currentPosts.map((post, index) => (
                            <div className="col-md-4 col-12 col-lg-3 mb-4" key={index}>
                                <div className="card blogCard">
                                    <div className="card-img-container position-relative ">
                                        <img src={post.image} className="card-img-top blogImg rounded-4" alt={post.title} />
                                        <div className="blog-img-overlay d-flex justify-content-end align-items-end">
                                            <div className="text-start text-white">
                                                <p className="mb-0 text-gold"><i className="bi bi-calendar"></i> {post.date}</p>
                                                <a href={post.url} className="h5 text-white fw-normal text-decoration-none">{post.title}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <nav>
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, index) => (
                                <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                    <button
                                        className="page-link"
                                        onClick={() => paginate(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </section>
        </main>
    )
}

export default page