const express = require("express")
const app = express();
const cors = require("cors")
const cookieParser = require('cookie-parser')
const {verify} = require('jsonwebtoken')

// controllers...
const publicController = require("./controllers/public.controller")
const adminController = require("./controllers/admin.controller")
const userController = require("./controllers/user.controller")

const fileUpload = require('express-fileUpload')

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({}))
app.use(express.static('public'))

function adminAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "abc@123"

    try {
        req['adminInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

function adminAuthorization_GET_Request(req, res, next) {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.json({jwt: 'Unauthorized Access', message: ''})
    }

    try {
        const secret = "abc@123";
        req['adminInfo'] = verify(token, secret);
        next()
    } catch (error) {
        res.json({jwt: error.message, message: ''})
    }
}

function userAuthorization_HTTP_Request(req, res, next) {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.json({jwt: 'Unauthorized Access', message: ''})
    }

    try {
        const secret = "abc@123";
        req['userInfo'] = verify(token, secret);
        next()
    } catch (error) {
        res.json({jwt: error.message, message: ''})
    }
}

app.post("/contact", userController.ContactUs)
app.get("/user-feedback", adminController.UserFeedback)
/* ---------------- */
/* login & signup routes... */
app.post("/admin-login", adminController.AdminLogin)
app.post("/user-signup", userController.UserSignUp)
app.post("/user-login", userController.UserLogin)
/* login & signup routes (end) */

/* ---------------- */
/* public routes... */
app.get("/read-pets-home", publicController.ReadPets)
app.get("/read-pets-all", publicController.ReadPetsAll)
app.get("/pet-status/:pet_id", publicController.CheckPetStatus)

/* ---------------- */
/* user routes... */
app.post("/adoptionform", userAuthorization_HTTP_Request, userController.AdoptionForm)
app.get("/my-adoptions", userAuthorization_HTTP_Request, userController.MyAdoptions)
app.get("/verify-token", userAuthorization_HTTP_Request, userController.VerifyToken)

/* ---------------- */
/* admin routes... */
app.get("/verify-admin-token", adminAuthorization_GET_Request, adminController.VerifyToken)

app.get("/subcategory-by-category/:cat_id", adminController.SubCategoryByCategory)

// category routes...
app.post("/category", adminController.AddCategory)
app.get("/category", adminController.ReadCategory)
app.delete("/category/:id", adminController.DeleteCategory)

// sub-category routes...
app.post("/subcategory", adminController.SubAddCategory)
app.get("/subcategory", adminController.ReadSubCategory)
app.delete("/subcategory/:subcategory_id", adminController.DeleteSubCategory)

// pets routes...
app.post("/manage-pets", adminController.AddPets)
app.get("/manage-pets", adminController.ReadPets)
app.delete("/manage-pets/:id", adminController.DeletePets)
app.post("/upload-photo", adminController.UploadPhoto)

// change password...
app.post("/change-password", adminAuthorization_HTTP_Request, adminController.AdminChangePassword)

app.get("/pending-adoption-requests", adminController.GetPendingAdoptionRequests);
app.get("/approved-adoption-requests", adminController.GetApprovedAdoptionRequests);
app.get("/rejected-adoption-requests", adminController.GetRejectedAdoptionRequests);
app.get("/approve-reject-adoption-request/:id/:petId/:status", adminController.ApproveRejectAdoptionRequests);

/* admin routes (end) */

const port = 5000;
app.listen(port, (error) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("Server is running on port " + port);
    }
});