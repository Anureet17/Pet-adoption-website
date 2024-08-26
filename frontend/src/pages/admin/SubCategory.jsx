import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import BreadCrumb from "../../components/BreadCrumb.jsx";

function SubCategory() {
    const {register, handleSubmit, reset} = useForm();
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubCategories] = useState([])

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        try {
            const response = await fetch("http://localhost:5000/category");
            const data = await response.json();
            console.log(data);
            if (data.error) {
                alert(data.error);
            } else {
                setCategories(data.records);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    async function onSubmit(data) {
        try {
            console.log(data);
            const url = "http://localhost:5000/subcategory";
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            console.log(responseData);
            if (responseData.error) {
                alert(responseData.error);
            } else {
                ReadSubCategory();
                reset();
                alert("Subcategory added successfully!");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function DeleteSubCategory(subcategory_id) {
        let url = `http://localhost:5000/subcategory/${subcategory_id}`
        let response = await fetch(url, {
            method: "Delete",
        });
        response = await response.json()
        console.log(response);

        if (response.error) {
            alert(response.error);
        } else {
            ReadSubCategory()
            alert("Subcategory deleted successfully!");
        }
    }

    async function ReadSubCategory() {
        let url = "http://localhost:5000/subcategory";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);

        if (response.error != "") {
            alert(response.error);
        } else {
            setSubCategories(response.records)
        }

    }

    useEffect(() => {
        ReadSubCategory();
    }, []);


    return (
        <>

            <main className="fix">
                <BreadCrumb title="Admin" subTitle="Manage Category"/>

                <section className="contact__area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h5>Add new sub-category</h5>
                                <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row gutter-20">
                                        <div className="col-12">
                                            <div className="mb-3 form-group">
                                                <label htmlFor="Select Category">Category:</label>
                                                <select className="form-select"
                                                        {...register("Category", {required: "This field is required"})}>
                                                    <option value="">Select category</option>
                                                    {categories.map((category, index) => (
                                                        <option key={index}
                                                                value={category.id}>{category.categoryName}</option>

                                                    ))}

                                                </select>
                                            </div>

                                            <div className="mb-3 form-group">
                                                <label htmlFor="">Name:</label>
                                                <input type="text" className="form-control"
                                                       {...register("CategoryName", {required: "This field is required"})} />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <button type="submit" className="btn">
                                                Submit <img src="/assets/img/icon/right_arrow.svg" alt=""
                                                            className="injectable"/>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <h5>List of sub-category</h5>
                                <table className="table table-bordered text-center">
                                    <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>SubCategory Name</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {subcategories.map((value, index) =>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{value.name}</td>
                                            <td>
                                                <button type="button"
                                                        onClick={() => DeleteSubCategory(value.subcategory_id)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default SubCategory;
