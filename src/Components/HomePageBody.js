import React from 'react'
import { Link } from 'react-router-dom'
import { Products } from './Products'


export const HomePageBody = ({ user }) => {


    return (
    <div>
          

    {/* <!--====== SLIDER PART START ======--> */}
    
    <section id="home" className="slider-area pt-100">
        <div className="container-fluid position-relative">
            <div className="slider-active">
                <div className="single-slider">
                    <div className="slider-bg">
                        <div className="row no-gutters align-items-center ">
                            <div className="col-lg-4 col-md-5">
                                <div className="slider-product-image d-none d-md-block">
                                    <img src="assets/images/slider/1.jpg" alt="Slider" />
                                    <div className="slider-discount-tag">
                                        <p>-50% <br/> OFF</p>
                                    </div>
                                </div> 
                                {/* <!-- slider product image --> */}
                            </div>
                            <div className="col-lg-8 col-md-7">
                                <div className="slider-product-content">
                                    <h1 className="slider-title mb-10" data-animation="fadeInUp" data-delay="0.3s"><span>Sofa</span> and <span>Armchairs</span></h1>
                                    <p className="mb-25" data-animation="fadeInUp" data-delay="0.9s">One day however a small line of blind text by the name of Lorem Ipsum <br/> decided to leave for the far World of Grammar.</p>
                                    <a className="main-btn" href="#" data-animation="fadeInUp" data-delay="1.5s">Explore More <i className="lni-chevron-right"></i></a>
                                </div> 
                                {/* <!-- slider product content --> */}
                            </div>
                        </div> 
                        {/* <!-- row --> */}
                    </div> 
                    {/* <!-- container --> */}
                </div> 
                {/* <!-- single slider --> */}

               
            </div> 
            {/* <!-- slider active --> */}
            <div className="slider-social">
                <div className="row justify-content-end">
                    <div className="col-lg-7 col-md-6">
                        <ul className="social text-right">
                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                            <li><a href="#"><i className="lni-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
        {/* <!-- container fluid --> */}
    </section>
    
    {/* <!--====== SLIDER PART ENDS ======--> */}
   
    {/* <!--====== DISCOUNT PRODUCT PART START ======--> */}
    
    <section id="discount-product" className="discount-product pt-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="single-discount-product mt-30">
                        <div className="product-image">
                            <img src="assets/images/discount-product/product-1.jpg" alt="Product" />
                        </div> 
                        {/* <!-- product image --> */}
                        <div className="product-content">
                            <h4 className="content-title mb-15">High-quality furnitures <br/> For your home</h4>
                            <a href="#">View Collection <i className="lni-chevron-right"></i></a>
                        </div> 
                        {/* <!-- product content --> */}
                    </div> 
                    {/* <!-- single discount product --> */}
                </div>
                <div className="col-lg-6">
                    <div className="single-discount-product mt-30">
                        <div className="product-image">
                            <img src="assets/images/discount-product/product-2.jpg" alt="Product" />
                        </div> 
                        {/* <!-- product image --> */}
                        <div className="product-content">
                            <h4 className="content-title mb-15">Hot Offer <br/> Discount up to 80%</h4>
                            <a href="#">View Collection <i className="lni-chevron-right"></i></a>
                        </div> 
                        {/* <!-- product content --> */}
                    </div> 
                    {/* <!-- single discount product --> */}
                </div>
            </div> 
            {/* <!-- row --> */}
        </div> 
        {/* <!-- container --> */}
    </section>
    
    {/* <!--====== DISCOUNT PRODUCT PART ENDS ======--> */}
   
    {/* <!--====== PRODUCT PART START ======--> */}

    <Products/>
    
    {/* <!--====== PRODUCT PART ENDS ======--> */}

    {/* <!--====== FOOTER PART START ======--> */}
    
    <section id="footer" className="footer-area">
        <div className="container">
            <div className="footer-widget pt-75 pb-120">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-7">
                        <div className="footer-logo mt-40">
                            <a href="#">
                                <img src="assets/images/yct.png" width="50px" alt="Logo" />
                                <span><h3 className="text-dark">Yabatech Corporative</h3></span>
                            </a>
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
                                
                                <li>
                                    <Link to="/terms">
                                       Terms and condition
                                    </Link>
                                </li>
                                <li><a href="#">Contact Us</a></li>
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
                                            <p>+234-7037431055</p>
                                        </div>
                                    </div> 
                                    {/* <!-- single footer info --> */}
                                </li>
                                <li>
                                    <div className="single-footer-info mt-20">
                                        <span>Email :</span>
                                        <div className="footer-info-content">
                                            <p>registrar@yabatech.edu.ng</p>
                                        </div>
                                    </div> 
                                    {/* <!-- single footer info --> */}
                                </li>
                                <li>
                                    <span>We also accept</span>
                                    <img src="assets/images/visa.png" width="80px" alt="Logo" />
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
                            <p>Crafted by <a href="#" rel="nofollow">FluffyDev007</a></p>
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
    
    {/* <!--====== FOOTER PART ENDS ======--> */}
    
    {/* <!--====== BACK TO TOP PART START ======--> */}
    
    <a href="#" className="back-to-top"><i className="lni-chevron-up"></i></a>
    
    {/* <!--====== BACK TO TOP PART ENDS ======--> */}
    
    
    
        </div>
    )
}
