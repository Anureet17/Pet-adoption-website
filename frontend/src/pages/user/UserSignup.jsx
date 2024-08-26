import {useForm} from "react-hook-form";
import {ErrorMessage} from "@hookform/error-message";
import BreadCrumb from "../../components/BreadCrumb.jsx";

function UserSignup() {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm()

    async function onSubmit(data) {
        console.log(data)

        let url = "http://localhost:5000/user-signup"
        let response = await fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        response = await response.json();
        // console.log(response)

        if (response.error !== "") {
            Qual.errordb('Error', response.error);
        } else {
            reset();
            Qual.successdb('Registered', response.message);
        }
    }

    return (
        <main className="fix">
            <BreadCrumb title="Home" subTitle="Create Account"/>

            <section className="contact__area">
                <div className="container">
                    <div className="contact__form-wrap">
                        <span>All fields are required.</span>
                        <form className="contact__form mt-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row gutter-20">
                                <div className="col-md-6 mb-4">
                                    <div className="form-grp">
                                        <label>Email</label>
                                        <input type="email"
                                               {...register("email", {required: "This field is required"})} />
                                        <ErrorMessage errors={errors} name="email"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
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
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="form-grp">
                                        <label>Full Name</label>
                                        <input
                                            type="text" {...register("full_name", {required: "This field is required"})} />
                                        <ErrorMessage
                                            errors={errors}
                                            name="full_name"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <div className="form-grp">
                                        <label>Phone No</label>
                                        <input
                                            type="tel" {...register("phone", {required: "This field is required"})} />
                                        <ErrorMessage
                                            errors={errors}
                                            name="phone"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="form-grp">
                                        <label>Gender</label>
                                        <select name="gender" className="form-select"
                                                id="gender" {...register("gender", {required: "This field is required"})} >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <ErrorMessage
                                            errors={errors}
                                            name="gender"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="form-grp">
                                        <label>State</label>
                                        <select name="state" className="form-select"
                                                id="state" {...register("state", {required: "This field is required"})} >
                                            <option value="">Select state</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Karnataka">Karnataka</option>
                                        </select>
                                        <ErrorMessage
                                            errors={errors}
                                            name="state"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4 mb-4">
                                    <div className="form-grp">
                                        <label>City</label>
                                        <select name="city" className="form-select"
                                                id="city" {...register("city", {required: "This field is required"})} >
                                            <option value="">Select city</option>
                                            <option value="Amritsar">Amritsar</option>
                                            <option value="Faridabad">Faridabad</option>
                                            <option value="Jaipur">Jaipur</option>
                                            <option value="Bangalore">Bangalore</option>
                                        </select>
                                        <ErrorMessage
                                            errors={errors}
                                            name="city"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 mb-4">
                                    <div className="form-grp">
                                        <label>Address</label>
                                        <textarea
                                            id="address" {...register("address", {required: "This field is required"})} ></textarea>
                                        <ErrorMessage
                                            errors={errors}
                                            name="address"
                                            render={({message}) => <p className="error-msg">{message}</p>}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <button className="btn btn-success">
                                        Submit <img src="/assets/img/icon/right_arrow.svg" alt=""
                                                    className="injectable"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default UserSignup
