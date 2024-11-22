'use client';

import { Navbar, Nav, Container, Offcanvas, Button, NavbarBrand, NavbarCollapse, NavLink, OffcanvasHeader, OffcanvasBody, OffcanvasTitle } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CustomNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
      {/* Main Logo on Top */}
      <div className="text-center bg-black py-3">
        <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
        </Link>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" className="bg-light border-bottom">
        <Container>
          {/* Navbar Brand */}
          <NavbarBrand href="/" className="fw-bold">
            LOGO
          </NavbarBrand>

          

          {/* Navbar Links */}
          <NavbarCollapse className="justify-content-end">
            <Nav>
              <NavLink as={Link} href="/">
                Home
              </NavLink>
              <NavLink as={Link} href="/about-us">
                About Us
              </NavLink>
              <NavLink as={Link} href="/services">
                Services
              </NavLink>
              <NavLink as={Link} href="/resources">
                Resources
              </NavLink>
              <NavLink as={Link} href="/contact-us">
                Contact Us
              </NavLink>
            </Nav>
          </NavbarCollapse>

          {/* Offcanvas Button */}
          <Button
            className="ms-2 bg-transparent border-0"
            onClick={toggleOffcanvas}
          >
           <Image
            src="/assets/frontend/images/icons/menu.png" // Path to your logo
            alt="Menu"
            width={25} // Set the width of the logo
            height={25} // Ensures the logo loads quickly (no lazy loading)
          />
          </Button>
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="end">
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Menu</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav className="flex-column">
            <NavLink as={Link} href="/" onClick={toggleOffcanvas}>
              Home
            </NavLink>
            <NavLink as={Link} href="/about-us" onClick={toggleOffcanvas}>
              About Us
            </NavLink>
            <NavLink as={Link} href="/services" onClick={toggleOffcanvas}>
              Services
            </NavLink>
            <NavLink as={Link} href="/resources" onClick={toggleOffcanvas}>
              Resources
            </NavLink>
            <NavLink as={Link} href="/contact-us" onClick={toggleOffcanvas}>
              Contact Us
            </NavLink>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
