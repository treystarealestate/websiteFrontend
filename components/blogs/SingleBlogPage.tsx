'use client';
import React from "react";
import Breadcrumb from "@/components/UI/Breadcrumb";
import { Card, Row, Col } from "react-bootstrap";
import Link from "next/link";
import moment from "moment";
import parse from "html-react-parser";

interface Blog {
    id: string | number;
    title: string;
    image: string;
    url: string;
    date: string;
}

interface MediaData {
    allMedia: Blog[];
    media: {
        title: string;
        content: string;
        image: string;
        date: string
      };
}
function SingleBlogPage({ mediaData }: { mediaData: MediaData }) {

console.log(mediaData)
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Blogs", link: "/blogs", active: false },
        { label: mediaData?.media?.title || "Blog", active: true },
    ];

    return (
        <main>
            <Breadcrumb items={breadcrumbItems} />
            <section>
                <div className="container py-5">
                    <div className="row">
                        {/* Blog Content */}
                        <div className="col-12 col-lg-8 col-md-8">
                            <div className="descCont pe-2 pb-3">
                                <div className="pb-3">
                                    <h4 className="text-subhead">{mediaData?.media?.title || "Untitled Blog"}</h4>
                                    <small>
                                        <i className="bi bi-clock text-gold"></i>{" "}
                                        {moment(mediaData?.media?.date).format("MMMM D, YYYY")}
                                    </small>
                                </div>
                                <div className="blog-image mb-3">
                                    <img
                                        src={mediaData?.media?.image || "/default-image.jpg"}
                                        className="img-fluid rounded-4 w-100"
                                        alt={mediaData?.media?.title || "Blog Image"}
                                    />
                                </div>
                                <div className="text-para">
                                    {mediaData?.media?.content && parse(mediaData.media.content)}
                                </div>
                            </div>
                        </div>
                        {/* Popular Blogs */}
                        <div className="col-12 col-lg-4 col-md-4">
                            <div className="descCont text-start pb-3">
                                <h4 className="text-subhead">Popular Blogs</h4>
                            </div>
                            <div>
                                {Array.isArray(mediaData?.allMedia) &&
                                    mediaData?.allMedia?.map((blog: { id: string | number; title: string; image: string; url: string; date: string }) => (
                                        <Card className="bg-offwhite shadow-sm border-0 mb-3" key={blog.id}>
                                            <Row className="g-0">
                                                <Col xs={4} md={4} lg={5} className="my-auto">
                                                    <Link
                                                        href={`/blog/${blog.url}`}
                                                        className="text-dark text-decoration-none"
                                                    >
                                                        <Card.Img
                                                            src={blog.image || "/default-image.jpg"}
                                                            className="img-fluid rounded-0 homeSubBlogImg"
                                                            alt={blog.title || "Blog Thumbnail"}
                                                        />
                                                    </Link>
                                                </Col>
                                                <Col xs={8} md={8} lg={7} className="my-auto">
                                                    <Card.Body>
                                                        <Link
                                                            href={`/blogs/${blog.url}`}
                                                            className="text-dark text-decoration-none"
                                                        >
                                                            <Card.Title className="text-main">
                                                                <h6>{blog.title?.substring(0, 40) || "Untitled Blog"}</h6>
                                                            </Card.Title>
                                                        </Link>
                                                        <div className="d-flex justify-content-start fs-14">
                                                            <div className="me-2 my-auto text-sec">
                                                                <i className="bi bi-clock text-gold"></i>
                                                            </div>
                                                            <div className="my-auto">
                                                                {moment(blog.date).format("MMMM D, YYYY")}
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SingleBlogPage;
