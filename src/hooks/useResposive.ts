"use client";
import { useEffect, useState } from "react";

export function useResponsive() {
  const [isMobileDev, setIsMobileDev] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is below a certain threshold (e.g., 768 pixels for mobile)
      const isMobileDevice = window.innerWidth < 768;

      if (isMobileDevice) {
        document.body.style.overflow = "auto";
      }
      setIsMobileDev(isMobileDevice);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileDev;
}