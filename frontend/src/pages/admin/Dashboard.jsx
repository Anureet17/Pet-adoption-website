import BreadCrumb from "../../components/BreadCrumb.jsx";
import {useEffect, useState} from "react";

function Dashboard() {
    const [cat, setCat] = useState(0);
    const [subCat, setSubCat] = useState(0);
    const [pets, setPets] = useState(0);
    const [records, setRecords] = useState(null);
    const [records2, setRecords2] = useState(null);
    const [records3, setRecords3] = useState(null);

    async function ReadCategory() {
        let url = "http://localhost:5000/category";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);
        if (!response.error) {
            setCat(response.records.length)
        }
    }

    async function ReadSubCategory() {
        let url = "http://localhost:5000/subcategory";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);
        if (!response.error) {
            setSubCat(response.records.length)
        }
    }

    async function ReadAllPetFromDatabase() {
        let url = "http://localhost:5000/manage-pets";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);
        if (!response.error) {
            setPets(response.records.length)
        }
    }

    async function ReadPendingAdoptionRequests() {
        let url = "http://localhost:5000/pending-adoption-requests";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);

        if (!response.error) {
            setRecords(response.records.length);
        }
    }

    async function ReadApprovedAdoptionRequests() {
        let url = "http://localhost:5000/approved-adoption-requests";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);

        if (!response.error) {
            setRecords2(response.records.length);
        }
    }

    async function ReadRejectedAdoptionRequests() {
        let url = "http://localhost:5000/rejected-adoption-requests";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);

        if (!response.error) {
            setRecords3(response.records.length);
        }
    }

    useEffect(() => {
        ReadCategory().then();
        ReadSubCategory().then();
        ReadAllPetFromDatabase().then();
        ReadPendingAdoptionRequests().then();
        ReadApprovedAdoptionRequests().then();
        ReadRejectedAdoptionRequests().then();
    }, []);

    return (
        <main className="fix">
            <BreadCrumb title="Admin" subTitle="Dashboard"/>

            <section className="contact__area">
                <div className="container">
                    <h2 className="mb-0 text-center">Welcome to Dashboard</h2>

                    <div className="row mt-5">
                        <div className="col-2">
                            <div className="card" style={{backgroundColor: '#002169'}}>
                                <div className="card-body text-center">
                                    <h6 className="mb-0 text-white">
                                        <span className="fs-5">{cat}</span><br/>Total Category
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="card" style={{backgroundColor: '#002169'}}>
                                <div className="card-body text-center">
                                    <h6 className="mb-0 text-white">
                                        <span className="fs-5">{subCat}</span><br/>Total SubCategory
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="card" style={{backgroundColor: '#002169'}}>
                                <div className="card-body text-center">
                                    <h6 className="mb-0 text-white">
                                        <span className="fs-5">{pets}</span><br/>Total Pets
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="card" style={{backgroundColor: '#002169'}}>
                                <div className="card-body text-center">
                                    <h6 className="mb-0 text-white">
                                        <span className="fs-5">{records}</span><br/>Pending Adoptions
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="card" style={{backgroundColor: '#002169'}}>
                                <div className="card-body text-center">
                                    <h6 className="mb-0 text-white">
                                        <span className="fs-5">{records2}</span><br/>Approved Adopt.
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className="card" style={{backgroundColor: '#002169'}}>
                                <div className="card-body text-center">
                                    <h6 className="mb-0 text-white">
                                        <span className="fs-5">{records3}</span><br/>Rejected Adopt.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard