"use client";
import { useState, useCallback } from "react";
import Partner from "@/components/home/Partner";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Newsletter from "@/components/layout/Newsletter";
import Blogs from "@/components/home/Blogs";
import CommunityPage from "@/components/home/Community";
import ProjectModal from "@/components/UI/ProjectModal";

// Define the HomeData type if it's not already defined
interface Developer {
  name: string;
  logo: string;
}

interface Community {
  id: number;
  name: string;
  mainImage: string;
  slug:String
}

interface Blog {
  id: number;
  url: string;
  title: string;
  image: string;
  publish_date: string;
}

interface Project {
  title: string;
  image: string;
  price: string;
  bedrooms: string;
  developer: string;
  completionDate: string;
  slug: string;
}

interface HomeData {
  developers: Developer[];
  communities: Community[];
  blogs: Blog[];
  projects: Project[];
  // Other properties if necessary
}

type HomePageProps = {
  homeData: HomeData;
};

const HomePage = ({ homeData }: HomePageProps) => {
  const [selectedProject, setSelectedProject] = useState<{
    projectName: string;
    fileUrl: string;
    formName: string;
  } | null>(null);

  // Memoize openModal to avoid unnecessary re-renders
  const openModal = useCallback((projectName: string, fileUrl: string, formName: string) => {
    setSelectedProject({ projectName, fileUrl, formName });
  }, []);

  const closeModal = () => {
    setSelectedProject(null);
  };

  if (!homeData) {
    return <div>Loading...</div>; // Handle loading state if homeData is not yet available
  }

  return (
    <>
      <Partner developers={homeData.developers} />
      <FeaturedProjects projects={homeData.projects} openModal={openModal} />
      <CommunityPage communities={homeData.communities} />
      <Blogs blogs={homeData.blogs} />
      <Newsletter />
      <ProjectModal
        isOpen={!!selectedProject}
        title={selectedProject?.projectName || ""}
        formName={selectedProject?.formName || "Brochure Request"}
        fileUrl={selectedProject?.fileUrl}
        onClose={closeModal}
      />
    </>
  );
};

export default HomePage;
