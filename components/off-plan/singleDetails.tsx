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


interface GalleryItem {
    id: number;
    path: string;
    title: string;
    order: number | null;
}
interface AmenityItem {
    id: string;
    name: string;
    image: string;
}
interface agentItem {
    name: string;
    contact?: string; // Optional, in case contact is not provided
    whatsapp?: string; // Optional, in case whatsapp is not provided
    email: string;
    image: string;
}
interface PaymentRow {
    id: string;
    key: string;
    value: string;
  }
  
  interface PaymentPlanItem {
    title: string;
    rows: PaymentRow[];
  }
  interface nearByProjects {
   
        id:string;
        title: string;
        image: string;
        price: string;
        bedrooms: string;
        developer: string;
        completionDate: string;
        accommodation: string;
        slug: string;
    
  }
interface Project {
    title: string;
    fileUrl: string;
    tag: string,
    communityName: string,
    mainImage: string,
    price: string,
    area: string,
    longDescription: string,
    bedrooms: string,
    accommodation: string,
    developerName: string,
    handOver: string,
    address_longitude: string,
    address_latitude: string,
    interiorGallery: GalleryItem[],
    exteriorGallery: GalleryItem[],
    amenities: AmenityItem[],
    agent: agentItem,
    payment: PaymentPlanItem[];
    communityOtherDescription: string,
    communityDescription: string

}

interface SingeleDetailsProps {
    nearByProjects?: nearByProjects[]; // Optional array of projects
    projectData?: Project; // Optional single project
}

const SingeleDetails: React.FC<SingeleDetailsProps> = ({ nearByProjects, projectData }) => {
    console.log(nearByProjects)
    const project = {
        title: "Damac Sun City",
        fileUrl: "/assets/frontend/images/service1.webp", // Replace with actual image paths
    };


    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Off-Plan", link: "/off-plan", active: false },
        { label: projectData?.title || "Project", active: true },
    ];


    const interiorImages = projectData?.interiorGallery?.map((image) => image.path) || [];
    const exteriorImages = projectData?.exteriorGallery?.map((image) => image.path) || [];


    const [selectedProject, setSelectedProject] = useState<{
        projectName: string;
        fileUrl: string;
        formName: string;
    } | null>(null);

    const openModal = (projectName: string, fileUrl: string, formName: string) => {
        setSelectedProject({ projectName, fileUrl, formName });
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <main>
            <Breadcrumb items={breadcrumbItems} />
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-8">
                            <div className="descCont">
                                <div className="pb-3">
                                    <h4 className="text-subhead">{projectData?.title}</h4>
                                    <small>
                                        <i className="bi bi-geo-alt text-gold"></i> {projectData?.communityName}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-md-12">
                            <div className="project-main-image mb-3">
                                <img
                                    src={projectData?.mainImage}
                                    className="img-fluid rounded-4"
                                    alt="project title"
                                />
                                <div className="topRightCont">
                                    <Badge className="bg-gold badge" text="light">
                                        {projectData?.tag}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-12">
                            <div className="row">
                                <div className="col-6 col-lg-12">
                                    {
                                        interiorImages.length > 0 && <LightboxImage images={interiorImages} title="Interior" />
                                    }
                                </div>
                                <div className="col-6 col-lg-12">
                                    {
                                        exteriorImages.length > 0 && <LightboxImage images={exteriorImages} title="Exterior" />
                                    }
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
                            <ProjectDetails projectData={{
                                startingPrice: projectData?.price,
                                startingSize: projectData?.area,
                                bedrooms: projectData?.bedrooms,
                                propertyType: projectData?.accommodation,
                                developer: projectData?.developerName,
                                handoverDate: projectData?.handOver,
                                description: projectData?.longDescription
                            }} />
                        </div>
                        <div className="col-12 col-lg-4 col-md-4">
                            <AgentDetails agent={projectData?.agent} openModal={openModal} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-darkGold">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <div className="descCont">
                                <div className="pb-3 text-center">
                                    <h4 className="text-subhead">Amenities</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 col-md-12">
                            <ProjectAminities amenities={projectData?.amenities} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-5">
                <div className="container">
                    <div className="bg-black p-3 rounded-4 text-white">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12">
                                <Community communityName={projectData?.communityName} communityDescription={projectData?.communityDescription} communityOtherDescription={projectData?.communityOtherDescription} openModal={openModal} />
                            </div>
                            <div className="col-12 col-lg-12 col-md-12">
                                <Location lat={projectData?.address_latitude} lng={projectData?.address_longitude} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                projectData?.payment && projectData.payment.length > 0 && (
                    <section className="my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-12 col-md-12">
                                    <div className="descCont">
                                        <div className="pb-3 text-center">
                                            <h4 className="text-subhead">Payment Plan</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12 col-md-12 text-center">
                                    <PaymentPlan payment={projectData?.payment ?? []} />
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }

            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12">
                            <ContactSection
                                formName="Off-plan Contact Agent"
                                projectName={project.title}
                                fileUrl={project.fileUrl}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {
                nearByProjects && nearByProjects.length > 0 &&  <section className="py-5 bg-darkGold">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12">
                                <div className="descCont">
                                    <div className="pb-3 text-center">
                                        <h4 className="text-subhead">Similar Projects</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-12 col-md-12">
                                <RelatedProject nearByProjects={nearByProjects}  openModal={openModal} />
                            </div>
                        </div>
                    </div>
                </section>
            }


            <ProjectModal
                isOpen={!!selectedProject}
                title={selectedProject?.projectName || ""}
                formName={selectedProject?.formName || "Brochure Request"}
                fileUrl={selectedProject?.fileUrl}
                onClose={closeModal}
            />
        </main>
    );
};

export default SingeleDetails;
