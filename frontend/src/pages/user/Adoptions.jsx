import BreadCrumb from "../../components/BreadCrumb.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Adoptions = () => {
    const navigate = useNavigate();
    const [adoptions, setAdoptions] = useState(null);

    async function MyAdoptions() {
        let token = localStorage.getItem("userToken");

        if (!token) {
            localStorage.removeItem("userToken");
            navigate("/user-login");
        }

        let path = "http://localhost:5000/my-adoptions";

        let response = await fetch(path, {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        })
        response = await response.json();
        // console.log(response);

        if (response.jwt) {
            localStorage.removeItem("userToken");
            navigate("/user-login");
        } else if (response.error !== "") {

        } else {
            // console.log(response.records);
            setAdoptions(response.records);
        }
    }

    useEffect(() => {
        MyAdoptions().then();
    }, []);

    return (
        <main className="fix">
            <BreadCrumb title="User" subTitle="My Adoptions"/>

            <section className="contact__area">
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Pet Name</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Gender</th>
                            <th>Weight</th>
                            <th>Vaccinated</th>
                            <th>Friendly to Other Pets</th>
                            <th>Children Friendly</th>
                            <th>Adoption Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {adoptions && adoptions.length === 0 ?
                            <tr>
                                <td colSpan={10} className="text-center text-danger fs-4">
                                    No Data Available
                                </td>
                            </tr> :
                            adoptions?.map(x =>
                                <tr key={x.id}>
                                    <td>
                                        <img src={"http://localhost:5000" + x.photo} alt="Pet" style={{width: '50px'}}/>
                                    </td>
                                    <td>{x.petName}</td>
                                    <td>{x.subCatName}</td>
                                    <td>{x.color}</td>
                                    <td className="text-capitalize">{x.gender}</td>
                                    <td>{x.weight} Kg</td>
                                    <td className="text-capitalize">{x.vaccinated}</td>
                                    <td className="text-capitalize">{x.friendly_to_other_pets}</td>
                                    <td className="text-capitalize">{x.children_friendly}</td>
                                    <td>{x.adoption_status}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}
export default Adoptions;