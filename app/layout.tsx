import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/assets/frontend/css/style.css';
import { Metadata } from "next";
import Head from "next/head";
import CustomNavbar from "@/components/layout/Navbar";
import Footer from '@/components/layout/Footer';
import Script from "next/script";


export const metadata: Metadata = {
  title: "Treysta",
  description: "Where Trust Meets Fun in Real Estate",
  keywords: ["Rent", "Buy", "Rent"], // Array of strings
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       {/* Ensure title is a string */}
       <title>{String(metadata.title)}</title>

        {/* Ensure description is a string */}
        <meta
          name="description"
          content={metadata.description || ""} // Fallback to empty string if null or undefined
        />

        {/* Ensure keywords is a string (join array if it's an array) */}
        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords)
              ? metadata.keywords.join(", ") // Join array into a string
              : metadata.keywords || "" // Use as-is if it's a string, fallback if null or undefined
          }
        />
        
        <meta name="robots" content="index,follow" />
      </head>
      <body>
    
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5N3T8V89"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <CustomNavbar />
        {children}
         <Footer/>
        </body>
    </html>
  );
}
