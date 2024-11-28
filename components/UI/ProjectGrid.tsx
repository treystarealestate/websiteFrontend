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
                            <Card.Img className="projImg" variant="top" src={project.imageUrl} alt={project.title} />
                            <div className="topRightCont">
                                <Badge className="bg-gold" text="light">
                                {project.handover}
                                </Badge>
                            </div>
                            <Card.Body className="bg-offwhite">
                                <Card.Title className="mb-1">{project.title}</Card.Title>
                                <h6 className="fw-bold text-gold">Starting Price: AED {project.price}</h6>
                                <div className="d-flex justify-content-start my-2">
                                    <div className="my-auto">
                                        <p className='text-desc mb-0'><img src="/assets/frontend/images/icons/bedroom.png" alt="bedroom" className="img-fluid" width="30px" />&nbsp;<span className='align-middle'>{project.bedroom} BR | {project.accommodation}</span></p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="my-auto">
                                        <span className="text-gold">{project.developer}</span>
                                    </div>
                                    <div className="my-auto">
                                        <button className="btn-main-sm"><span className='align-top'>Pre Register </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill align-top text-gold"></i></button>
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
