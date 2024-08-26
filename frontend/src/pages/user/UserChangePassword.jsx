import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb.jsx";


function UserChangePassword() {
    const {
        register,
        handleSubmit,
    } = useForm();


    let navigate = useNavigate()

    async function onSubmit(data) {
        let token = localStorage.getItem("adminToken")
        if (!token) {
            navigate("/admin-login")
        } else {
            data ['token'] = token;
            let url = "http://localhost:5000/change-password";
            let response = await fetch(url, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(data)
            });
            response = await response.json();
            console.log(response)
        }
    }

    return (
        <main className="fix">
            <BreadCrumb title="User" subTitle="Change Password"/>

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
                                                    <input type="password"
                                                           placeholder="Current Password" {...register("Password", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <input type="password"
                                                           placeholder="new password" {...register("newPassword", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <input type="password"
                                                           placeholder="confirm password" {...register("confirmPassword", {required: "This field is required"})}/>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="col-md-6">
                                            <button className="btn">Change Password <img
                                                src="/assets/img/icon/right_arrow.svg" alt="" className="injectable"/>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="breadcrumb__img">
                                    <img src="/assets/img/images/registration_img.png" alt="img" width="350px"
                                         data-aos="fade-right"
                                         data-aos-delay="400"/>
                                    {/*width="350px"*/}
                                    {/*data-aos="fade-light"*/}
                                    {/*data-aos-delay="400"/>*/}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default UserChangePassword