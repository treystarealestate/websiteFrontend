"use client";

import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from 'react-phone-number-input'
import { getCurrentUrl } from "@/src/utils/helpers/common";
import { useForm, Controller, FieldError } from "react-hook-form";
import { saveContactFormApi } from "@/src/services/HomeService";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";



interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}
interface formNameProp {
    formName: string;
    projectName?: string;
    fileUrl?: string;
}
interface ContactFormData {
    formName: string;
    fileUrl: string;
    projectName: string;
    page: string;
    name: string;
    email: string;
    phone: string;
    message: string;
}
const ContactSection: React.FC<formNameProp> = ({ formName, projectName, fileUrl }) => {
    const currentPageURL = getCurrentUrl();
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<ContactFormData>();

    const onSubmit = (data: ContactFormData) => {
        saveContactFormApi(data)
            .then((res) => {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    showCloseButton: true,
                    title: "Form Submitted",
                    text: "Thank you. Our team will get back to you soon.",
                    showConfirmButton: false,
                    timer: 2000,

                });
                reset();
            })
            .catch((err) => {
                toast.error("Something went wrong, please try again");
            });
    };
    return (
        <div>
            {/* TALK TO OUR SPECIALIST  */}
            <div className="borderGold p-4 rounded-4">
                <div className="row justify-content-center py-3">
                    <div className="col-12 col-lg-7 col-md-12">
                        <div className="descCont text-center pb-3">
                            <h5 className="text-subhead">Talk to our Specialist</h5>
                            <p className="text-para">
                                Our property agents possess the experience, expertise, and business acumen to help you make the right investment—at the right location and the right price.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-10 col-md-12 my-auto">
                        <div className="text-center">
                            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                                <div className="row g-2 justify-content-center">
                                    <div className="col-12 col-md-3 mb-2">



                                        <input type="hidden" value="formName" {...register("formName", { required: false })} />
                                        <input type="hidden" value={fileUrl} {...register("fileUrl", { required: false })} />
                                        <input type="hidden" value={projectName} {...register("projectName", { required: false })} />
                                        <input type="hidden" value={currentPageURL} {...register("page", { required: false })} />


                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Name*"
                                            {...register("name", { required: true })}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}

                                        />
                                        {errors.name && <small className="text-danger">Name is required.</small>}
                                    </div>
                                    <div className="col-12 col-md-3 mb-2">
                                        <input
                                            type="email"
                                            id="email"

                                            placeholder="Email*"
                                            {...register("email", { required: true })}
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}

                                        />
                                        {errors.email && <small className="text-danger">Email is required.</small>}
                                    </div>
                                    <div className="col-12 col-md-3 mb-2">
                                        <Controller
                                            name="phone"

                                            control={control}
                                            rules={{
                                                required: 'Phone is required.',
                                                validate: {
                                                    validPhoneNumber: (value) => isValidPhoneNumber(value) || 'Invalid phone number'
                                                }
                                            }}
                                            render={({ field }) => (
                                                <>
                                                    <PhoneInput
                                                        international
                                                        countryCallingCodeEditable={false}
                                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                        defaultCountry="AE"
                                                        placeholder="Enter Phone Number"
                                                        error={errors.phone ? 'Invalid phone number' : undefined}
                                                        {...field}

                                                    />
                                                    {errors.phone && (
                                                        <small className="text-danger">
                                                            {(errors.phone as FieldError).message}
                                                        </small>
                                                    )}

                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="col-12 col-md-2 text-end mb-2">
                                        <button type="submit" className="btn btn-main-black w-100">
                                            <span className='align-top'>Submit Now </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
