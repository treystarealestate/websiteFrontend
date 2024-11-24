'use client';
import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Link from 'next/link';

// TypeScript interface for the community data
interface Community {
    id: number;
    name: string;
    image: string;
}

const communities: Community[] = [
    {
        id: 1,
        name: "Downtown Dubai",
        image: "/assets/frontend/images/about1.jpg"
    },
    {
        id: 2,
        name: "Palm Jumeirah",
        image: "/assets/frontend/images/about.jpg"
    },
    {
        id: 3,
        name: "Dubai Marina",
        image: "/assets/frontend/images/about.jpg"
    },
    {
        id: 4,
        name: "Arabian Ranches",
        image: "/assets/frontend/images/about1.jpg"
    },
    {
        id: 5,
        name: "Jumeirah Lake Towers",
        image: "/assets/frontend/images/about1.jpg"
    }
];

const CommunityPage = () => {
    return (
        <section className='my-5'>
            <Container className='py-3'>
                <Row className='g-3'>
                <div className="col-12">
                        <div className="descCont text-center py-4">
                            <span className="text-sub text-gold">
                                <i className="bi bi-dash-lg"></i> Communities
                            </span>
                            <h3 className="text-head py-2">
                            Explore Dubai's Most Popular Communities
                            </h3>
                            <p className="text-para">Discover the communities that make Dubai a top destination for residents and investors alike.</p>
                        </div>
                    </div>
                    {/* Col-6 with one large community image and overlay */}
                    <Col xs={12} md={6} lg={6}>
                        <div className="position-relative">
                            <img 
                                src={communities[0].image} 
                                alt={communities[0].name} 
                                className="img-fluid rounded-3 w-100"
                                style={{ objectFit: "cover", height: "420px" }} 
                            />
                            <div className="position-absolute rounded-3 w-100 h-100 top-0 bottom-0 left-0 right-0 bg-dark opacity-50"></div>
                            <div className="position-absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="mb-0">{communities[0].name}</h3>
                            </div>
                        </div>
                    </Col>

                    {/* Col-6 with grid of 4 smaller communities arranged 2x2 */}
                    <Col xs={12} md={6} lg={6}>
                        <Row className="g-3">
                            {communities.slice(1, 5).map((community) => (
                                <Col xs={12} md={6} lg={6} key={community.id}>
                                    <Card className='bg-offwhite shadow-sm border-0'>
                                        <div className="position-relative">
                                            <Card.Img 
                                                src={community.image} 
                                                className="img-fluid rounded-3"
                                                style={{ objectFit: "cover", height: "200px" }}
                                            />
                                            <div className="position-absolute rounded-3 w-100 h-100 top-0 bottom-0 left-0 right-0 bg-dark opacity-50"></div>
                                            <div className="position-absolute bottom-0 left-0 p-4 text-white">
                                                <h5 className='mb-0'>{community.name}</h5>
                                            </div>
                                        </div>
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
