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

const ContactForm: React.FC<formNameProp> = ({ formName, projectName, fileUrl }) => {
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
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="mb-2">

                <input type="hidden" value="formName" {...register("formName", { required: false })} />
                <input type="hidden" value={fileUrl} {...register("fileUrl", { required: false })} />
                <input type="hidden" value={projectName} {...register("projectName", { required: false })} />
                <input type="hidden" value={currentPageURL} {...register("page", { required: false })} />

                <label htmlFor="name" className="form-label">
                    Name *
                </label>
                <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}

                />
                {errors.name && <small className="text-danger">Name is required.</small>}
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="form-label">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}

                />
                {errors.email && <small className="text-danger">Email is required.</small>}
            </div>
            <div className="mb-2">
                <label htmlFor="phone" className="form-label">
                    Phone Number *
                </label>
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
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    id="message"
                    {...register("message", { required: false })}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows={3}

                />
                {errors.message && (
                    <small className="text-danger">Message is required.</small>
                )}
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-main-black">
                    <span className='align-top'>Submit Now </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
