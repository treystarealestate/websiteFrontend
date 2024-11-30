"use client";
import Image from "next/image";
import VideoBanner from '../components/home/VideoBanner';
import About from "@/components/home/About";
import Partner from "@/components/home/Partner";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Newsletter from "@/components/layout/Newsletter";
import Blogs from "@/components/home/Blogs";
import CommunityPage from "@/components/home/Community";
import ProjectModal from "@/components/UI/ProjectModal";
import { useState } from "react";
export default function Home() {
   // Function to open the modal and pass project details and formName
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
    <VideoBanner />
    <About />
    <Partner />
    <FeaturedProjects openModal={openModal}/>
    <CommunityPage />
    <Blogs />
    <Newsletter />
    <ProjectModal isOpen={!!selectedProject}
        title={selectedProject?.projectName || ""}
        formName={selectedProject?.formName || "Brochure Request"}
        fileUrl={selectedProject?.fileUrl}
        onClose={closeModal}
      />
   </main>
  );
}
