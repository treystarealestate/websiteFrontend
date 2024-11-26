import React from "react";

interface MainBannerProps {
    bannerHead: string;
    bannerImg: string;
    bannerSub?: string;
}

export const MainBanner: React.FC<MainBannerProps> = ({
    bannerHead,
    bannerImg,
    bannerSub,
}) => {
    return (
        <section
            className="bannerBg"
            style={
                bannerImg
                    ? {
                        backgroundImage: `url('${bannerImg}')`,
                        boxShadow: "inset 0 0 0 2000px rgba(14, 14, 14, 0.4)",
                    }
                    : {}
            }
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-12 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-9 col-md-12">
                                <div className="bannerHeading text-center">
                                    <div className="text-white textContent">
                                        <p className="mb-0 text-sub text-gold">{bannerSub && <h3>{bannerSub}</h3>}</p>
                                        <h1 className="display-4">{bannerHead}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
