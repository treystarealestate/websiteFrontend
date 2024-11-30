'use client';

import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';


interface LightboxImageProps {
    images: string[];
    title: string;
}

const LightboxImage: React.FC<LightboxImageProps> = ({ images, title }) => {
    return (
        <div>
            {/* Image Gallery */}
            <Gallery>
                <div className="project-sub-image mb-3" style={{ cursor: 'pointer' }}>
                    {/* Image Thumbnail */}
                    <Item
                        original={images[0]}  // URL of the image to be shown in full view
                        thumbnail={images[0]} // Thumbnail image to show initially
                        width="1024"           // Image width
                        height="768"           // Image height
                        alt={title}            // Alt text for the image
                    >
                        {({ ref, open }) => (
                            <img
                                ref={ref}
                                onClick={open}  // Open the image in the lightbox
                                src={images[0]}  // Thumbnail image
                                className="img-fluid rounded-4"
                                alt={title}
                            />
                        )}
                    </Item>

                    <div className="imgProOverlay rounded-4">
                        <a href="#" className="text-white">
                            {title}
                        </a>
                    </div>
                </div>
            </Gallery>
        </div>
    );
};

export default LightboxImage;
