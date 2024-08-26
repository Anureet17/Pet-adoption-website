import PublicTopHeader from "./PublicTopHeader.jsx";
import PublicMainHeader from "./PublicMainHeader.jsx";

function PublicNavbar() {
    return (
        <>
            <header>
                <PublicTopHeader/>

                <PublicMainHeader/>

                <div className="search__popup">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="search__wrapper">
                                    <div className="search__close">
                                        <button type="button" className="search-close-btn">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="search__form">
                                        <form action="#">
                                            <div className="search__input">
                                                <input className="search-input-field" type="text"
                                                       placeholder="Type keywords here"/>
                                                <span className="search-focus-border"></span>
                                                <button>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                            stroke="currentColor" strokeWidth="1.5"
                                                            strokeLinecap="round" strokeLinejoin="round"></path>
                                                        <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentcolor"
                                                              strokeWidth="1.5" strokeLinecap="round"
                                                              strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-popup-overlay"></div>
                <div className="offCanvas__info">
                    <div className="offCanvas__close-icon menu-close">
                        <button><i className="far fa-window-close"></i></button>
                    </div>
                    <div className="offCanvas__logo mb-30">
                        <a href="/"><img src="/assets/img/logo/logo.png" alt="Logo"/></a>
                    </div>
                    <div className="offCanvas__side-info mb-30">
                        <div className="contact-list mb-30">
                            <h4>Office Address</h4>
                            <p>123/A, Miranda City Likaoli <br/> Prikano, Dope</p>
                        </div>
                        <div className="contact-list mb-30">
                            <h4>Phone Number</h4>
                            <p>+0989 7876 9865 9</p>
                            <p>+(090) 8765 86543 85</p>
                        </div>
                        <div className="contact-list mb-30">
                            <h4>Email Address</h4>
                            <p>info@example.com</p>
                            <p>example.mail@hum.com</p>
                        </div>
                    </div>
                    <div className="offCanvas__social-icon mt-30">
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-google-plus-g"></i></a>
                        <a href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="offCanvas__overly"></div>
            </header>
        </>
    )
}

export default PublicNavbar

