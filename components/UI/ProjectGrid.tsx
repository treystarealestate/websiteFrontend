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
    community: string;
    handover: string;
    slug: string
}

interface ProjectGridProps {
    projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
    return (

        <>
            <div className="row propertyCard">
                {projects.map((project) => (
                    <div className="col-12 col-lg-3 col-md-4 mb-3" key={project.id}>
                        <Card className="rounded-4 border-0 shadow-sm bg-transparent">
                            <Link href={`/off-plan/${project.slug}`}>
                                <Card.Img className="projImg" variant="top" src={project.imageUrl} alt={project.title} />
                                <div className="topRightCont">
                                    <Badge className="bg-gold" text="light">
                                        {project.handover}
                                    </Badge>
                                </div>
                            </Link>
                            <Card.Body className="bg-offwhite">
                                <Link href={`/off-plan/${project.slug}`}>
                                    <Card.Title className="mb-1">{project.title}</Card.Title>
                                </Link>
                                <h6 className="fw-bold text-gold">Starting Price: AED {project.price}</h6>
                                <div className="d-flex justify-content-start my-2">
                                    <div className="my-auto">
                                        <p className='text-desc mb-0'><img src="/assets/frontend/images/icons/bedroom.png" alt="bedroom" className="img-fluid" width="30px" />&nbsp;<span className='align-middle'>{project.bedroom} BR | {project.accommodation}</span></p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                   
                                    <div className="my-auto">
                                    <p className='text-desc mb-0'><i className="bi bi-geo-alt"></i>&nbsp;<span className='align-middle'>{project.community}</span></p>
                                    </div>
                                    <div className="my-auto">
                                        <span className="text-gold">{project.developer}</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                ))}
            </div>
        </>
    );
};

export default ProjectGrid;
