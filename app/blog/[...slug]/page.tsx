import React from "react";
import type { Metadata } from "next";
import SingleMediaPage from "@/components/blogs/SingleBlogPage";
import { getMediaBySlug } from "@/src/api/media";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function SingleMedia({ params }: Props) {
    const slug = params?.slug?.[0];  // Ensure you are accessing the correct value
   
    if (!slug) {
      console.error("Slug is missing or incorrect");
      return <div>No slug found</div>;
    }
  
    const media = await getMediaBySlug(slug);
  
    if (!media) notFound();
    console.log(media);
    return <SingleMediaPage mediaData={media?.data}></SingleMediaPage>;
  }
  
// Generate Metadata for Server-side Rendering
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
    const slug = params.slug?.[0];
    const mediaMeta = await fetch(
      `${process.env.API_HOST}medias/${slug}/meta`
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log("err", err);
      });

    return {
      title: mediaMeta?.data?.meta_title || "Default Title",
      description: mediaMeta?.data?.meta_description || "Default Description",
      keywords: mediaMeta?.data?.meta_keywords || "default, keywords",
    };
  
};

