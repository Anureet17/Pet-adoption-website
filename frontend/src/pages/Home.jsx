import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Banner from "../components/Banner.jsx";
import PetCard from "../components/PetCard.jsx";

const Home = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets();
    }, []);

    async function fetchPets() {
        try {
            const response = await fetch("http://localhost:5000/read-pets-home");
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

    return (
        <main className="fix">
            <Banner/>

            <section className="animal__area-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section__title white-title text-center mb-40">
                                <h2 className="title">Available Pets For Adoption</h2>
                                <p>We will work with you to develop individualised care plans,
                                    including <br/> management chronic diseases.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {pets.map((pet, index) => <PetCard key={index} pet={pet}/>)}
                    </div>

                    <div className="text-center">
                        <Link to="/pets" className="btn btn-success">View more</Link>
                    </div>
                </div>

                <div className="animal__shape-wrap">
                    <img src="/assets/img/images/adoption_shape01.png" alt="shape" className="rotateme"/>
                    <img src="/assets/img/images/adoption_shape02.png" alt="shape"
                         data-aos="fade-down-left" data-aos-delay="400"/>
                </div>
            </section>
        </main>
    )
}
export default Home