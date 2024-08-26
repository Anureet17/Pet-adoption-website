const Banner = () => {
    return (
        <section className="banner__area banner__bg" data-background="assets/img/banner/banner_bg.jpg">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="banner__content">
                            <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                                Trusted Pet <img
                                src="/assets/img/banner/banner_title_img01.png" alt=""/> care & Veterinary
                                Center <span className="icon"><img
                                src="/assets/img/banner/banner_title_img02.png" alt=""/></span> Point
                            </h2>

                            {/*<p data-aos="fade-up" data-aos-delay="400">*/}
                            {/*    Template Kit uses demo images from Envato*/}
                            {/*    Elements Follower will need to license these images from Envato.*/}
                            {/*</p>*/}

                            {/*<a href="about.html" className="btn" data-aos="fade-up" data-aos-delay="600">Read*/}
                            {/*    More <img src="/assets/img/icon/right_arrow.svg" alt="" className="injectable"/></a>*/}
                        </div>
                    </div>

                    <div className="col-xl-7 col-lg-6 col-md-9">
                        <div className="banner__img text-end">
                            <img src="/assets/img/banner/banner_img01.png" alt="img" data-aos="fade-left"
                                 data-aos-delay="800"/>
                            <div className="healthy-pets" data-aos="zoom-in" data-aos-delay="1000">
                                <div className="icon">
                                    <img src="/assets/img/icon/pet_icon01.svg" alt="" className="injectable"/>
                                </div>
                                <div className="content">
                                    <h6 className="circle rotateme">BETTER - HEALTHY - PETS - LOVE -</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner__shape-wrap">
                <img src="/assets/img/banner/banner_shape01.png" alt="img" data-aos="fade-down"
                     data-aos-delay="1200"/>
                <img src="/assets/img/banner/banner_shape02.png" alt="img" data-aos="fade-up-right"
                     data-aos-delay="1200"/>
                <img src="/assets/img/banner/banner_shape03.png" alt="img" className="ribbonRotate"/>
                <img src="/assets/img/banner/banner_shape04.png" alt="img"/>
            </div>
        </section>
    )
}

export default Banner;