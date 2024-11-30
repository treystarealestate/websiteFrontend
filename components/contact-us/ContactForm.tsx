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
const ContactForm: React.FC<formNameProp> = ({formName,projectName,fileUrl}) => {
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
        <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-2">
            <input type="hidden" name="formName" value={formName} />
            <input type="hidden" name="fileUrl" value={fileUrl} />
            <input type="hidden" name="projectName" value={projectName} />
                <label htmlFor="name" className="form-label">
                    Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="form-label">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-2">
                <label htmlFor="phone" className="form-label">
                    Phone Number *
                </label>
                <PhoneInput
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    defaultCountry="AE" // Sets the default country
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows={3}
                    required
                />
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
