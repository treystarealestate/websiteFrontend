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
                                                <div>
                                                    <span className='text-sub text-gold'><i className="bi bi-dash-lg"></i> About Us</span>
                                                </div>
                                                <h3 className="text-head py-2">Turning Dreams into Reality with Integrity</h3>
                                                <p className="text-para">At Treysta, we redefine the real estate experience by making trust the cornerstone of every interaction. Rooted in the Nordic concept of "trust," we combine integrity and reliability with a touch of fun, ensuring that your property journey is both smooth and enjoyable.</p>
                                                <p className="text-para pb-2">Whether you're buying, selling, or investing, our team is committed to providing you with a refreshing, stress-free approach. With Treysta, real estate doesn't have to be a daunting process—it's an exciting opportunity, guided by experts you can truly trust.</p>
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
                                                transition={{ duration: 1.01 }} className="text-head py-2">Turning Dreams into Reality with Integrity</motion.h3>
                                            <motion.p variants={introPictureVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1.02 }} className="text-para">At Treysta, we redefine the real estate experience by making trust the cornerstone of every interaction. Rooted in the Nordic concept of "trust," we combine integrity and reliability with a touch of fun, ensuring that your property journey is both smooth and enjoyable.</motion.p>
                                            <motion.p variants={introPictureVariants} // Use the header animation variants
                                                initial="hide"
                                                whileInView="show"
                                                transition={{ duration: 1.04 }} className="text-para pb-2">Whether you're buying, selling, or investing, our team is committed to providing you with a refreshing, stress-free approach. With Treysta, real estate doesn't have to be a daunting process—it's an exciting opportunity, guided by experts you can truly trust.</motion.p>
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
