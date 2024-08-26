const BreadCrumb = ({title, subTitle}) => {
    return (
        <section className="breadcrumb__area fix">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-8">
                        <div className="breadcrumb__content">
                            <h3 className="title">{subTitle}</h3>
                            <nav className="breadcrumb">
                                <span property="itemListElement" typeof="ListItem">
                                    <a href="">{title}</a>
                                </span>
                                <span className="breadcrumb-separator"><i
                                    className="flaticon-right-arrow-angle"></i></span>
                                <span property="itemListElement" typeof="ListItem">{subTitle}</span>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="breadcrumb__img">
                            <img src="/assets/img/images/breadcrumb_img.png" alt="img" data-aos="fade-left"
                                 data-aos-delay="800"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumb__shape-wrap">
                <img src="/assets/img/images/breadcrumb_shape01.png" alt="img" data-aos="fade-down-right"
                     data-aos-delay="400"/>
                <img src="/assets/img/images/breadcrumb_shape02.png" alt="img" data-aos="fade-up-left"
                     data-aos-delay="400"/>
            </div>
        </section>
    )
}

export default BreadCrumb;