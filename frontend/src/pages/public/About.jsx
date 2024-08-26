import BreadCrumb from "../../components/BreadCrumb.jsx";

const About = () => {
    return (
        <main className="fix">
            <BreadCrumb title="Home" subTitle="About Us"/>

            {/*<section className="contact__area">*/}
            {/*    <div className="container">*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="about__area-four">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="about__img-four">
                                <img src="/assets/img/images/inner_about_img01.jpg" alt="img" data-aos="fade-right"
                                     data-aos-delay="400"/>
                                <img src="/assets/img/images/inner_about_img02.jpg" alt="img" data-aos="fade-left"
                                     data-aos-delay="400"/>
                                <div className="shape">
                                    <img src="/assets/img/images/inner_about_shape.png" alt="shape"
                                         data-aos="fade-down-left" data-aos-delay="800"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content-four">
                                <div className="section__title mb-15">
                                <span className="sub-title">About Us
                                    <strong className="shake">
                                        <img src="/assets/img/icon/pet_icon02.svg" alt="" className="injectable"/>
                                    </strong>
                                </span>
                                    <h2 className="title">We'll Make Your Pets <br/> Really Happy</h2>
                                </div>
                                <p>We will work with you to develop individualised care plans, including management
                                    chronic diseases. We are committed to bein region’s premier healthcare network
                                    providing patient.</p>
                                <div className="about__content-inner-two">
                                    <div className="experience__box">
                                        <div className="experience__box-shape">
                                            <img src="/assets/img/images/experience_shape.svg" alt=""
                                                 className="injectable"/>
                                        </div>
                                        <div className="experience__box-content">
                                            <h4 className="title">15 <span>Yr</span></h4>
                                            <p>Experience</p>
                                        </div>
                                    </div>
                                    <div className="introducing__list-box introducing__list-box-two">
                                        <ul className="list-wrap">
                                            <li>
                                            <span className="icon">
                                                <img src="assets/img/icon/check_icon02.svg" alt=""
                                                     className="injectable"/>
                                            </span>
                                                Over 10 years of experience
                                            </li>
                                            <li>
                                            <span className="icon">
                                                <img src="assets/img/icon/check_icon02.svg" alt=""
                                                     className="injectable"/>
                                            </span>
                                                20 talented vets ready to help you
                                            </li>
                                            <li>
                                            <span className="icon">
                                                <img src="assets/img/icon/check_icon02.svg" alt=""
                                                     className="injectable"/>
                                            </span>
                                                High-quality products only
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>We will work with you to develop individualised care plans, including management
                                    chronic diseases. We are committed to bein region’s premier healthcare network
                                    providing patient.</p>
                                {/*<a href="contact.html" className="btn">Read More <img*/}
                                {/*    src="assets/img/icon/right_arrow.svg" alt="" className="injectable"/></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}
export default About;