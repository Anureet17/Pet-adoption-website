import UserNavbar from "../components/UserNavbar.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import {useContext, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {UserContext} from "../App.jsx";

function UserLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const {setLoggedIn} = useContext(UserContext)

    async function VerifyToken(token) {
        let path = "http://localhost:5000/verify-token";

        let response = await fetch(path, {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        })
        response = await response.json();
        // console.log(response);

        if (response.jwt) {
            setLoggedIn(false);
            localStorage.removeItem("userToken");
            navigate("/user-login")
        } else {
            // console.log(response.user);
        }
    }

    useEffect(() => {
        let token = localStorage.getItem("userToken");
        if (!token) {
            navigate("/user-login")
        } else {
            VerifyToken(token).then();
        }
    }, [location]);

    return (
        <>
            <UserNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default UserLayout;