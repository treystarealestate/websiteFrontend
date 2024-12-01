import React from "react";
import type { Metadata } from "next";
import SingleDetails from "@/components/off-plan/singleDetails"; // Corrected typo in component name
import { getNearbyProjectsBySlug, getProjectDetailsBySlug } from "@/src/api/projects";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const dynamicParams = true;

export default async function SingleProject({ params }: Props) {
  // Extract slug from params and handle it as a string or array
  const slug = params?.slug?.[0];  // Ensure you are accessing the correct value
  if (!slug) {
    console.error("Slug is missing or incorrect");
    return <div>No slug found</div>;
  }
  // Fetch project details   by slug
  const projects = await getProjectDetailsBySlug(slug);

  // Fetch nearby projects
  const nearbyProjects = await getNearbyProjectsBySlug(slug);

  return (
    <SingleDetails
      nearByProjects={nearbyProjects?.data}
      projectData={projects?.data}
    />
  );
}


  
// Generate Metadata for Server-side Rendering
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
    const slug = params.slug?.[0];
    const meta = await fetch(
      `${process.env.API_HOST}projects/${slug}/meta`
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log("err", err);
      });

    return {
      title: meta?.data?.meta_title || "Default Title",
      description: meta?.data?.meta_description || "Default Description",
      keywords: meta?.data?.meta_keywords || "default, keywords",
    };
  
};

