"use client";

import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

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

const ContactSection: React.FC<formNameProp> = ({formName,projectName,fileUrl}) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (value: string | undefined) => {
        setFormData({ ...formData, phone: value || "" });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
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
                                        <form onSubmit={handleSubmit} className="contact-form">
                                            <div className="row g-2 justify-content-center">
                                            <div className="col-12 col-md-3 mb-2">
                                                <input type="hidden" name="formName" value={formName} />
                                                <input type="hidden" name="fileUrl" value={fileUrl} />
            <input type="hidden" name="projectName" value={projectName} />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Name*"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-md-3 mb-2">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Email*"
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 col-md-3 mb-2">
                                                <PhoneInput
                                                    value={formData.phone}
                                                    onChange={handlePhoneChange}
                                                    defaultCountry="AE" // Sets the default country
                                                    className="form-control"
                                                    
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
