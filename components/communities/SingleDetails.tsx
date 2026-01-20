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
import parse from "html-react-parser";

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
interface Project {
    name: string,
    address: string,
    fileUrl: string,
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
    imageGallery: GalleryItem[],
    exteriorGallery: GalleryItem[],
    amenities: AmenityItem[],
    agent: agentItem,
    payment: PaymentPlanItem[];
    attractionDescription: string,
    otherDescription: string,
    projects:nearByProjects[]

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


interface SingeleDetailsProps {

    communityData?: Project; // Optional single project
}

const SingeleDetails: React.FC<SingeleDetailsProps> = ({ communityData }) => {
    console.log(communityData)
    const project = {
        title: "Damac Sun City",
        fileUrl: "/assets/frontend/images/service1.webp", // Replace with actual image paths
    };


    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: communityData?.name || "Project", active: true },
    ];


    const imageGallery = communityData?.imageGallery?.map((image) => image.path) || [];

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
                                    <h1 className="text-subhead">{communityData?.name}</h1>
                                    <small>
                                        <i className="bi bi-geo-alt text-gold"></i> {communityData?.address}
                                    </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-12 col-md-12">
                            <div className="project-main-image mb-3">
                                <img
                                    src={communityData?.mainImage}
                                    className="img-fluid rounded-4"
                                    alt="project title"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="descCont p-1 p-md-3 p-lg-5">

                                <div className="text-para">{communityData?.attractionDescription && parse(communityData?.attractionDescription)}
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="descCont p-1 p-md-3 p-lg-5">
                                <h4 className="text-subhead">Near By</h4>
                                <div className="text-para">
                                    {communityData?.otherDescription && parse(communityData?.otherDescription)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <div className="bg-black p-3 rounded-4 text-white">
                        <div className="row">

                            <div className="col-12 col-lg-12 col-md-12">
                                <Location lat={communityData?.address_latitude} lng={communityData?.address_longitude} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                communityData?.projects && communityData?.projects.length > 0 &&  <section className="py-5 bg-darkGold">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-12 col-md-12">
                                <div className="descCont">
                                    <div className="pb-3 text-center">
                                        <h4 className="text-subhead"> Projects</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-12 col-md-12">
                                <RelatedProject nearByProjects={communityData?.projects}  openModal={openModal} />
                            </div>
                        </div>
                    </div>
                </section>
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
        </main>
    );
};

export default SingeleDetails;
