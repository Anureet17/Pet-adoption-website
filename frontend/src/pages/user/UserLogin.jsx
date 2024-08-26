import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import {useNavigate} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb.jsx";
import {useContext} from "react";
import {UserContext} from "../../App.jsx";

function UserLogin() {
    const {setLoggedIn} = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const navigate = useNavigate()

    async function onSubmit(data) {
        console.log(data)

        let url = "http://localhost:5000/user-login"
        let response = await fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        response = await response.json();
        // console.log(response)

        if (response.error != "") {
            Qual.errordb('Error', response.error);
        } else {
            setLoggedIn(true);
            Qual.successdb('Success', response.message);
            localStorage.setItem("userToken", response.token);
            navigate("/user/dashboard");
        }
    }

    return (
        <main className="fix">
            <BreadCrumb title="Home" subTitle="Login"/>

            <section className="contact__area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="contact__form-wrap">
                                <span>All fields are required.</span>
                                <form className="contact__form mt-4" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-grp">
                                        <label>Email</label>
                                        <input type="email"
                                               {...register("email", {required: "This field is required"})} />
                                        <ErrorMessage
                                            errors={errors}
                                            name="email"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>

                                    <div className="form-grp">
                                        <label>Password</label>
                                        <input
                                            type="password" {...register("password", {required: "This field is required"})} />
                                        <ErrorMessage
                                            errors={errors}
                                            name="password"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-success">
                                            Submit <img src="/assets/img/icon/right_arrow.svg" alt=""
                                                        className="injectable"/>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default UserLogin