"use client";
import Breadcrumb from '@/components/UI/Breadcrumb';
import ServiceModal from '@/components/UI/ServiceModal';
import React, { useState } from 'react'

function ServiceList() {
    interface Service {
        title: string;
        description: string;
        image: string;
        ctaText: string;
      }
      const [selectedService, setSelectedService] = useState<Service | null>(null);
      const services = [
        {
          id: 1,
          title: "Property Management",
          description:
            "Our property management services are designed to ensure your investment thrives. We offer meticulous maintenance programs that enhance property value over time. Research shows that well-maintained properties in Dubai consistently outperform market averages. Our expert services include tenant management, comprehensive maintenance solutions, and detailed performance analysis—everything tailored to maximize your property's profitability.",
          image: "/assets/frontend/images/service1.webp", // Replace with actual image paths
          ctaText: "Get Started",
        },
        {
          id: 2,
          title: "Holiday Homes",
          description:
            "Our holiday home management service covers everything from identifying the most profitable locations to handling guest bookings. We carefully vet all guests for your peace of mind and utilize our expertise in property upkeep, marketing, and dynamic pricing strategies to boost occupancy and maximize Average Total Rates (ATR). With a stellar 9.8 rating on Airbnb and Booking.com, our commitment to guest satisfaction speaks for itself.",
          image: "/assets/frontend/images/service2.webp", // Replace with actual image paths
          ctaText: "Learn More",
        },
        {
          id: 3,
          title: "Concierge & Relocation Services",
          description:
            "Relocating to Dubai can be overwhelming, but our concierge and relocation services are here to make your transition smooth and stress-free. We assist with everything from finding the perfect home to navigating local schools, communities, and settling into your new life. Let us handle the details so you can focus on starting fresh in Dubai.",
          image: "/assets/frontend/images/service3.webp", // Replace with actual image paths
          ctaText: "Get Started",
        },
        {
          id: 4,
          title: "PRO Services",
          description:
            "Starting and managing a business in Dubai can be complex, but our Public Relations and PRO services simplify the process for you. We assist with every aspect of business setup, ensuring you comply with local regulations while streamlining paperwork and procedures, allowing you to focus on growing your business.",
          image: "/assets/frontend/images/service4.webp", // Replace with actual image paths
          ctaText: "Start Now",
        },
        {
          id: 5,
          title: "Maintenance & Home Inspection",
          description:
            "We provide comprehensive maintenance and inspection services to ensure your property stays in top condition. From routine checks to emergency repairs, we proactively address issues before they become problems. Our tailored maintenance packages keep your property safe, well-maintained, and compliant with all required standards.",
          image: "/assets/frontend/images/service5.webp", // Replace with actual image paths
          ctaText: "Schedule an Inspection",
        },
        {
          id: 6,
          title: "Staging & Home Design",
          description:
            "Our staging and design services transform your property into a bespoke masterpiece. We collaborate with top suppliers to create unique, custom interiors, from luxurious furnishings to stunning décor. Every detail is curated to reflect your personal style, ensuring your home stands out as one of a kind.",
          image: "/assets/frontend/images/service6.webp", // Replace with actual image paths
          ctaText: "Design My Home",
        },
      ];
      
    const breadcrumbItems = [
        { label: "Home", link: "/", active: false },
        { label: "Services", link: "/services", active: true },
    ];
    const openModal = (service: Service) => {
      setSelectedService(service);
  };

  const closeModal = () => {
      setSelectedService(null);
  };
  return (
    <main>
            <Breadcrumb items={breadcrumbItems} />
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="descCont text-center pb-3">
                                <h4 className="text-head">Our Services</h4>
                                <p className="text-desc">Explore the range of real estate services we offer in Dubai.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        {services.map((service, index) => (
                            <div className="col-12" key={index} id={service.id}>
                                <div className={`row align-items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                                    <div className="col-12 col-md-6">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="img-fluid rounded-4 shadow-sm d-block mx-auto"
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 my-auto">
                                        <div className="descCont p-3">
                                            <h2 className="text-subhead">{service.title}</h2>
                                            <p className="text-para">{service.description}</p>
                                            <button
                                                className="btn btn-main"
                                                onClick={() => openModal(service)}
                                            >
                                                <span className="align-top">{service.ctaText}</span>&nbsp;
                                                <i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Modal */}
            <ServiceModal
                isOpen={!!selectedService}
                title={selectedService?.title || ''}
                formName={selectedService?.title || ''}
                onClose={closeModal}
            />
        </main>
  )
}

export default ServiceList
