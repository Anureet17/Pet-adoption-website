import {useState, useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import BreadCrumb from "../../components/BreadCrumb.jsx";

function ManagePets() {
    const {register, handleSubmit, reset} = useForm();
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubCategories] = useState([]);
    const [managepets, setManagePets] = useState([]);

    useEffect(() => {
        fetchCategories();
        // fetchSubcategories();
    }, []);

    async function fetchCategories() {
        try {
            const response = await fetch("http://localhost:5000/category");
            const data = await response.json();
            if (data.error) {
                alert(data.error);
            } else {
                setCategories(data.records);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    async function ReadSubCategory(cat_id) {
        try {
            // console.log(cat_id)
            if (cat_id === "") {
                alert('Please select category.')
            } else {
                const response = await fetch("http://localhost:5000/subcategory-by-category/" + cat_id);
                const data = await response.json();
                // console.log(data);
                if (data.error) {
                    alert(data.error);
                } else {
                    setSubCategories(data.records);
                }
            }
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    }

    async function onSubmit(data) {
        // console.log(data)

        let response = await fetch("http://localhost:5000/manage-pets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)

        })
        response = await response.json();
        console.log(response);

        if (response.error) {
            alert(response.error);
        } else {
            ReadPets()
            reset();
            alert("Pet added successfully!");
        }
    }

    async function DeletePets(id) {
        let url = `http://localhost:5000/manage-pets/${id}`
        let response = await fetch(url, {
            method: "Delete",
        });
        response = await response.json()
        console.log(response);
        alert(response.message)
        // ReadSubCategory();
        ReadPets();
    }

    async function ReadPets() {
        let url = "http://localhost:5000/manage-pets";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response);

        if (response.error !== "") {
            alert(response.error);
        } else {
            setManagePets(response.records)
        }

    }

    useEffect(() => {
        ReadPets();
    }, []);

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pId, setPId] = useState('')

    function ShowModal(id) {
        setPId(id)
        handleShow()
    }

    const fileRef = useRef(null)

    async function UploadPhoto() {
        if (!fileRef.current.files[0]) {
            alert('Please select photo.');
            return false;
        }

        let formData = new FormData()
        formData.append("pId", pId)
        formData.append("photo", fileRef.current.files[0])

        let url = "http://localhost:5000/upload-photo"
        let response = await fetch(url, {
            method: "POST",
            body: formData
        })
        response = await response.json()
        console.log(response)

        if (response.error !== "") {
            alert(response.error)
        } else {
            handleClose()
            ReadPets()
            setPId('')
        }
    }


    return (
        <>
            <main className="fix">
                <BreadCrumb title="Admin" subTitle="Manage Pets"/>

                <section className="registration__area-two">
                    <div className="container">
                        <div className="registration__form-wrap">
                            <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gutter-20">

                                    <div className="col-md-6">
                                        <div className="form-grp select-grp">
                                            <label htmlFor="Category">Category:</label>
                                            <select
                                                {...register("Category", {required: "This field is required"})}
                                                onChange={(e) => ReadSubCategory(e.target.value)}>
                                                <option value="">Select category</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.categoryName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-grp select-grp">
                                            <label htmlFor="Subcategory">SubCategory:</label>
                                            <select
                                                {...register("subcategory", {required: "This field is required"})}>
                                                <option value="">Select subcategory</option>
                                                {subcategories.map((subcategory) => (
                                                    <option key={subcategory.subcategory_id}
                                                            value={subcategory.subcategory_id}>
                                                        {subcategory.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="">Pet Name</label>
                                            <input
                                                type="text" {...register("name", {required: "This field is required"})}/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="">Color</label>
                                            <input
                                                type="text" {...register("color", {required: "This field is required"})}/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-grp select-grp">
                                            <label>Gender</label>
                                            <select name="gender" className="orderby"
                                                    id="gender" {...register("gender", {required: "This field is required"})} >
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <label htmlFor="">Weight</label>
                                            <input
                                                type="text" {...register("weight", {required: "This field is required"})}/>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-grp select-grp">
                                            <label>Vaccinated</label>
                                            <select name="vaccinated" className="orderby"
                                                    id="vaccinated" {...register("vaccinated", {required: "This field is required"})}>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-grp select-grp">
                                            <label>Friendly to Other Pets</label>
                                            <select name="friendly_to_other_pets" className="orderby"
                                                    id="friendly_to_other_pets" {...register("friendly_to_other_pets", {required: "This field is required"})}>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="form-grp select-grp">
                                            <label>Children Friendly</label>
                                            <select name="children_friendly" className="orderby"
                                                    id="children_friendly" {...register("children_friendly", {required: "This field is required"})}>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/*<div className="col-md-8">*/}
                                    {/*    <div className="form-grp select-grp">*/}
                                    {/*        <label>Availability</label>*/}
                                    {/*        <select name="isAvailable" className="orderby"*/}
                                    {/*                id="isAvailable" {...register("isAvailable", {required: "This field is required"})}>*/}
                                    {/*            <option value="yes">Yes</option>*/}
                                    {/*            <option value="no">No</option>*/}
                                    {/*        </select>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <div className="col-lg-6">
                                        <button type="submit" className="btn">Submit
                                            <img src="/assets/img/icon/right_arrow.svg" alt=""
                                                 className="injectable"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <h5 className="mt-5">List of pets</h5>
                        <table className="table table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Gender</th>
                                <th>Weight</th>
                                <th>Vaccinated</th>
                                <th>Friendly to Other Pets</th>
                                <th>Children Friendly</th>
                                <th>Availability</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {managepets.map((value, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {!value.photo ?
                                            <button onClick={() => ShowModal(value.id)}
                                                    className="btn btn-success btn-xs">Upload</button> :
                                            <img src={"http://localhost:5000" + value.photo} alt="#"
                                                 style={{width: '50px'}}/>

                                        }</td>
                                    <td>{value.name}</td>
                                    <td>{value.color}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.weight + ' kg'}</td>
                                    <td>{value.vaccinated}</td>
                                    <td>{value.friendly_to_other_pets}</td>
                                    <td>{value.children_friendly}</td>
                                    <td>{value.isAvailable}</td>
                                    <td>
                                        <button type="button" onClick={() => DeletePets(value.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="">Select Photo</label>
                        <input type="file" ref={fileRef} className="form-control"/>
                    </div>

                    <button type="button" onClick={UploadPhoto} className="btn btn-success">Upload</button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ManagePets;




