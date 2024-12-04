import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
             <div className="floatingBtn">
          <div className="iconMain shake">
            <a
              id="websiteWhatsapp"
              className="whatsappBtnClick"
              target="_blank"
              href={process.env.WHATSAPP_LINK}
            >
              <Image
                loading="lazy"
                className=""
                src="assets/frontend/images/whatsapp.png"
                alt="whatsapp"
                width={60}
                height={60}
                unoptimized
              />
            </a>
          </div>
        </div>
            <footer className='py-5 bg-black'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-12 col-md-12">
                            <div className="row justify-content-between pb-5 border-bottom text-white">
                                <div className="col-12 col-lg-4 col-md-4">
                                    <div className='pb-5 pb-lg-0 pb-md-0'>
                                        <div className="mainHead text-start pb-3">
                                            <div className='mb-3'>
                                                <Link href="/">
                                                    <img src="/assets/frontend/images/logo.png" className="invertImg" alt="Logo" style={{ height: '50px' }} />
                                                </Link>
                                            </div>
                                            <p className="text-desc">Where Trust Meets Fun in Real Estate</p>
                                        </div>
                                        <div>
                                            <h6 className='text-gold'>Stay Connected</h6>
                                            <div className="d-flex justify-content-start ">
                                                <div className='d-inline p-2'>
                                                    <a href="https://www.facebook.com/share/14fehtDxNr/?mibextid=LQQJ4d"><center><img src="/assets/frontend/images/icons/facebook.webp" className="img-fluid align-middle" width={29} alt="insight1" /></center></a>
                                                </div>
                                                <div className='d-inline p-2'>
                                                    <a href="https://www.instagram.com/treysta.ae/"><center><img src="/assets/frontend/images/icons/instagram.webp" className="img-fluid align-middle" width={29} alt="insight1" /></center></a>
                                                </div>
                                                <div className='d-inline p-2'>
                                                    <a href="https://www.linkedin.com/company/tre%C3%BFsta"><center><img src="/assets/frontend/images/icons/linkedin.webp" className="img-fluid align-middle" width={29} alt="insight1" /></center></a>
                                                </div>
                                                {/* <div className='d-inline p-2'>
                                                    <a href="http://"><center><img src="/assets/frontend/images/icons/youtube.webp" className="img-fluid align-middle" width={29} alt="insight1" /></center></a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 d-flex justify-content-start justify-content-md-center justify-content-lg-center">
                                    <div>
                                        <h6 className='text-gold'>Get In Touch</h6>
                                        <div className="mainHead text-start pb-0 pb-lg-3 pb-md-3">
                                            <p className="text-para mb-0">Th treysta Realestate Brokerage, L.L.C.</p>
                                            <p className="text-para">Dubai UAE</p>
                                        </div>
                                        <div>
                                            <div className="mainHead text-start pb-4">
                                                <div className="mb-2">
                                                    <a href="tel:+971585336375" target="_blank" rel="noopener noreferrer"><img src="/assets/frontend/images/icons/call.webp" className="img-fluid align-middle" width={29} alt="insight1" /> <span className="text-para text-white mb-0">&nbsp; +971 58 533 6375</span></a>
                                                </div>
                                                {/* <div className="mb-2">
                                                    <a href="tel:+971585000000" target="_blank" rel="noopener noreferrer"><img src="/assets/frontend/images/icons/call.webp" className="img-fluid align-middle" width={29} alt="insight1" /> <span className="text-para text-white mb-0">&nbsp; +971 58 500 0000</span></a>
                                                </div> */}
                                                <div className='mb-2'>
                                                    <a href="mailto:hello@treysta.ae" target="_blank" rel="noopener noreferrer"><img src="/assets/frontend/images/icons/email.webp" className="img-fluid align-middle" width={29} alt="insight1" /> <span className="text-para text-white">&nbsp; Hello@treysta.ae</span></a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-md-4 d-flex  justify-content-start justify-content-md-center justify-content-lg-center">
                                    <div className="">
                                        <h6 className='text-gold'>Quick Links</h6>
                                        <ul className="list-unstyled socialLightFoot">
                                            <li><Link href="/about-us">About</Link></li>
                                            <li><Link href="/services">Our Services</Link></li>
                                            <li><Link href="/off-plan">Off-Plan Projects</Link></li>
                                            <li><Link href="/contact-us">Contact Us</Link></li>
                                            <li><Link href="/blogs">Blogs</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6 col-md-6 my-auto">
                                    <div className="text-center text-lg-start text-md-start">
                                        <div className='pt-4'>
                                            <ul className="list-unstyled footCopyLink lh-1 mb-0">
                                                {/* <li className="d-inline">
                                                    <Link href="/terms-of-use" className='text-white'>Terms of use</Link>
                                                </li> */}
                                                <li className="d-inline">
                                                    <Link href="/privacy-policy" className='text-white'>Privacy policy</Link>
                                                </li>
                                                {/* <li className="d-inline">
                                                    <a href="http://" className='text-white'>Sitemap</a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-md-6 my-auto">
                                    <div className="text-center text-lg-end text-md-end pt-4">
                                        <div className="footCopy">
                                            <p className='mb-0 text-white'>© {new Date().getFullYear()} - treysta Property</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer