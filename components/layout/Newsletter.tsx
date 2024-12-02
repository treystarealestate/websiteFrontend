"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useVariants } from '@/src/hooks/useVariants';
import { useResponsive } from "@/src/hooks/useResposive";
import { getCurrentUrl } from "@/src/utils/helpers/common";
import { useForm } from "react-hook-form";
import { saveContactFormApi } from "@/src/services/HomeService";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Newsletter = () => {
    const { introTopVariants } = useVariants();
    const isMobileDev = useResponsive();
    const currentPageURL = getCurrentUrl();
    
    interface ContactFormData {
        formName: string;
        email: string;
        page: string;
        
      }

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        saveContactFormApi(data)
          .then((res) => {
            Swal.fire({
              position: "center",
              icon: "success",
              showCloseButton: true,
              title: "Subscription Successful",
              text: "Thank you for subscribing to our mailing list.",
              showConfirmButton: false,
              timer: 2000,
             
            });
    
            // toast.success("Thank you for subscribing to our mailing list.", {
            //   toastId: "subscription-success-toast"
            // });
    
            reset();
          })
          .catch((err) => {
            toast.error("Something went wrong, please try again");
          });
      };

    return (
        <section className='py-5 border-top bg-darkGold'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 col-md-12">
                        <div className='row justify-content-center'>
                            <div className="col-12 col-lg-6 col-md-7">
                                <div className='pb-5 pb-lg-0 pb-md-0'>

                                {isMobileDev ? (
                                            <div>
                                    <div className="descCont text-center pb-3 ">
                                        <h4 className="text-head text-black fw-bold">Stay Updated</h4>
                                        <p className="text-desc">Unlock new realms of real estate. Get instant access to market news, trends, and updates in your inbox.</p>
                                    </div>
                                    </div>
                                        ) : (
                                            <motion.div variants={introTopVariants} // Use the header animation variants
                                            initial="hide"
                                            whileInView="show"
                                            transition={{ duration: 1 }}>
                                    <div className="descCont text-center pb-3 ">
                                        <h4 className="text-head text-black fw-bold">Stay Updated</h4>
                                        <p className="text-desc">Unlock new realms of real estate. Get instant access to market news, trends, and updates in your inbox.</p>
                                    </div>
                                    </motion.div>
                                    )}
                                    <div>
                                        <form action="" method="post" className='newsletterForm' onSubmit={handleSubmit(onSubmit)}>
                                            <div className="input-group">
                                            <input
                                                    type="hidden"
                                                    value="EmailerForm"
                                                    {...register("formName", { required: false })}
                                                />
                                                <input
                                                    type="hidden"
                                                    value={currentPageURL}
                                                    {...register("page", { required: false })}
                                                />
                                                <input type="email" id="form1" className="form-control" placeholder="Email address" {...register("email", { required: true })}/>
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