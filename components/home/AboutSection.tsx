"use client";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { useVariants } from '@/src/hooks/useVariants';
import aboutImage1 from '../../public/assets/frontend/images/about1.jpg'
import aboutImage from '../../public/assets/frontend/images/about.jpg'
import patternImg from '../../public/assets/frontend/images/pattern.png'
import { useResponsive } from "@/src/hooks/useResposive";

const About = () => {
    const { introHeaderVariants, introPictureVariants } = useVariants();
    const isMobileDev = useResponsive();
    return (
        <section className=''>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-md-6 my-auto">
                                <div className='about-left py-5'>
                                    <div className="patternBg" style={{ backgroundImage: `url(${patternImg.src})`, height: '100%', width: 'auto' }}></div>
                                    <div className="position-relative shadow p-2 rounded-top-pill rounded-5 bg-offwhite img-one">

                                        {isMobileDev ? (
                                            <img
                                                src='/assets/frontend/images/about1.jpg'
                                                className="img-fluid rounded-top-pill rounded-5"
                                                alt="about"
                                            />
                                        ) : (
                                            <motion.img variants={introHeaderVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1 }} src='/assets/frontend/images/about1.jpg' className="img-fluid rounded-top-pill rounded-5" alt="about"></motion.img>
                                        )}

                                    </div>

                                    {isMobileDev ? (
                                        <div>
                                            <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-offwhite">
                                                <Image src={aboutImage} className="img-fluid rounded-3" alt="" />
                                            </div>
                                        </div>
                                    ) : (

                                        <motion.div variants={introHeaderVariants} // Use the header animation variants
                                            initial="hide"
                                            whileInView="show"
                                            transition={{ duration: 1.1 }}>
                                            <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-offwhite">
                                                <Image src={aboutImage} className="img-fluid rounded-3" alt="" />
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                                {/* <Image src={aboutImage}  alt='about us' className='img-fluid' /> */}
                            </div>
                            <div className="col-12 col-lg-6 col-md-6 my-auto">
                                <div className="descCont p-sm-1 p-md-3 p-lg-5">
                                    {isMobileDev ? (
                                        <>
                                            <>
                                            <div >
                                                <span className='text-sub text-gold'><i className="bi bi-dash-lg"></i> About Us</span>
                                            </div>
                                            <h3  className="text-head py-2">trëysta: Where Trust Meets Fun in Real Estate</h3>
                                            <p  className="text-para">At treysta, trust isn’t just a value; it’s our IDENTITY.</p>

                                            <p  className="text-para">Inspired by the Nordic word for “trust,” we’re here to bring integrity, reliability, and a little fun into the world of real estate.</p>

                                            <p  className="text-para pb-2">We believe that buying, selling, or investing in property doesn’t have to be a stressful ordeal—it can be exciting, enjoyable, and surprisingly refreshing.</p>
                                            <div>
                                                <Link href="/about-us" className='btn btn-main'>
                                                    <span className='align-top'>Know More </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                                </Link>
                                            </div>
                                            </>

                                        </>
                                    ) : (

                                        <>
                                            < motion.div variants={introPictureVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1 }}>
                                                <span className='text-sub text-gold'><i className="bi bi-dash-lg"></i> About Us</span>
                                            </motion.div>
                                            <motion.h3 variants={introPictureVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1.01 }} className="text-head py-2">trëysta: Where Trust Meets Fun in Real Estate</motion.h3>
                                            <motion.p variants={introPictureVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1.02 }} className="text-para">At treysta, trust isn’t just a value; it’s our IDENTITY.</motion.p>

                                            <motion.p variants={introPictureVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1.02 }} className="text-para">Inspired by the Nordic word for “trust,” we’re here to bring integrity, reliability, and a little fun into the world of real estate.</motion.p>

                                            <motion.p variants={introPictureVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1.04 }} className="text-para pb-2">We believe that buying, selling, or investing in property doesn’t have to be a stressful ordeal—it can be exciting, enjoyable, and surprisingly refreshing.</motion.p>
                                            <motion.div variants={introPictureVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1.05 }}>
                                                <Link href="/about-us" className='btn btn-main'>
                                                    <span className='align-top'>Know More </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                                </Link>
                                            </motion.div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
