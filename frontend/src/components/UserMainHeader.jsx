import {useNavigate, Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../App.jsx";

const UserMainHeader = () => {
    const navigate = useNavigate();
    const {setLoggedIn} = useContext(UserContext);

    function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("userToken");
        setLoggedIn(false);
        navigate("/user-login");
    }

    return (
        <div id="sticky-header" className="tg-header__area">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="tgmenu__wrap">
                            <nav className="tgmenu__nav">
                                <div className="logo">
                                    <a href="/"><img src="/assets/img/logo/logo.png" alt="Logo"/></a>
                                </div>
                                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                                    <ul className="navigation">
                                        <li><Link to="/user/dashboard">Dashboard</Link></li>

                                        <li><Link to="/pets">Pets</Link></li>

                                        <li><Link to="/user/my-adoptions">My Adoptions</Link></li>

                                        <li><Link to="/user/change-password">Change Password</Link></li>
                                    </ul>
                                </div>
                                <div className="tgmenu__action d-none d-md-block">
                                    <ul className="list-wrap">
                                        <li className="header-btn">
                                            <a href="/user/logout" onClick={handleLogout} className="btn">
                                                <i className="flaticon-signoff"></i>Logout
                                            </a>
                                        </li>
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
                                    <a href="index.html"><img src="/assets/img/logo/logo.png" alt="Logo"/></a>
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
export default UserMainHeader;