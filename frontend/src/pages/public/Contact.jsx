import BreadCrumb from "../../components/BreadCrumb.jsx";
import {useForm} from "react-hook-form";
// const Contact = () => {
function Contact() {

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    async function onSubmit(data) {
        console.log(data)

        let url = "http://localhost:5000/contact"
        let response = await fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        response = await response.json();
        // console.log(response)

        if (response.error !== "") {
            Qual.errordb('Error', response.error);
        } else {
            reset();
            Qual.successdb('Message sent', response.message);
        }
    }
    return (
        <main className="fix">
            <BreadCrumb title="Home" subTitle="Contact Us"/>

            {/*<section className="contact__area">*/}
            {/*    <div className="container">*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="contact__area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contact__content">
                                <div className="section__title mb-30">
                                    <h2 className="title">We Are Always Available For You & Your Pets</h2>
                                    <p>Are you looking forward to give a pet (Indian Mongrel Pups, Dogs or Indian
                                        Kittens or Cats) its forever home? Your perfect furry companion is waiting for
                                        you with us. Just leave behind the details by filling up the simple form below
                                        and our team will get in touch with you about the adoption process.</p>
                                </div>
                                <div className="contact__info-wrap">
                                    <h6 className="title">Information:</h6>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-phone"></i>
                                            </div>
                                            <a href="tel:0123456789">+91 01234 56789</a>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-placeholder"></i>
                                            </div>
                                            59 Mall Road, Amritsar
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-mail"></i>
                                            </div>
                                            <a href="mailto:info@gmail.com">petspostinfo@gmail.com</a>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-share-alt"></i>
                                            </div>
                                            <ul className="list-wrap contact__social">
                                                <li><a href="https://www.facebook.com/" target="_blank"
                                                       rel="noopener noreferrer"><i
                                                    className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://twitter.com/" target="_blank"
                                                       rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                                                </li>
                                                <li><a href="https://www.whatsapp.com/" target="_blank"
                                                       rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                                                </li>
                                                <li><a href="https://www.instagram.com/" target="_blank"
                                                       rel="noopener noreferrer"><i
                                                    className="fab fa-instagram"></i></a></li>
                                                <li><a href="https://www.youtube.com/" target="_blank"
                                                       rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact__form-wrap">
                                <form action="https://themedox.com/demo/petpal/assets/mail.php" method="POST"
                                      id="contact-form" className="contact__form"  onSubmit={handleSubmit(onSubmit)}>
                                    <h2 className="title">Post a comment</h2>
                                    <span>Your email address will not be published. Required fields are marked *</span>
                                    <div className="row gutter-20">
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="text" name="name" {...register("name", {required: "This field is required"})} placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-grp">
                                                <input type="email" name="email" {...register("email", {required: "This field is required"})} placeholder="E-mail"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-grp">
                                                <input type="text" name="website" {...register("website", {required: "This field is required"})} placeholder="Website"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-grp">
                                                <textarea name="message" {...register("message", {required: "This field is required"})} placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn">Send Us Message <img
                                        src="/assets/img/icon/right_arrow.svg" alt="" className="injectable"/></button>
                                </form>
                                <p className="ajax-response mb-0"></p>
                            </div>
                        </div>
                    </div>
                    {/* contact-map */}
                    <div className="contact-map">
                        {/*<iframe*/}
                        {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"*/}
                        {/*    style={{border: 0}}*/}
                        {/*    allowFullScreen=""*/}
                        {/*    loading="lazy"*/}
                        {/*    referrerPolicy="no-referrer-when-downgrade"*/}
                        {/*></iframe>*/}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108704.21800087979!2d74.78771845956456!3d31.63366385302329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0xeea2605bee84ef7d!2sAmritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1716651571333!5m2!1sen!2sin"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    {/* contact-map-end */}
                </div>
            </section>

        </main>
    )
}
export default Contact;