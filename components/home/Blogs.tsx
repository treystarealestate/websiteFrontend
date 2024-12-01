'use client';
import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import moment from 'moment';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useVariants } from '@/hooks/useVariants';
// TypeScript interface for the blog data
interface Blog {
    id: number;
    url: string;
    title: string;
    image: string;
    publish_date: string;
}



interface PartnerProps {
    blogs: Blog[];
}
  
const Blogs = ({ blogs }: PartnerProps) => {
    const { introHeaderVariants, introPictureVariants } = useVariants();
    return (
        <section className='my-5'>
            <Container className='my-5'>
                <Row className='g-3 my-5'>
                    <Col xs={12} md={6} lg={6} className='my-auto'>
                        <div className="descCont mb-3">
                            <motion.h4 variants={introHeaderVariants} // Use the header animation variants
                                            initial="hide"
                                            whileInView="show"
                                            transition={{ duration: 0.9 }} className='text-head mb-0'>Latest Blogs</motion.h4>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={6} className='my-auto'>
                        <div className="text-center text-md-end text-lg-end mb-3">
                            <motion.div variants={introPictureVariants} // Use the header animation variants
                                            initial="hide"
                                            whileInView="show"
                                            transition={{ duration: 0.9 }}>
                        <Link href="/blogs" className='btn btn-main'>
                                <span className='align-top'>View All </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                </Link>
                                </motion.div>
                        </div>
                    </Col>
                    {/* Col-8 with one blog */}
                    <Col xs={12} md={7} lg={7}>
                    <motion.div variants={introHeaderVariants} // Use the header animation variants
                                            initial="hide"
                                            whileInView="show"
                                            transition={{ duration: 1 }}>
                        <Card className='bg-offwhite shadow-sm border-0'>
                            <Row className='g-0'>
                                <Col xs={12} md={12} lg={12} className="my-auto">
                                    <Link href={`/blog/${blogs[0].url}`} className='text-dark text-decoration-none'>
                                        <Card.Img 
                                            src={blogs[0].image} 
                                            className="img-fluid rounded-0 homeMainBlogImg" 
                                        />
                                    </Link>
                                </Col>
                                <Col xs={12} md={12} lg={12} className="my-auto">
                                    <Card.Body className='' >
                                        <Link href={`/blog/${blogs[0].url}`} className='text-dark text-decoration-none'>
                                            <Card.Title className='text-main'>
                                                <h5 className='fs-14'>{blogs[0].title.substring(0, 40)}</h5>
                                            </Card.Title>
                                        </Link>
                                        <div className='d-flex justify-content-start fs-14'>
                                            <div className='me-2 my-auto text-sec'>
                                                <i className="bi bi-clock text-gold"></i>
                                            </div>
                                            <div className='my-auto'>{moment(blogs[0].publish_date).format("MMMM D, YYYY")}</div>
                                        </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        </motion.div>
                    </Col>

                    {/* Col-4 with multiple blogs */}
                    <Col xs={12} md={5} lg={5}>
                        {blogs.slice(1).map((blog) => (
                            <motion.div variants={introPictureVariants} // Use the header animation variants
                            initial="hide"
                            whileInView="show"
                            transition={{ duration: 1 }}>
                            <Card className='bg-offwhite shadow-sm border-0 mb-3' key={blog.id}>
                                <Row className='g-0'>
                                    <Col xs={4} md={4} lg={5} className="my-auto">
                                        <Link href={`/blog/${blog.url}`} className='text-dark text-decoration-none'>
                                            <Card.Img 
                                                src={blog.image} 
                                                className="img-fluid rounded-0 homeSubBlogImg" 
                                            />
                                        </Link>
                                    </Col>
                                    <Col xs={8} md={8} lg={7} className="my-auto">
                                        <Card.Body className='' data-aos="fade-right" data-aos-offset="300" data-aos-duration="1600">
                                            <Link href={`/blog/${blog.url}`} className='text-dark text-decoration-none'>
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
                            </motion.div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Blogs;
