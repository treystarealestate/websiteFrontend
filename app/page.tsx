import Image from "next/image";
import VideoBanner from '../components/home/VideoBanner';
import About from "@/components/home/About";
import Partner from "@/components/home/Partner";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Newsletter from "@/components/layout/Newsletter";
import Blogs from "@/components/home/Blogs";
export default function Home() {
  return (
   <main>
    <VideoBanner />
    <About />
    <Partner />
    <FeaturedProjects />
    <Blogs />
    <Newsletter />
   </main>
  );
}
