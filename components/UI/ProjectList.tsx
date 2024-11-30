import Link from 'next/link';
import React from 'react';
import { Badge, Card } from "react-bootstrap";
interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    bedroom: string;
    accommodation: string;
    developer: string;
    handover: string;
}

interface ProjectListProps {
    projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (

        <>
            <div className="row propertyCardList">
                {projects.map((project) => (
                    <div className="col-12 col-lg-6 col-md-6 mb-3" key={project.id}>
                        <Card className="rounded-4 bg-transparent border-0 shadow-sm">
                            <div className="row g-0">
                                <div className="col-4 col-md-5">
                                <Link href='/off-plan/damac-sun-city'>
                                    <Card.Img className="projImg" variant="top" src={project.imageUrl} alt={project.title} />
                                    <div className="topLeftCont">
                                        <Badge className="bg-gold badge" text="light">
                                            {project.handover}
                                        </Badge>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-8 col-md-7">
                                    <Card.Body className="bg-offwhite h-100 pb-2">
                                        <div>
                                        <Link href='/off-plan/damac-sun-city' >
                                        <Card.Title className="mb-1">{project.title}</Card.Title>
                                        </Link>
                                        <h6 className="fw-bold text-gold">Starting Price: AED {project.price}</h6>
                                        <div className="d-flex justify-content-start my-2">
                                            <div className="my-auto">
                                                <p className='text-desc mb-0'><img src="/assets/frontend/images/icons/bedroom.png" alt="bedroom" className="img-fluid" width="30px" />&nbsp;<span className='align-middle'>{project.bedroom} BR | {project.accommodation}</span></p>
                                            </div>
                                        </div>
                                        <div className="my-auto">
                                                <p className='text-desc mb-0'><i className="bi bi-geo-alt"></i>&nbsp;<span className='align-middle'>Dubai Islands</span></p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between pt-2 border-top">
                                            <div className="my-auto">
                                                <span className="text-gold">{project.developer}</span>
                                            </div>
                                            <div className="my-auto">
                                                <button className="btn-main-sm"><span className='align-top'>Pre Register </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill align-top text-gold"></i></button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </div>

                ))}
            </div>
        </>
    );
};

export default ProjectList;
