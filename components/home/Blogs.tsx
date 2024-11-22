'use client';
import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import moment from 'moment';
import Link from 'next/link';

// TypeScript interface for the blog data
interface Blog {
    id: number;
    slug: string;
    title: string;
    image: string;
    publish_date: string;
}

const popularBlogs: Blog[] = [
    {
        id: 1,
        slug: "blog-post-1",
        title: "How to Invest in Real Estate",
        image: "/assets/frontend/images/about1.jpg",
        publish_date: "2024-11-20"
    },
    {
        id: 2,
        slug: "blog-post-2",
        title: "The Future of UAE's Real Estate Market",
        image: "/assets/frontend/images/about.jpg",
        publish_date: "2024-11-18"
    },
    {
        id: 3,
        slug: "blog-post-3",
        title: "10 Things to Consider Before Buying Property",
        image: "/assets/frontend/images/about1.jpg",
        publish_date: "2024-11-15"
    },
    {
        id: 4,
        slug: "blog-post-4",
        title: "10 Things to Consider Before Buying Property",
        image: "/assets/frontend/images/about.jpg",
        publish_date: "2024-11-15"
    },
];

const Blogs = () => {
    return (
        <section className='my-5'>
            <Container className='my-5'>
                <Row className='g-3 my-5'>
                    <Col xs={12} md={6} lg={6} className='my-auto'>
                        <div className="heading-all text-uppercase text-main borNewBott mb-3">
                            <h4>Latest Blogs</h4>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6} className='my-auto'>
                        <div className="text-center text-md-end text-lg-end mb-3">
                        <Link href="/blogs" className='btn btn-main'>
                                <span className='align-top'>Read More </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                </Link>
                        </div>
                    </Col>
                    {/* Col-8 with one blog */}
                    <Col xs={12} md={7} lg={7}>
                        <Card className='bg-offwhite shadow-sm border-0'>
                            <Row className='g-0'>
                                <Col xs={12} md={12} lg={12} className="my-auto">
                                    <Link href={`/blog/${popularBlogs[0].slug}`} className='text-dark text-decoration-none'>
                                        <Card.Img 
                                            src={popularBlogs[0].image} 
                                            className="img-fluid rounded-0 homeMainBlogImg" 
                                        />
                                    </Link>
                                </Col>
                                <Col xs={12} md={12} lg={12} className="my-auto">
                                    <Card.Body className='' >
                                        <Link href={`/blog/${popularBlogs[0].slug}`} className='text-dark text-decoration-none'>
                                            <Card.Title className='text-main'>
                                                <h5 className='fs-14'>{popularBlogs[0].title.substring(0, 40)}</h5>
                                            </Card.Title>
                                        </Link>
                                        <div className='d-flex justify-content-start fs-14'>
                                            <div className='me-2 my-auto text-sec'>
                                                <i className="bi bi-clock text-gold"></i>
                                            </div>
                                            <div className='my-auto'>{moment(popularBlogs[0].publish_date).format("MMMM D, YYYY")}</div>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    {/* Col-4 with multiple blogs */}
                    <Col xs={12} md={5} lg={5}>
                        {popularBlogs.slice(1).map((blog) => (
                            <Card className='bg-offwhite shadow-sm border-0 mb-3' key={blog.id}>
                                <Row className='g-0'>
                                    <Col xs={4} md={4} lg={5} className="my-auto">
                                        <Link href={`/blog/${blog.slug}`} className='text-dark text-decoration-none'>
                                            <Card.Img 
                                                src={blog.image} 
                                                className="img-fluid rounded-0 homeSubBlogImg" 
                                            />
                                        </Link>
                                    </Col>
                                    <Col xs={8} md={8} lg={7} className="my-auto">
                                        <Card.Body className='' data-aos="fade-right" data-aos-offset="300" data-aos-duration="1600">
                                            <Link href={`/blog/${blog.slug}`} className='text-dark text-decoration-none'>
                                                <Card.Title className='text-main'>
                                                    <h5 className='fs-14'>{blog.title.substring(0, 40)}</h5>
                                                </Card.Title>
                                            </Link>
                                            <div className='d-flex justify-content-start fs-14'>
                                                <div className='me-2 my-auto text-sec'>
                                                    <i className="bi bi-clock text-gold"></i>
                                                </div>
                                                <div className='my-auto'>{moment(blog.publish_date).format("MMMM D, YYYY")}</div>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
