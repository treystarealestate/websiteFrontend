
"use client";
import Breadcrumb from '@/components/UI/Breadcrumb';
import React, { useState } from 'react';
import LightboxImage from '@/components/UI/LightboxImage';
import { Badge } from 'react-bootstrap';
import ProjectDetails from '@/components/off-plan/ProjectDetails';
import AgentDetails from '@/components/off-plan/AgentDetails';
import Community from '@/components/off-plan/Community';
import Location from '@/components/off-plan/Location';
import ProjectAminities from '@/components/off-plan/ProjectAminities';
import PaymentPlan from '@/components/off-plan/PaymentPlan';
import RelatedProject from '@/components/off-plan/RelatedProject';
import ContactSection from '@/components/off-plan/ContactSection';
import ProjectModal from '@/components/UI/ProjectModal';
const Page = ({ params }: { params: { slug: string } }) => {
    interface Project {
        title: string;
        fileUrl: string;
    }
    
    const project = {
        title: "Damac Sun City",
        fileUrl: "/assets/frontend/images/service1.webp", // Replace with actual image paths

    };
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Off-Plan", link: "/off-plan", active: false },
        { label: "DAMAC Sun City", link: "/off-plan/damac-sun-city", active: true },
    ];
    // Example popular blogs (replace with actual data)
    // Array of images for the interior
    const interiorImages = [
        "/assets/frontend/images/service4.webp",
        "/assets/frontend/images/service5.webp",
        "/assets/frontend/images/service6.webp"
    ];

    // Array of images for the exterior
    const exteriorImages = [
        "/assets/frontend/images/service1.webp",
        "/assets/frontend/images/service2.webp",
        "/assets/frontend/images/service3.webp"
    ];
    const [selectedProject, setSelectedProject] = useState<{
        projectName: string;
        fileUrl: string;
        formName: string;
      } | null>(null);
    
      // Function to open the modal and pass project details and formName
      const openModal = (projectName: string, fileUrl: string, formName: string) => {
        setSelectedProject({ projectName, fileUrl, formName });
      };
    
      // Function to close the modal
      const closeModal = () => {
        setSelectedProject(null);
      };
    return (
        <main>
            <Breadcrumb items={breadcrumbItems} />
            <section className='mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-8">
                            <div className="descCont">
                                <div className=" pb-3 ">
                                    <h4 className="text-subhead ">DAMAC Sun City</h4>
                                    <small>
                                        <i className="bi bi-geo-alt text-gold"></i> Dubai Land
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-md-12">
                            <div className="project-main-image mb-3">
                                <img src="/assets/frontend/images/service4.webp" className="img-fluid rounded-4" alt="project title" />
                                <div className="topRightCont">
                                    <Badge className="bg-gold badge" text="light">
                                        New Launch
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 col-md-12">
                            <div className="row">
                                {/* Interior Section with Multiple Images */}
                                <div className="col-6 col-lg-12">
                                    <LightboxImage images={interiorImages} title="Interior" />
                                </div>

                                {/* Exterior Section with Multiple Images */}
                                <div className="col-6 col-lg-12">
                                    <LightboxImage images={exteriorImages} title="Exterior" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-8">
                            <ProjectDetails />
                        </div>
                        <div className="col-12 col-lg-4 col-md-4">
                        <AgentDetails project={project} openModal={openModal} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-darkGold">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">

                            <div className="descCont">
                                <div className=" pb-3 text-center">
                                    <h4 className="text-subhead ">Amenities</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 col-md-12">
                            <ProjectAminities />
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <div className=" bg-black p-3 rounded-4 text-white">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12">
                            <Community project={project} openModal={openModal} />
                            </div>
                            <div className="col-12 col-lg-12 col-md-12">
                                <Location />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">

                            <div className="descCont">
                                <div className=" pb-3 text-center">
                                    <h4 className="text-subhead ">Payment Plan</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 col-md-12">
                            <PaymentPlan />
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <ContactSection formName='Off-plan Contact Agent' projectName={project.title} fileUrl={project.fileUrl} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-darkGold">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">

                            <div className="descCont">
                                <div className=" pb-3 text-center">
                                    <h4 className="text-subhead ">Similar Projects</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 col-md-12">
                            <RelatedProject openModal={openModal} />
                        </div>
                    </div>
                </div>
            </section>
            <ProjectModal
        isOpen={!!selectedProject}
        title={selectedProject?.projectName || ""}
        formName={selectedProject?.formName || "Brochure Request"}
        fileUrl={selectedProject?.fileUrl}
        onClose={closeModal}
      />
        </main>
    )
}
export default Page;