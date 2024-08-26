import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import BreadCrumb from "../../components/BreadCrumb.jsx";

function Category() {
    const {
        register,
        reset,
        handleSubmit
    } = useForm();

    const [category, setCategory] = useState([]);

    async function ReadCategory() {
        let url = "http://localhost:5000/category";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);

        if (response.error != "") {
            alert(response.error);
        } else {
            setCategory(response.records)
        }

    }

    useEffect(() => {
        ReadCategory();
    }, []);

    async function onSubmit(data) {
        console.log(data)

        let response = await fetch("http://localhost:5000/category", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)

        })
        response = await response.json();
        console.log(response);

        if (response.error) {
            alert(response.error);
        } else {
            ReadCategory()
            reset();
            alert("Category added successfully!");
        }
    }

    async function DeleteCategory(id) {
        let url = `http://localhost:5000/category/${id}`
        let response = await fetch(url, {
            method: "Delete",
        });
        response = await response.json()
        console.log(response);
        if (response.error != "") {
            alert(response.error);
        } else {
            // Category(response.records)
            alert(response.message)
            ReadCategory()
        }
    }


    return (
        <>
            <main className="fix">
                <BreadCrumb title="Admin" subTitle="Manage Category"/>

                <section className="contact__area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h5>Add new category</h5>
                                <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
                                    <div className="form-group flex-grow-1">
                                        <input type="text" className="form-control"
                                               {...register("CategoryName", {required: "This field is required"})}
                                               placeholder="Enter category name"/>
                                    </div>

                                    <button type="submit" className=" btn-primary">Add Category</button>
                                </form>

                                <h5 className="mt-5">List of category</h5>
                                <table className="table table-bordered text-center">
                                    <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th>Category Name</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {category.map((value, index) =>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{value.categoryName}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger"
                                                        onClick={() => DeleteCategory(value.id)}>Delete
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

    )
}

export default Category;