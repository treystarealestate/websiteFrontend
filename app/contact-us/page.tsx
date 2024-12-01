import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PAGES from "@/src/constants/pages";
import { getMetaDataByPage } from "@/src/api/seo";

const Contact = dynamic(
  () => import("@/components/contact/ContactPage")
);
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const meta = await getMetaDataByPage(PAGES.contact_us);

  return {
    title: meta?.data?.title,
    description: meta?.data?.meta_description,
    keywords: meta?.data?.meta_keywords,
  };
};

function blogs() {
  return (
    <>
      <Contact></Contact>
    </>
  );
}
export default blogs;
