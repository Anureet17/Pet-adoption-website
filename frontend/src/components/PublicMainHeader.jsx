import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../App.jsx";

const PublicMainHeader = () => {
    const {loggedIn} = useContext(UserContext);

    return (
        <div id="sticky-header" className="tg-header__area">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="tgmenu__wrap">
                            <nav className="tgmenu__nav">
                                <div className="logo">
                                    <a href=""><img src="/assets/img/logo/logo.png" alt="Logo"/></a>
                                </div>
                                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                    <ul className="navigation">
                                        <li><a href="/">Home</a></li>

                                        <li><a href="/pets">Pets</a></li>

                                        <li><a href="/about">About</a></li>

                                        <li><a href="/contact">contacts</a></li>

                                        {!loggedIn &&
                                            <li className="menu-item-has-children"><a href="#">User</a>
                                                <ul className="sub-menu">
                                                    <li><a href="/user-signup">Create Account</a></li>
                                                    <li><a href="/user-login">Login</a></li>
                                                </ul>
                                            </li>
                                        }
                                    </ul>
                                </div>

                                <div className="tgmenu__action d-none d-md-block">
                                    <ul className="list-wrap">
                                        {loggedIn &&
                                            <li className="header-btn">
                                                <Link to="/user/dashboard" className="btn">
                                                    Dashboard
                                                </Link>
                                            </li>
                                        }
                                    </ul>
                                </div>
                                <div className="mobile-nav-toggler">
                                    <i className="flaticon-layout"></i>
                                </div>
                            </nav>
                        </div>


                        <div className="tgmobile__menu">
                            <nav className="tgmobile__menu-box">
                                <div className="close-btn"><i className="fas fa-times"></i></div>
                                <div className="nav-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo"/></a>
                                </div>
                                <div className="tgmobile__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..."/>
                                        <button><i className="fas fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="tgmobile__menu-outer">

                                </div>
                                <div className="social-links">
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
                            </nav>
                        </div>
                        <div className="tgmobile__menu-backdrop"></div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicMainHeader;