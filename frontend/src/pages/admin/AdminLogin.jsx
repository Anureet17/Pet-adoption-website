import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"
import {ErrorMessage} from "@hookform/error-message"

import BreadCrumb from "../../components/BreadCrumb.jsx";

function AdminLogin() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const navigate = useNavigate()

    async function onSubmit(data) {
        // console.log(data)

        let url = "http://localhost:5000/admin-login"
        let response = await fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        response = await response.json();
        // console.log(response)

        if (response.error !== "") {
            // alert(response.error)
            Qual.errordb('Error', response.error)
        } else {
            localStorage.setItem("adminToken", response.token);
            navigate("/admin/dashboard")
        }
    }

    return (
        <>
            <main className="fix">
                <BreadCrumb title="Home" subTitle="Admin Login"/>

                <section className="registration__area-two">
                    <div className="container">
                        <div className="registration__inner-wrap-two">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="registration__form-wrap">
                                        <form onSubmit={handleSubmit(onSubmit)} className="registration__form">
                                            <div className="row gutter-20">
                                                <div className="col-md-12">
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail"
                                                               {...register("Email", {required: "This field is required"})}/>

                                                        <ErrorMessage errors={errors} name="Email"
                                                                      render={({message}) => <p
                                                                          className="text-danger fw-bold">{message}</p>}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-grp">
                                                        <input type="password" placeholder="Password"
                                                               {...register("Password", {required: "This field is required"})}/>

                                                        <ErrorMessage errors={errors} name="Password"
                                                                      render={({message}) => <p
                                                                          className="text-danger fw-bold">{message}</p>}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <button className="btn">Login <img
                                                    src="/assets/img/icon/right_arrow.svg" alt=""
                                                    className="injectable"/>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="breadcrumb__img">
                                        <img src="/assets/img/images/registration_img.png" alt="img"
                                             width={270} data-aos="fade-right" data-aos-delay="400"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default AdminLogin