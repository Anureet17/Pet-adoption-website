import {useEffect, useState} from "react";
import BreadCrumb from "../../../components/BreadCrumb.jsx";

function RejectedAdoptions() {
    const [records, setRecords] = useState(null);

    async function ReadPendingAdoptionRequests() {
        let url = "http://localhost:5000/rejected-adoption-requests";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);

        if (response.error !== "") {
            alert(response.error);
        } else {
            // console.log(response.records)
            setRecords(response.records);
        }
    }

    useEffect(() => {
        ReadPendingAdoptionRequests().then();
    }, []);

    return (
        <main className="fix">
            <BreadCrumb title="Admin" subTitle="Rejected Adoptions"/>

            <section className="contact__area">
                <div className="container">
                    {records && records.length > 0 ? records.map(x =>
                        <div key={x.id} className="row border border-1 rounded shadow p-2">
                            <div className="col-md-6">
                                <h6 className="mb-0 fw-bold">Adoption ID #{x.id}</h6>
                            </div>

                            <div className="col-md-6 d-flex justify-content-between">
                                <h6 className="mb-0">
                                    Status: <span className="fw-bold text-danger">{x.adoption_status}</span>
                                </h6>
                            </div>

                            <div className="col-md-12">
                                <hr/>
                            </div>

                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={"http://localhost:5000" + x.photo} height={120} alt=""/>
                                    </div>
                                    <div className="col-md-5">
                                        <h5>Name: {x.name}</h5>
                                        <p className="mb-0">Age: {x.age} Years</p>
                                        <p className="mb-0">Gender: {x.gender}</p>
                                        <p className="mb-0">Gender: {x.color}</p>
                                    </div>
                                    <div className="col-md-4">
                                        <h5>Pet Details</h5>
                                        <p className="mb-0 text-capitalize">Vaccinated: {x.vaccinated}</p>
                                        <p className="mb-0 text-capitalize">Friendly to other pets: {x.friendly_to_other_pets}</p>
                                        <p className="mb-0 text-capitalize">Children friendly: {x.children_friendly}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <hr/>
                            </div>

                            {/* Personal Details */}
                            <div className="col-md-3 adoption-text-style">
                                <h6 style={{color: '#D61C62'}}>Personal Details</h6>
                                <p className="mb-0">
                                    <span>Name</span>: {x.first_name} {x.last_name}
                                </p>
                                <p className="mb-0">
                                    <span>Age</span>: {x.age}
                                </p>
                                <p className="mb-0">
                                    <span>Email</span>: {x.email}
                                </p>
                                <p className="mb-0">
                                    <span>Mobile Number 1</span>: {x.mobile_no_1}
                                </p>
                                <p className="mb-0">
                                    <span>Mobile Number 2</span>: {x.mobile_no_2}
                                </p>
                                <p className="mb-0"><span>Address 1</span>: {x.address_1}</p>
                                <p className="mb-0"><span>Address 2</span>: {x.address_2}</p>
                                <p className="mb-0">
                                    <span>City</span>: {x.city}&nbsp;&nbsp;|&nbsp;&nbsp;<span>State</span>: {x.state}
                                </p>
                                <p className="mb-0">
                                    <span>Postal Code</span>: {x.postal_code}
                                </p>
                            </div>

                            {/* Other Details */}
                            <div className="col-md-5 adoption-text-style">
                                <h6 style={{color: '#D61C62'}}>Other Details</h6>
                                <p className="mb-0">
                                    <span>Do you live in a</span>: {x.live_in}
                                </p>
                                <p className="mb-0">
                                    <span>Do you have a fenced yard</span>: {x.fence_yard}
                                </p>
                                <p className="mb-0">
                                    <span>Describe your Homes Activity Level</span>: {x.home_activity_level}
                                </p>
                                <p className="mb-0">
                                    <span>How many hours in a day would the pet be left alone?</span>: {x.spend_alone_time}
                                </p>
                                <p className="mb-0">
                                    <span>Does Anyone in your Household have Allergies to Animals</span>: {x.allergies}
                                </p>
                                <p className="mb-0">
                                    <span>Are all members of your Family agreeable to adopting a Pet?</span>: {x.agreeable}
                                </p>
                            </div>

                            {/* Reference #1 & Reference #2*/}
                            <div className="col-md-4 adoption-text-style">
                                <h6 style={{color: '#D61C62'}}>Reference #1</h6>
                                <p className="mb-0">
                                    <span>Full Name</span>: {x.ref_1_ful_name}
                                </p>
                                <p className="mb-0">
                                    <span>Email</span>: {x.ref_1_email}&nbsp;&nbsp;|&nbsp;&nbsp;
                                    <span>Mobile Number</span>: {x.ref_1_mobile}
                                </p>
                                <p><span>Address</span>: {x.ref_1_address}</p>

                                <h6 style={{color: '#D61C62'}}>Reference #2</h6>
                                <p className="mb-0">
                                    <span>Full Name</span>: {x.ref_2_ful_name}
                                </p>
                                <p className="mb-0">
                                    <span>Email</span>: {x.ref_2_email}&nbsp;&nbsp;|&nbsp;&nbsp;
                                    <span>Mobile Number</span>: {x.ref_2_mobile}
                                </p>
                                <p className="mb-0"><span>Address</span>: {x.ref_2_address}</p>
                            </div>
                        </div>
                    ) : <div>
                        <h5 className="mb-0 text-center text-danger">
                            No Data Available
                        </h5>
                    </div>
                    }
                </div>
            </section>
        </main>
    )
}

export default RejectedAdoptions