import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PAGES from "@/src/constants/pages";
import { getMetaDataByPage } from "@/src/api/seo";

const ProjectPageList = dynamic(
  () => import("@/components/off-plan/ProjectList")
);
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const meta = await getMetaDataByPage(PAGES.projects);

  return {
    title: meta?.data?.title,
    description: meta?.data?.meta_description,
    keywords: meta?.data?.meta_keywords,
  };
};

function blogs() {
  return (
    <>
      <ProjectPageList></ProjectPageList>
    </>
  );
}
export default blogs;
