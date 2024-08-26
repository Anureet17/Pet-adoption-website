import {useContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb.jsx";
import {useForm} from "react-hook-form";
import {UserContext} from "../../App.jsx";

const PetDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [pet, setPet] = useState(null);
    const {setLoggedIn} = useContext(UserContext);

    async function CheckPetStatus(pet_info) {
        setPet(pet_info);
        // console.log(pet_info.id)

        let response = await fetch("http://localhost:5000/pet-status/" + pet_info.id);
        response = await response.json();
        // console.log(response);

        if (response.error !== "") {
            Qual.errordb('Error', response.error);
        } else {
            // console.log(response.records[0].isAvailable);

            if (response.records[0].isAvailable === "Available") {
                setPet(pet_info);
            } else {
                navigate("/pets");
            }
        }
    }

    useEffect(() => {
        if (!location.state) {
            navigate("/")
        } else {
            // console.log(location.state.pet)
            // console.log(location.state.pet.id)
            CheckPetStatus(location.state.pet).then();
        }
    }, [location, navigate]);

    const [showForm, setShowForm] = useState(false);

    function handleShowForm(value) {
        let token = localStorage.getItem("userToken");

        if (!token) {
            navigate("/user-login");
            return false;
        }

        setShowForm(value);
        window.scrollTo(0, 0);
    }

    /* ------------------------------------------------------------ */
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    async function onSubmit(data) {
        // console.log(pet);
        // console.log(data);
        // return false;

        let token = localStorage.getItem("userToken");

        if (!token) {
            navigate("/user-login");
            return false;
        }

        data["pet_id"] = pet.id;
        let response = await fetch("http://localhost:5000/adoptionform", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })
        response = await response.json();
        // console.log(response);

        if (response.jwt) {
            localStorage.removeItem('userToken');
            setLoggedIn(false);
            navigate("/user-login");
        } else if (response.error) {
            Qual.errordb('Error', response.error);
        } else {
            reset();
            setShowForm(false);
            navigate("/thank-you");
        }
    }

    return (
        <main>
            <BreadCrumb title="Home" subTitle="Pet Details"/>

            <section className="animal__details-area">
                <div className="container">
                    <div className="animal__details-wrap">
                        {showForm ?
                            // Form
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="payment__form">
                                        <button type="button" onClick={() => handleShowForm(false)}>
                                            Cancel Adoption <i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h1 className="text-center mt-5">Pet Adoption Application Form</h1>

                                    <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>
                                        <span>All fields are required.</span>

                                        <div className="row gutter-20">

                                            <label htmlFor="">Name*</label>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" placeholder="First Name"
                                                           {...register("firstname", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input type="text" placeholder="Last Name"
                                                           {...register("lastname", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Age*</label>
                                                    <input type="number" placeholder="ex:23"
                                                           {...register("age", {required: "This field is required"})}/>
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
                                                    <select name="city" className="orderby" id="city"
                                                            {...register("city", {required: "This field is required"})} >
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
                                                    <input type="number" placeholder="Postal/ Zip Code"
                                                           {...register("postal", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Phone Number (Mobile)*</label>
                                                    <input type="tel" placeholder="ex:1234567890"
                                                           {...register("phone1", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Phone Number (Home)*</label>
                                                    <input type="tel" placeholder="ex:1234567890"
                                                           {...register("phone2", {required: "This field is required"})}/>
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
                                                <div className="form-grp select-grp">
                                                    <label htmlFor="">
                                                        Number of hours (average) pet(s) spends alone*
                                                    </label>
                                                    <select className="orderby" name="hours_spends_by_pet_alone"
                                                            id="hours_spends_by_pet_alone"
                                                            {...register("hours_spends_by_pet_alone", {required: "This field is required"})}>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                    </select>
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
                                                    <input type="email" placeholder="Email"
                                                           {...register("email1", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Phone Number*</label>
                                                    <input type="tel" placeholder="ex:1234567890"
                                                           {...register("phone3", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label>Address*</label>
                                                    <input type="text"
                                                           {...register("Address3", {required: "This field is required"})}/>
                                                </div>
                                            </div>


                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label htmlFor="">Reference #2: Full Name*</label>
                                                    <input type="text" placeholder="First Name"
                                                           {...register("fullName2", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Email*</label>
                                                    <input type="email" placeholder="Email"
                                                           {...register("email2", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label htmlFor="">Phone Number*</label>
                                                    <input type="tel" placeholder="ex:1234567890"
                                                           {...register("phone4", {required: "This field is required"})}/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <label>Address*</label>
                                                    <input type="text"
                                                           {...register("Address4", {required: "This field is required"})}/>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn">Submit <img
                                            src="/assets/img/icon/right_arrow.svg" alt="" className="injectable"/>
                                        </button>
                                    </form>
                                </div>
                            </div> :
                            // Pet Details
                            <div className="row">
                                <div className="col-61">
                                    <div className="animal__details-img-wrap">
                                        {/* Photo */}
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img src={"http://localhost:5000" + pet?.photo} alt="img"/>
                                            </div>
                                        </div>

                                        {/* Gallery */}
                                        {/*<ul className="nav nav-tabs">*/}
                                        {/*    <li className="nav-item" role="presentation">*/}
                                        {/*        <button className="nav-link" id="itemOne-tab" data-bs-toggle="tab"*/}
                                        {/*                data-bs-target="#itemOne-tab-pane" type="button" role="tab"*/}
                                        {/*                aria-controls="itemOne-tab-pane" aria-selected="true">*/}
                                        {/*            <img src="assets/img/shop/pet_details01.jpg" alt="img"/>*/}
                                        {/*        </button>*/}
                                        {/*    </li>*/}
                                        {/*    <li className="nav-item" role="presentation">*/}
                                        {/*        <button className="nav-link" id="itemTwo-tab" data-bs-toggle="tab"*/}
                                        {/*                data-bs-target="#itemTwo-tab-pane" type="button" role="tab"*/}
                                        {/*                aria-controls="itemTwo-tab-pane" aria-selected="false">*/}
                                        {/*            <img src="assets/img/shop/pet_details02.jpg" alt="img"/>*/}
                                        {/*        </button>*/}
                                        {/*    </li>*/}
                                        {/*</ul>*/}
                                    </div>

                                    {/* Description */}
                                    {/*<div className="animal__details-description">*/}
                                    {/*    <h4 className="title">Description</h4>*/}
                                    {/*    <p>{pet?.about}</p>*/}
                                    {/*</div>*/}

                                    {/* More Additional Information */}
                                    <div className="animal__details-info-wrap">
                                        <h4 className="title">More Additional Information</h4>
                                        <div className="introducing__list-box">
                                            <ul className="list-wrap">
                                                {pet?.vaccinated === "yes" &&
                                                    <li>
                                                    <span className="icon">
                                                        <img src="/assets/img/icon/check_icon02.svg" alt=""
                                                             className="injectable"/>
                                                    </span>
                                                        Vaccine Completed
                                                    </li>
                                                }

                                                {pet?.children_friendly === "yes" &&
                                                    <li>
                                                    <span className="icon">
                                                        <img src="/assets/img/icon/check_icon02.svg" alt=""
                                                             className="injectable"/>
                                                    </span>
                                                        Children Friendly
                                                    </li>
                                                }

                                                {pet?.friendly_to_other_pets === "yes" &&
                                                    <li>
                                                    <span className="icon">
                                                        <img src="/assets/img/icon/check_icon02.svg" alt=""
                                                             className="injectable"/>
                                                    </span>
                                                        Friendly to other pets
                                                    </li>
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-39">
                                    <aside className="animal__details-sidebar">
                                        <div className="animal__details-widget">
                                            <div className="animal__details-sidebar-info">
                                                <h4 className="title">{pet?.name}</h4>

                                                <ul className="list-wrap">
                                                    <li><span>Breed:</span>{pet?.subCatName}</li>
                                                    <li><span>Color:</span>{pet?.color}</li>
                                                    <li><span>Gender:</span>{pet?.gender}</li>
                                                    <li><span>Weight:</span>{pet?.weight} Kg</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="animal__details-widget">
                                            <div className="payment__type-wrap">
                                                <div className="payment__form">
                                                    <button type="button" onClick={() => handleShowForm(true)}>
                                                        Bring Me Home
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}
export default PetDetails;