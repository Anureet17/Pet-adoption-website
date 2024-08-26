import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";


function ChangePassword() {
    const {register,
        handleSubmit,
        reset
    } = useForm();


    let navigate = useNavigate()
    async function onSubmit(data) {
        let token = localStorage.getItem("adminToken")
        if(!token) {
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


            if (response.error) {
                alert(response.error);
            } else {
                reset()
                alert("Password Changed");
            }
        }
    }

    return(
        <>

            <section className="breadcrumb__area fix">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="breadcrumb__content">
                                <h3 className="title">Change Password</h3>
                                <nav className="breadcrumb">
                                <span property="itemListElement" typeof="ListItem">
                                    <a href="index.html">Home</a>
                                </span>
                                    <span className="breadcrumb-separator"><i
                                        className="flaticon-right-arrow-angle"></i></span>
                                    <span property="itemListElement" typeof="ListItem">Change Password</span>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="breadcrumb__img">
                                <img src="/assets/img/images/breadcrumb_img.png" alt="img" data-aos="fade-left"
                                     data-aos-delay="800"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb__shape-wrap">
                    <img src="/assets/img/images/breadcrumb_shape01.png" alt="img" data-aos="fade-down-right"
                         data-aos-delay="400"/>
                    <img src="/assets/img/images/breadcrumb_shape02.png" alt="img" data-aos="fade-up-left"
                         data-aos-delay="400"/>
                </div>
            </section>


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

            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*    <input type="password"*/}
            {/*           placeholder="current password" {...register("Password", {required: "This field is required"})}/>*/}
            {/*    <br/><br/>*/}
            {/*    <input type="password"*/}
            {/*           placeholder="new password" {...register("newPassword", {required: "This field is required"})}/>*/}
            {/*    <br/><br/>*/}
            {/*    <input type="password"*/}
            {/*           placeholder="confirm password" {...register("confirmPassword", {required: "This field is required"})}/>*/}
            {/*    <br/><br/>*/}
            {/*    <button>Change Password</button>*/}
            {/*</form>*/}
        </>
    )
}

export default ChangePassword