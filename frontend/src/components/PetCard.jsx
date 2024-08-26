import {Link} from "react-router-dom";

const PetCard = ({pet}) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
            <div className="animal__item animal__item-two shine-animate-item">
                <div className="animal__thumb animal__thumb-two shine-animate">
                    <Link to="/pet-details" state={{pet: pet}}>
                        <img src={`http://localhost:5000${pet?.photo}`} alt="img"/>
                    </Link>
                </div>

                <div className="animal__content animal__content-two">
                    <h4 className="title">
                        <Link to="/pet-details" state={{pet: pet}}>{pet?.name}</Link>
                    </h4>

                    <div className="pet-info">
                        <ul className="list-wrap">
                            <li>Gender: <span className="text-capitalize">{pet?.gender}</span></li>
                            <li>Color: <span className="text-capitalize">{pet?.color}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetCard