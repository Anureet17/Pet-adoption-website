import BreadCrumb from "../../components/BreadCrumb.jsx";
import {useEffect, useState} from "react";
import PetCard from "../../components/PetCard.jsx";

const Pets = () => {
    const [pets, setPets] = useState([]);

    async function fetchPets() {
        try {
            const response = await fetch("http://localhost:5000/read-pets-all");
            const data = await response.json();
            if (data.error) {
                alert(data.error);
            } else {
                setPets(data.records);
            }
        } catch (error) {
            console.error("Error fetching pets:", error);
        }
    }

    useEffect(() => {
        fetchPets().then();
    }, []);

    return (
        <main className="fix">
            <BreadCrumb title="Home" subTitle="Pets"/>

            <section className="animal__area-two">
                <div className="container">
                    <div className="row justify-content-center">
                        {pets.map((pet, index) => <PetCard key={index} pet={pet}/>)}
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Pets;