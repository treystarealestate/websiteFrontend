"use client";
import React, { useState, useEffect } from "react";
import { getAllMedia } from "@/src/api/media";
import Breadcrumb from "@/components/UI/Breadcrumb";
import Link from "next/link";
interface BlogPost {
  title: string;
  date: string;
  image: string;
  url: string;
}

const fetchMedia = async (page: number): Promise<{ posts: BlogPost[]; total: number }> => {
  try {
    // Fetch data for the given page
    const response = await getAllMedia(page); // Update this to accept `page` parameter
    const allMedia = response?.data?.data || [];
    const total = response?.data?.meta?.total || 0;
    return { posts: allMedia as BlogPost[], total };
  } catch (error) {
    console.error("Failed to fetch media:", error);
    return { posts: [], total: 0 };
  }
};

const BlogPage = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "Blogs", link: "/blogs", active: true },
  ];

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      const { posts, total } = await fetchMedia(currentPage);
      setBlogPosts(posts);
      setTotalPosts(total);
    };
    loadPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / blogPosts.length || 1); // Dynamically calculate total pages

  return (
    <main>
      <Breadcrumb items={breadcrumbItems} />
      <section>
        <div className="container py-5">
          <div className="descCont text-center pb-3">
            <h4 className="text-head">Our Blogs</h4>
            <p className="text-desc">
              Get insight on the latest trends in Dubai Real Estate.
            </p>
          </div>
          <div className="row">
            {blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <Link href={`/blog/${post.url}`} className="col-md-4 col-12 col-lg-4 mb-4" key={index}>
                  <div className="card blogCard">
                    <div className="card-img-container position-relative">
                      <img
                        src={post.image}
                        className="card-img-top blogImg rounded-4"
                        alt={post.title}
                      />
                      <div className="blog-img-overlay d-flex justify-content-end align-items-end">
                        <div className="text-start text-white">
                          <p className="mb-0 text-gold">
                            <i className="bi bi-calendar"></i> {post.date}
                          </p>
                          <Link
                            href={`/blog/${post.url}`}
                            className="h5 text-white fw-normal text-decoration-none"
                          >
                            {post.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center">No blogs available at the moment.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPosts > 1 && (
            <nav>
              <ul className="pagination justify-content-center">
                {/* Previous Button */}
                
                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
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
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >

                </li>
              </ul>
            </nav>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
