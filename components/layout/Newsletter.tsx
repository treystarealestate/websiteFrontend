"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useVariants } from '@/hooks/useVariants';
const Newsletter = () => {
    const { introTopVariants } = useVariants();
    return (
        <section className='py-5 border-top bg-darkGold'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12">
                        <div className='row justify-content-center'>
                            <div className="col-12 col-lg-6 col-md-7">
                                <div className='pb-5 pb-lg-0 pb-md-0'>
                                <motion.div variants={introTopVariants} // Use the header animation variants
                                            initial="hide"
                                            whileInView="show"
                                            transition={{ duration: 1 }}>
                                    <div className="descCont text-center pb-3 ">
                                        <h4 className="text-head text-black fw-bold">Stay Updated</h4>
                                        <p className="text-desc">Unlock new realms of real estate. Get instant access to market news, trends, and updates in your inbox.</p>
                                    </div>
                                    </motion.div>
                                    <div>
                                        <form action="" method="post" className='newsletterForm'>
                                            <div className="input-group">
                                                <input type="email" id="form1" className="form-control" placeholder="Email address" required/>
                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-subsribe">
                                                    <span className='align-top'>send </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter