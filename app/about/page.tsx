import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PAGES from "@/src/constants/pages";
import { getMetaDataByPage } from "@/src/api/seo";
import { getTeams } from "@/src/api/teams";
const AboutPage = dynamic(
  () => import("@/components/about/AboutPage")
);
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const meta = await getMetaDataByPage(PAGES.about);

  return {
    title: meta?.data?.title,
    description: meta?.data?.meta_description,
    keywords: meta?.data?.meta_keywords,
  };
};

async function About() {
  const teams = await getTeams();

  return (
    <>
      <AboutPage teamData={teams?.data} />
    </>
  );
}
export default About;
