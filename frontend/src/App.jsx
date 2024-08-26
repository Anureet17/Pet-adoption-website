import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createContext, useEffect, useState} from "react";

// layouts...
import PublicLayout from "./layouts/PublicLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import UserLayout from "./layouts/UserLayout.jsx";

// login & signup...
import UserSignup from "./pages/user/UserSignup.jsx";
import UserLogin from "./pages/user/UserLogin.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";

// public...
import Home from "./pages/Home.jsx";
import Pets from "./pages/public/Pets.jsx";
import PetDetails from "./pages/public/PetDetails.jsx";
import ThankYou from "./pages/public/ThankYou.jsx";
import About from "./pages/public/About.jsx";
import Contact from "./pages/public/Contact.jsx";

// admin...
import Dashboard from "./pages/admin/Dashboard.jsx"
import Category from "./pages/admin/Category.jsx";
import SubCategory from "./pages/admin/SubCategory.jsx";
import ManagePets from "./pages/admin/ManagePets.jsx";
import PendingAdoptions from "./pages/admin/adoptions/PendingAdoptions.jsx";
import ApprovedAdoptions from "./pages/admin/adoptions/ApprovedAdoptions.jsx";
import RejectedAdoptions from "./pages/admin/adoptions/RejectedAdoptions.jsx";
import ChangePassword from "./pages/admin/ChangePassword.jsx"
import UserFeedback from "./pages/admin/UserFeedback.jsx";
// user...
import UserDashboard from "./pages/user/UserDashboard.jsx";
import Adoptions from "./pages/user/Adoptions.jsx";
import UserChangePassword from "./pages/user/UserChangePassword.jsx";


// -------------------------------------------------------
export const UserContext = createContext(null)
// -------------------------------------------------------

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{loggedIn, setLoggedIn}}>
                <Routes>
                    <Route path="/" element={<PublicLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/pets" element={<Pets/>}/>
                        <Route path="/pet-details" element={<PetDetails/>}/>
                        <Route path="/thank-you" element={<ThankYou/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/admin-login" element={<AdminLogin/>}/>
                        <Route path="/user-signup" element={<UserSignup/>}/>
                        <Route path="/user-login" element={<UserLogin/>}/>
                    </Route>

                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="category" element={<Category/>}/>
                        <Route path="subcategory" element={<SubCategory/>}/>
                        <Route path="manage-pets" element={<ManagePets/>}/>
                        <Route path="pending-adoptions" element={<PendingAdoptions/>}/>
                        <Route path="approved-adoptions" element={<ApprovedAdoptions/>}/>
                        <Route path="rejected-adoptions" element={<RejectedAdoptions/>}/>
                        <Route path="change-password" element={<ChangePassword/>}/>
                        <Route path="user-feedback" element={<UserFeedback/>}/>
                    </Route>

                    <Route path="/user" element={<UserLayout/>}>
                        <Route path="dashboard" element={<UserDashboard/>}/>
                        <Route path="my-adoptions" element={<Adoptions/>}/>
                        <Route path="change-password" element={<UserChangePassword/>}/>
                    </Route>

                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App
