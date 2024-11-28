'use client';
import Breadcrumb from '@/components/UI/Breadcrumb';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import moment from 'moment';
interface popularBlog {
    id: Number,
    title: string;
    publish_date: string;
    image: string;
    slug: string;
}
const popularBlogs : popularBlog[] = [
    {
        id: 1,
        title: "The Impact of Remote Work on Rental Choices",
        publish_date: "2024-01-01",
        image: "/assets/frontend/images/service2.webp",
        slug: "/blog/remote-work-rental-choices-2024",
    }, {
        id: 2,
        title: "Dubai’s Q2 2024 Economic Growth Reaches 3.3%",
        publish_date: "2024-01-01",
        image: "/assets/frontend/images/service1.webp",
        slug: "/blog/dubai-economy-growth-q2-2024",
    },
    {
        id: 3,
        title: "The Impact of Remote Work on Rental Choices",
        publish_date: "2024-01-01",
        image: "/assets/frontend/images/service5.webp",
        slug: "/blog/remote-work-rental-choices-2024",
    },
    // Add more blog data
];
const Page = ({ params }: { params: { slug: string } }) => {
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Blogs", link: "/blogs", active: false },
        { label: "The Impact of Remote Work on Rental Choices", link: "/blog/remote-work-rental-choices-2024", active: true },
    ];
    // Example popular blogs (replace with actual data)
   

    return (
        <main>
            <Breadcrumb items={breadcrumbItems} />
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-8">
                            <div className="descCont pe-2">
                                <div className=" pb-3 ">
                                    <h4 className="text-subhead ">The Impact of Remote Work on Rental Choices</h4>
                                    <small>
                                        <i className="bi bi-clock text-gold"></i> {moment('2024-02-01').format('MMMM D, YYYY')}
                                    </small>
                                </div>
                                <div className="blog-image mb-3">
                                    <img src="/assets/frontend/images/service5.webp" className="img-fluid rounded-4" alt="blog title" />
                                </div>
                                <div className="text-para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget venenatis erat.
                                    Vivamus suscipit ligula a libero convallis, eget tincidunt risus tempor.
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4">
                            <div className="descCont text-start pb-3">
                                <h4 className="text-subhead">Popular Blogs</h4>
                            </div>
                            <div>
                                {popularBlogs.slice(0, 3).map((blog) => (
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
                                                <Card.Body data-aos="fade-right" data-aos-offset="300" data-aos-duration="1600">
                                                    <Link href={`/blog/${blog.slug}`} className='text-dark text-decoration-none'>
                                                        <Card.Title className='text-main'>
                                                            <h6 className=''>{blog.title.substring(0, 40)}</h6>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Page;