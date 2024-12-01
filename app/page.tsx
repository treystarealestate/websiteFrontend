import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PAGES from "@/src/constants/pages";
import { getMetaDataByPage } from "@/src/api/seo";

import { getHomeData } from "@/src/api/home";
import VideoBanner from '@/components/home/VideoBanner';


const HomePage = dynamic(() => import("@/components/home/HomePage"));
const About = dynamic(() => import("@/components/home/About"));
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const meta = await getMetaDataByPage(PAGES.home);

  return {
    title: meta?.data?.title,
    description: meta?.data?.meta_description,
    keywords: meta?.data?.meta_keywords,
  };
};

export default async function Page() {
  const homeData = await getHomeData();
  return (
    <>
      <main>
        <VideoBanner />
        <About />
        <HomePage homeData={homeData.data} />
      </main>
    </>
  );
}
