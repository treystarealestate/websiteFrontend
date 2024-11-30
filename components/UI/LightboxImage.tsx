'use client';

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface LightboxImageProps {
    images: string[];
    title: string;
}

const LightboxImage: React.FC<LightboxImageProps> = ({ images, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <>
            {/* Image Thumbnail */}
            <div className="project-sub-image mb-3" onClick={() => openLightbox(0)} style={{ cursor: 'pointer' }}>
                <img
                    src={images[0]}
                    className="img-fluid rounded-4"
                    alt={title}
                />
                <div className="imgProOverlay rounded-4">
                    <a href="#" className="text-white">
                        {title}
                    </a>
                </div>
            </div>

            {/* Lightbox */}
            {isOpen && (
                <Lightbox
                    open={isOpen}
                    index={photoIndex}
                    close={() => setIsOpen(false)}
                    slides={images.map((src) => ({ src, alt: title }))}
                    render={{
                        slide: (props) => {
                            const { src, alt } = props.slide; // Destructure from `slide`
                            return (
                                <img
                                    src={src}
                                    alt={alt || 'lightbox image'} // Fallback to default alt text
                                    className="img-fluid"
                                />
                            );
                        },
                    }}
                />
            )}
        </>
    );
};

export default LightboxImage;
