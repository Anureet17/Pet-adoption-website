function Footer() {
    return (
        <>
            <footer>
                <div className="footer__area">
                    <div className="footer__top fix">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer__widget">
                                        <div className="footer__logo">
                                            <a href="index.html"><img src="/assets/img/logo/w_logo.png" alt=""/></a>
                                        </div>
                                        <div className="footer__content">
                                            <p>59 Mall Road, Amritsar</p>
                                            <a href="tel:0123456789">+91 01234 56789</a>
                                            <a href="mailto:petspostinfo@gmail.com">
                                                petspostinfo@gmail.com
                                            </a>
                                        </div>
                                        <div className="footer__social">
                                            <h6 className="title">Follow Us On:</h6>
                                            <ul className="list-wrap">
                                                <li><a href="https://www.facebook.com/" target="_blank"><i
                                                    className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://twitter.com/" target="_blank"><i
                                                    className="fab fa-twitter"></i></a></li>
                                                <li><a href="https://www.whatsapp.com/" target="_blank"><i
                                                    className="fab fa-whatsapp"></i></a></li>
                                                <li><a href="https://www.instagram.com/" target="_blank"><i
                                                    className="fab fa-instagram"></i></a></li>
                                                <li><a href="https://www.youtube.com/" target="_blank"><i
                                                    className="fab fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget">
                                        <h4 className="footer__widget-title">Quick Links</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li><a href="/about">About Us</a></li>
                                                <li><a href="/contact">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget">
                                        <h4 className="footer__widget-title">Opening Hours</h4>
                                        <div className="footer__link">
                                            <ul className="list-wrap">
                                                <li>Mon - Sat <span>09.00 am - 11.00 pm</span></li>
                                                {/*<li>Tuesday <span>8.00 - 21.00</span></li>*/}
                                                {/*<li>Thursday <span>8.00 - 21.00</span></li>*/}
                                                {/*<li>Friday <span>8.00 - 21.00</span></li>*/}
                                                {/*<li>Saturday <span>8.00 - 21.00</span></li>*/}
                                                {/*<li>Sunday <span>8.00 - 21.00</span></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="footer__widget">
                                        <div className="footer__newsletter">
                                            <h2 className="title">Subscribe to our newsletter</h2>
                                            <div className="shape">
                                                <img src="/assets/img/images/footer_newsletter_shape.svg" alt=""
                                                     className="injectable"/>
                                            </div>
                                            <form action="#">
                                                <input id="email" type="email" placeholder="Type Your E-mail"/>
                                                <button className="btn" type="submit">Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer__shape-wrap">
                            <img src="/assets/img/images/footer_shape01.png" alt="img" data-aos="fade-up-right"
                                 data-aos-delay="400"/>
                            <img src="/assets/img/images/footer_shape02.png" alt="img" data-aos="fade-up-left"
                                 data-aos-delay="400"/>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="footer__bottom-menu">
                                        <ul className="list-wrap">
                                            {/*<li><a href="contact.html">Support</a></li>*/}
                                            {/*<li><a href="contact.html">Terms & Conditions</a></li>*/}
                                            {/*<li><a href="contact.html">Privacy Policy</a></li>*/}
                                            {/*<li><a href="contact.html">Career</a></li>*/}
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="copyright-text text-end">
                                        <p>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer