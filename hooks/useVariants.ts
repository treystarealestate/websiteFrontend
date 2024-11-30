// hooks/useVariants.ts
import { Variants } from 'framer-motion';

// Define and return the variants directly
export const useVariants = () => {
  const introHeaderVariants: Variants = {
    hide: {
      opacity: 0,
      x: -500,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const introPictureVariants: Variants = {
    hide: {
      opacity: 0,
      x: 500,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };
  const introTopVariants: Variants = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  // Return the variants so that they can be used directly in components
  return { introHeaderVariants, introPictureVariants, introTopVariants };
};
