import AdminNavbar from "../components/AdminNavbar.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function AdminLayout() {
    const location = useLocation();
    const navigate = useNavigate();

    async function VerifyToken(token) {
        let path = "http://localhost:5000/verify-admin-token";

        let response = await fetch(path, {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        })
        response = await response.json();
        // console.log(response);

        if (response.jwt) {
            localStorage.removeItem("adminToken");
            navigate("/admin-login")
        } else {
            // console.log(response.user);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        let token = localStorage.getItem("adminToken");

        if (!token) {
            navigate("/admin-login");
        } else {
            VerifyToken(token).then();
        }
    }, [location]);

    return (
        <>
            <AdminNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default AdminLayout;