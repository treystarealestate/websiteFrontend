import { useRouter } from "next/router";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useForm, Controller } from "react-hook-form";

function ServiceModal() {
    const { pathname } = useRouter();
    const [disableButton, setDisableButton] = useState(false);
    const [form, setForm] = useState({
        full_name: "",
        phone: "",
        email: "",
        property_type: "",
        location: "",
        message: "",
        url: pathname,
        page_title: "Service Form",
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
    } = useForm();

   
    return (
        <div>
            <div
                className="modal fade"
                id="serviceModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-fullscreen">
                    <div className="modal-content contactBgModal">
                        <div className="modal-body">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-12 col-md-12">
                                        <div className="row text-white">
                                            <div className="col-12 col-lg-12 col-md-12 close_button">
                                                <div className="float-end">
                                                    <p
                                                        className="text-white fs-1 cursor-pointer"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    >
                                                        X
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-5 col-md-5  d-flex justify-content-center pt-4">
                                                <div>
                                                    <div className="contactHead text-center mt-4 mb-5 d-flex">
                                                        <p className="mb-0">SUBMIT A MESSAGE</p>
                                                        <p
                                                            className="text-white fs-1 mt-4 cursor-pointer close_button2"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        >
                                                            X
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="contactFormDiv">
                                                            <form
                                                                id="contactForm"
                                                                className="contactForm"
                                                            >
                                                                <div className="row g-3">
                                                                    <div className="col-md-12">
                                                                        <div className="mb-4">
                                                                            <input
                                                                                type="hidden"
                                                                                value="Get in touch with us"
                                                                                {...register("page_title", {
                                                                                    required: true,
                                                                                })}
                                                                            />
                                                                            <input
                                                                                type="hidden"
                                                                                value={pathname}
                                                                                {...register("url", { required: true })}
                                                                            />
                                                                            <input
                                                                                type="text"
                                                                                {...register("full_name", {
                                                                                    required: true,
                                                                                })}
                                                                                className="form-control"
                                                                                id="name"
                                                                                name="full_name"
                                                                                placeholder="Full Name*"
                                                                            />
                                                                            {errors.full_name && (
                                                                                <small className="text-danger">
                                                                                    Name is required.
                                                                                </small>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="mb-4">
                                                                            <Controller
                                                                                name="phone"
                                                                                control={control}
                                                                                rules={{ required: true }}
                                                                                render={({
                                                                                    field: { onChange, value },
                                                                                }) => (
                                                                                    <PhoneInput
                                                                                        international
                                                                                        countryCallingCodeEditable={false}
                                                                                        className="form-control rounded-0 fs-14 d-flex"
                                                                                        country={"ae"}
                                                                                        placeholder="Phone Number*"
                                                                                        value={value}
                                                                                        onChange={onChange}
                                                                                        style={{ border: "0px" }}
                                                                                    />
                                                                                )}
                                                                            />

                                                                            {errors.phone && (
                                                                                <small className="text-danger">
                                                                                    Phone is required.
                                                                                </small>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="mb-4">
                                                                            <input
                                                                                type="email"
                                                                                {...register("email", {
                                                                                    required: true,
                                                                                })}
                                                                                className="form-control"
                                                                                id="email"
                                                                                name="email"
                                                                                placeholder="Email*"
                                                                            />
                                                                            {errors.email && (
                                                                                <small className="text-danger">
                                                                                    Email is required.
                                                                                </small>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <div className="mb-4">
                                                                            <label className="form-label">
                                                                                Message
                                                                            </label>
                                                                            <textarea
                                                                                id="message"
                                                                                className="form-control formTextarea"
                                                                                rows={3}
                                                                                {...register("message", {
                                                                                    required: false,
                                                                                })}
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <button
                                                                            type="submit"
                                                                            disabled={disableButton}
                                                                            
                                                                            className="btn btn-outline-white contactBtn"
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-1 col-md-1">
                                                <div className="borderVerticalTesti"></div>
                                            </div>
                                            <div className="col-12 col-lg-5 col-md-5 d-flex justify-content-center pt-4">
                                                <div>
                                                    <div className="contactHead text-center mb-5 ms-0 ms-lg-5 ms-md-5">
                                                        <p className="mb-0">CONTACT DETAILS</p>
                                                    </div>
                                                    <div>
                                                        <ul className="list-unstyled contactDetails">
                                                            <li className="pb-5">
                                                                <div className="d-flex">
                                                                    <div className="my-auto me-3">
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/telephone.webp"
                                                                                alt="Elite Properties"
                                                                                className="img-fluid"
                                                                                width={33}
                                                                            />
                                                                        </center>
                                                                    </div>
                                                                    <div className="my-auto">
                                                                        <p className="mb-1">Phone</p>
                                                                        <small>
                                                                            <a
                                                                                href="tel:+97147701087"
                                                                                target="_blank"
                                                                                className="text-decoration-none text-white"
                                                                            >
                                                                                +971 0 000 0000
                                                                            </a>
                                                                        </small>
                                                                        <div className="mb-0">
                                                                            <small>
                                                                                <a
                                                                                    href="tel:+971 0 000 0000"
                                                                                    target="_blank"
                                                                                    className="text-decoration-none text-white"
                                                                                >
                                                                                    +971 0 000 0000
                                                                                </a>
                                                                            </small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="pb-5">
                                                                <div className="d-flex">
                                                                    <div className="my-auto me-3">
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/mail.webp"
                                                                                alt="Elite Properties"
                                                                                className="img-fluid"
                                                                                width={33}
                                                                            />
                                                                        </center>
                                                                    </div>
                                                                    <div className="my-auto">
                                                                        <p className="mb-1">Email</p>
                                                                        <small>
                                                                            <a
                                                                                href="mailto:info@elitepropertydxb.com"
                                                                                target="_blank"
                                                                                className="text-decoration-none text-white"
                                                                            >
                                                                                info@tryesta.com
                                                                            </a>
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="pb-5">
                                                                <div className="d-flex">
                                                                    <div className="my-auto me-3">
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/address.webp"
                                                                                alt="Elite Properties"
                                                                                className="img-fluid"
                                                                                width={33}
                                                                            />
                                                                        </center>
                                                                    </div>
                                                                    <div className="my-auto">
                                                                        <p className="mb-1">Address</p>
                                                                        <small>
                                                                            <a rel="noopener"
                                                                                href="https://maps.app.goo.gl/9mfsfq9V9hdxL9LZ645346"
                                                                                target="_blank"
                                                                                className="text-decoration-none text-white"
                                                                            >
                                                                                Treysta Brokerage, L.L.C.
                                                                                <br></br>
                                                                                Dubai UAE
                                                                            </a>
                                                                            <a  rel="noopener" href="https://maps.app.goo.gl/9mfsfq9V9hdxL9LZ645" className="text-decoration-underline" target="_blank"><p className="text-desc mb-0">See on Google Map</p></a>
                                                                            
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className="ms-0 ms-lg-5 ms-md-5 mb-5">
                                                            <ul className="list-unstyled socialLightFoot text-start  mb-1">
                                                                <li>
                                                                    <a>Stay Connected</a>
                                                                </li>
                                                            </ul>
                                                            <div className="d-flex justify-content-start">
                                                                <div className="d-inline p-2 me-2">
                                                                    <a
                                                                        href="https://www.facebook.com/"
                                                                        target="_blanket"
                                                                    >
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/facebook.webp"
                                                                                className="img-fluid align-middle"
                                                                                width={33}
                                                                                alt="Elite Property"
                                                                            />
                                                                        </center>
                                                                    </a>
                                                                </div>
                                                                <div className="d-inline p-2 me-2">
                                                                    <a
                                                                        href="https://www.instagram.com/"
                                                                        target="_blanket"
                                                                    >
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/instagram.webp"
                                                                                className="img-fluid align-middle"
                                                                                width={33}
                                                                                alt="Elite Property"
                                                                            />
                                                                        </center>
                                                                    </a>
                                                                </div>
                                                                <div className="d-inline p-2 me-2">
                                                                    <a
                                                                        href="https://www.linkedin.com/"
                                                                        target="_blanket"
                                                                    >
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/linkedin.webp"
                                                                                className="img-fluid align-middle"
                                                                                width={33}
                                                                                alt="Elite Property"
                                                                            />
                                                                        </center>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-start ">
                                                                <div className="d-inline p-2 me-2">
                                                                    <a
                                                                        href="https://www.youtube.com/"
                                                                        target="_blanket"
                                                                    >
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/youtube.webp"
                                                                                className="img-fluid align-middle"
                                                                                width={33}
                                                                                alt="Elite Property"
                                                                            />
                                                                        </center>
                                                                    </a>
                                                                </div>
                                                                <div className="d-inline p-2 me-2">
                                                                    <a
                                                                        href="https://www.tiktok.com/"
                                                                        target="_blanket"
                                                                    >
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/tik-tok.webp"
                                                                                className="img-fluid align-middle"
                                                                                width={33}
                                                                                alt="Elite Property"
                                                                            />
                                                                        </center>
                                                                    </a>
                                                                </div>
                                                                <div className="d-inline p-2 me-2">
                                                                    <a
                                                                        href="https://twitter.com/"
                                                                        target="_blanket"
                                                                    >
                                                                        <center>
                                                                            <img loading="lazy"
                                                                                src="/assets/frontend/images/icons/twitter.webp"
                                                                                className="img-fluid align-middle"
                                                                                width={33}
                                                                                alt="Elite Property"
                                                                            />
                                                                        </center>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceModal