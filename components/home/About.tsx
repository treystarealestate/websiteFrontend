import Image from 'next/image'
import Link from 'next/link'

import aboutImage1 from '../../public/assets/frontend/images/about1.jpg'
import aboutImage from '../../public/assets/frontend/images/about.jpg'
import patternImg from '../../public/assets/frontend/images/pattern.png'
const About = () => {
    return (
      <section className=''>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 my-auto">
                            <div className='about-left py-5'>
                            <div className="patternBg" style={{ backgroundImage: `url(${patternImg.src})`, height: '100%', width: 'auto' }}></div>
                            <div className="position-relative shadow p-2 rounded-top-pill rounded-5 bg-offwhite img-one">
                                <Image src={aboutImage1} className="img-fluid rounded-top-pill rounded-5" alt="" />
                            </div>
                            <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-offwhite">
                                    <Image src={aboutImage} className="img-fluid rounded-3" alt="" />
                                </div>
                            </div>
                           
                            {/* <Image src={aboutImage}  alt='about us' className='img-fluid' /> */}
                        </div>
                        <div className="col-12 col-lg-6 col-md-6 my-auto">
                            <div className="descCont p-sm-1 p-md-3 p-lg-5">
                                <span className='text-sub text-gold'><i className="bi bi-dash-lg"></i> About Us</span>
                                <h3 className="text-head py-2">Turning Dreams into Reality with Integrity</h3>
                                <p className="text-para">At Treysta, we redefine the real estate experience by making trust the cornerstone of every interaction. Rooted in the Nordic concept of "trust," we combine integrity and reliability with a touch of fun, ensuring that your property journey is both smooth and enjoyable.</p>
                                <p className="text-para pb-2">Whether you're buying, selling, or investing, our team is committed to providing you with a refreshing, stress-free approach. With Treysta, real estate doesn't have to be a daunting process—it's an exciting opportunity, guided by experts you can truly trust.</p>
                                <div>
                                <Link href="/about-us" className='btn btn-main'>
                                <span className='align-top'>Know More </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default About;
  