import PublicNavbar from "../components/PublicNavbar.jsx";
import Footer from "../components/Footer.jsx";
import {useForm} from "react-hook-form";

function AdoptionForm() {
    const {register, handleSubmit, reset} = useForm();

    async function onSubmit(data) {
        console.log(data)

        let response = await fetch("http://localhost:5000/adoptionform", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)

        })
        response = await response.json();
        console.log(response);

        if (response.error) {
            alert(response.error);
        } else {
            reset();
            alert("Form submitted successfully!");
        }
    }
    return(
        <>
            <PublicNavbar/>
            <section className="breadcrumb__area fix">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="breadcrumb__content">
                                <h3 className="title">Adoption Form</h3>
                                <nav className="breadcrumb">
                                <span property="itemListElement" typeof="ListItem">
                                    <a href="index.html">Home</a>
                                </span>
                                    <span className="breadcrumb-separator"><i
                                        className="flaticon-right-arrow-angle"></i></span>
                                    <span property="itemListElement" typeof="ListItem">Adoption Form</span>
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

            <h1 className="text-center mt-5">Pet Adoption Application Form</h1>

            <section className="registration__area-two">
                <div className="container">
                    <div className="registration__inner-wrap-two">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="registration__form-wrap">
                                    <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>
                                        {/*<h3 className="title">Request a Schedule</h3>*/}
                                        {/*<span>Your email address will not be published. Required fields are marked *</span>*/}
                                        <div className="row gutter-20">

                                            <label htmlFor="">Name*</label>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text"
                                                           placeholder="First Name" {...register("firstname", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text"
                                                           placeholder="Last Name" {...register("lastname", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Age*</label>
                                                    <input type="text"
                                                           placeholder="ex:23" {...register("age", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label>Address*</label>
                                                    <input type="text"
                                                           placeholder="Street Address" {...register("address1", {required: "This field is required"})}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <input type="text"
                                                           placeholder="Street Address Line 2" {...register("address2", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp select-grp">
                                                    <label>State</label>
                                                    <select name="state" className="orderby"
                                                            id="state" {...register("state", {required: "This field is required"})} >
                                                        <option value="">Select state</option>
                                                        <option value="Punjab">Punjab</option>
                                                        <option value="Haryana">Haryana</option>
                                                        <option value="Rajasthan">Rajasthan</option>
                                                        <option value="Karnataka">Karnataka</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp select-grp">
                                                    <label>City</label>
                                                    <select name="city" className="orderby"
                                                            id="city" {...register("city", {required: "This field is required"})} >
                                                        <option value="">Select city</option>
                                                        <option value="Amritsar">Amritsar</option>
                                                        <option value="Faridabad">Faridabad</option>
                                                        <option value="Jaipur">Jaipur</option>
                                                        <option value="Bangalore">Bangalore</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <input type="text"
                                                           placeholder="Postal/ Zip Code" {...register("postal", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Phone Number (Mobile)*</label>
                                                    <input type="text"
                                                           placeholder="ex:1234567890" {...register("phone1", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Phone Number (Home)*</label>
                                                    <input type="text"
                                                           placeholder="ex:1234567890" {...register("phone2", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label htmlFor="">Email*</label>
                                                    <input type="email"
                                                           placeholder="Email" {...register("email", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-grp select-grp">
                                                    <label>I / We live in a*</label>
                                                    <select name="livingIn" className="orderby"
                                                            id="livingIn" {...register("livingIn", {required: "This field is required"})} >
                                                        <option value="">Please Select</option>
                                                        <option value="Single Family Homer">Single Family Home</option>
                                                        <option value="Duplex / Twin">Duplex / Twin</option>
                                                        <option value="Condo / Townhome">Condo / Townhome</option>
                                                        <option value="Trailer">Trailer</option>
                                                        <option value="Apartment">Apartment</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-grp select-grp">
                                                    <label>Do you have a fenced in yard?*</label>
                                                    <select name="fencedYard" className="orderby"
                                                            id="fencedYard" {...register("fencedYard", {required: "This field is required"})}>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-grp select-grp">
                                                    <label>Do you have another pet?*</label>
                                                    <select name="anotherPet" className="orderby"
                                                            id="anotherPet" {...register("anotherPet", {required: "This field is required"})}>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-grp select-grp">
                                                    <label>Do you have a regular veterinarian?*</label>
                                                    <select name="veterinarian" className="orderby"
                                                            id="veterinarian" {...register("veterinarian", {required: "This field is required"})}>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-grp">
                                                    <label htmlFor="">Number of hours (average) pet(s) spends
                                                        alone*</label>
                                                    <input type="text"
                                                           placeholder="ex:7 hours" {...register("hours_spends_by_pet_alone", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-grp select-grp">
                                                    <label>Describe your Homes Activity Level*</label>
                                                    <select name="Activity" className="orderby"
                                                            id="Activity" {...register("home_activity_level", {required: "This field is required"})}>
                                                        <option value="Busy/ Noisy">Busy/ Noisy</option>
                                                        <option value="Moderate Comings/Goings">Moderate
                                                            Comings/Goings
                                                        </option>
                                                        <option value="Quite with Occasional Guests">Quite with
                                                            Occasional Guests
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-grp select-grp">
                                                    <label>Does anyone in your Household have Allergies to
                                                        Animals?*</label>
                                                    <select name="Allergies" className="orderby"
                                                            id="Allergies" {...register("household_have_allergies_to_animals", {required: "This field is required"})}>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="form-grp select-grp">
                                                    <label>Are all members of your Family agreeable to Adopt a
                                                        pet?*</label>
                                                    <select name="agreeable" className="orderby"
                                                            id="agreeable" {...register("family_agreeable_to_adopt", {required: "This field is required"})}>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label htmlFor="">Reference #1: Full Name*</label>
                                                    <input type="text"
                                                           placeholder="First Name" {...register("fullName1", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Email*</label>
                                                    <input type="email"
                                                           placeholder="Email" {...register("email1", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Phone Number*</label>
                                                    <input type="text"
                                                           placeholder="ex:1234567890" {...register("phone3", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label>Address*</label>
                                                    <input
                                                        type="text"{...register("Address3", {required: "This field is required"})}/>
                                                </div>
                                            </div>


                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label htmlFor="">Reference #2: Full Name*</label>
                                                    <input type="text"
                                                           placeholder="First Name" {...register("fullName2", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Email*</label>
                                                    <input type="email"
                                                           placeholder="Email" {...register("email2", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Phone Number*</label>
                                                    <input type="text"
                                                           placeholder="ex:1234567890" {...register("phone4", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label>Address*</label>
                                                    <input
                                                        type="text"{...register("Address4", {required: "This field is required"})}/>
                                                </div>
                                            </div>


                                        </div>
                                        <button type="submit" className="btn">Submit <img
                                            src="/assets/img/icon/right_arrow.svg" alt="" className="injectable"/>
                                        </button>
                                    </form>


                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="registration__img">
                                    <img src="/assets/img/images/registration_img.png" alt="" data-aos="fade-right"
                                         data-aos-delay="400"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer/>
        </>
    )
}

export default AdoptionForm
