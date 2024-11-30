"use client";

import React, { useState } from "react";
import "react-phone-number-input/style.css";
import ContactForm from "../contact-us/ContactForm";
import { Modal } from "react-bootstrap";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ModalProps {
  isOpen: boolean;
  title: string;
  formName: string;
  fileUrl?: string;
  onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({
  isOpen,
  title,
  formName,
  fileUrl,
  onClose,
}) => {
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

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} onHide={onClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>{formName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mb-5">
        <div className="descCont text-center mb-3">
          <h5 className="text-subHead text-gold">Please Fill the form to get in touch</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-md-10">
            <ContactForm formName={formName} projectName={title} fileUrl={fileUrl} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
