'use client';
import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useVariants } from '@/hooks/useVariants';

// TypeScript interface for the community data
interface Community {
    id: number;
    name: string;
    mainImage: string;
    slug: String
}

interface PartnerProps {
    communities: Community[];
}
  
const CommunityPage = ({ communities }: PartnerProps) => {
    const { introTopVariants } = useVariants();
    return (
        <section className='my-5'>
            <Container className='py-3'>
                <Row className='g-3'>
                <div className="col-12">
                        <div className="descCont text-center py-4">
                        <motion.div variants={introTopVariants} // Use the header animation variants
                                            initial="hide"
                                            whileInView="show"
                                            transition={{ duration: 1 }}>
                            <span className="text-sub text-gold">
                                <i className="bi bi-dash-lg"></i> Communities
                            </span>
                            <h3 className="text-head py-2">
                            Explore Dubai's Most Popular Communities
                            </h3>
                            <p className="text-para">Discover the communities that make Dubai a top destination for residents and investors alike.</p>
                       </motion.div>
                        </div>
                    </div>
                    {/* Col-6 with one large community image and overlay */}
                    <Col xs={12} md={6} lg={6}>
                        <div className="position-relative">
                            <Link  href={`community/${communities[0].slug}`}>
                            <img 
                                src={communities[0].mainImage} 
                                alt={communities[0].name} 
                                className="img-fluid rounded-3 w-100"
                                style={{ objectFit: "cover", height: "420px" }} 
                            />
                            <div className="position-absolute rounded-3 w-100 h-100 top-0 bottom-0 left-0 right-0 bg-dark opacity-50"></div>
                            <div className="position-absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="mb-0">{communities[0].name}</h3>
                            </div>
                            </Link>
                        </div>
                    </Col>

                    {/* Col-6 with grid of 4 smaller communities arranged 2x2 */}
                    <Col xs={12} md={6} lg={6}>
                        <Row className="g-3">
                            {communities.slice(1, 5).map((community) => (
                                <Col xs={12} md={6} lg={6} key={community.id}>
                                    <Card className='bg-offwhite shadow-sm border-0'>
                                        <Link className="position-relative"  href={`community/${community.slug}`}>
                                            <Card.Img 
                                                src={community.mainImage} 
                                                className="img-fluid rounded-3"
                                                style={{ objectFit: "cover", height: "200px" }}
                                            />
                                            <div className="position-absolute rounded-3 w-100 h-100 top-0 bottom-0 left-0 right-0 bg-dark opacity-50"></div>
                                            <div className="position-absolute bottom-0 left-0 p-4 text-white">
                                                <h5 className='mb-0'>{community.name}</h5>
                                            </div>
                                        </Link>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CommunityPage;
