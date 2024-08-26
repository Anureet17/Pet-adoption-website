import PublicNavbar from "../components/PublicNavbar.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";

function PublicLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <PublicNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default PublicLayout;