'use client';

import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

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
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </>
    );
};

export default LightboxImage;
