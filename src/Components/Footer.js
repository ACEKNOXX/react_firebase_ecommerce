import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer class="footer bg-secondary">
             {/* <!--====== FOOTER PART START ======--> */}
                
                <section id="footer" className="footer-area">
                    <div className="container">
                        <div className="footer-widget pt-75 pb-120">
                            <div className="row">
                                <div className="col-lg-3 col-md-5 col-sm-7">
                                    <div className="footer-logo mt-40">
                                        <a href="#">
                                            <img src="assets/images/logo.png" alt="Logo" />
                                        </a>
                                        <p className="mt-10">Gravida nibh vel velit auctor aliquetn quibibendum auci elit cons equat ipsutis sem nibh id elit.</p>
                                        <ul className="footer-social mt-25">
                                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i className="lni-instagram"></i></a></li>
                                        </ul>
                                    </div> 
                                    {/* <!-- footer logo --> */}
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-5">
                                    <div className="footer-link mt-50">
                                        <h5 className="f-title">Services</h5>
                                        <ul>
                                            <li><a href="#">Architechture Design</a></li>
                                            <li><a href="#">Interior Design</a></li>
                                            <li><a href="#">Autocad Services</a></li>
                                            <li><a href="#">Lighting Design</a></li>
                                            <li><a href="#">Poster Design</a></li>
                                        </ul>
                                    </div> 
                                    {/* <!-- footer link --> */}
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-5">
                                    <div className="footer-link mt-50">
                                        <h5 className="f-title">Help</h5>
                                        <ul>
                                            <li><a href="#">Forum</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Help Center</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li>
                                                <a href="!" >
                                                    
                                                    Privacy Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div> 
                                    {/* <!-- footer link --> */}
                                </div>
                                <div className="col-lg-4 col-md-5 col-sm-7">
                                    <div className="footer-info mt-50">
                                        <h5 className="f-title">Contact Info</h5>
                                        <ul>
                                            <li>
                                                <div className="single-footer-info mt-20">
                                                    <span>Phone :</span>
                                                    <div className="footer-info-content">
                                                        <p>+88123 4567 890</p>
                                                        <p>+88123 4567 890</p>
                                                    </div>
                                                </div> 
                                                {/* <!-- single footer info --> */}
                                            </li>
                                            <li>
                                                <div className="single-footer-info mt-20">
                                                    <span>Email :</span>
                                                    <div className="footer-info-content">
                                                        <p>contact@yourmail.com</p>
                                                        <p>support@yourmail.com</p>
                                                    </div>
                                                </div> 
                                                {/* <!-- single footer info --> */}
                                            </li>
                                            <li>
                                                <div className="single-footer-info mt-20">
                                                    <span>Address :</span>
                                                    <div className="footer-info-content">
                                                        <p>5078 Jensen Key, Port Kaya, WV 73505</p>
                                                    </div>
                                                </div> 
                                                {/* <!-- single footer info --> */}
                                            </li>
                                        </ul>
                                    </div> 
                                    {/* <!-- footer link --> */}
                                </div>
                            </div> 
                            {/* <!-- row --> */}
                        </div> 
                        {/* <!-- footer widget --> */}
                        <div className="footer-copyright pt-15 pb-15">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright text-center">
                                        <p>Crafted by <a href="https://uideck.com" rel="nofollow">UIdeck</a></p>
                                    </div> 
                                    {/* <!-- copyright --> */}
                                </div>
                            </div> 
                            {/* <!-- row --> */}
                        </div> 
                        {/* <!--  footer copyright --> */}
                    </div> 
                    {/* <!-- container --> */}
                </section>
    </footer>
    </div>
    )
}
