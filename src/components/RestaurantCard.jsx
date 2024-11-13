import { CDN_URL } from "../utils/constants";
const stylecard = {

    backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,avgRating,locality,cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
  
    return(
    <div className="res-card" style={stylecard}>
        <div className="img-conntainer">
            <img className="card-image" src={CDN_URL+ cloudinaryImageId} alt="pizzahut"/>
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{avgRating}stars</h4>
        <h5>{locality}</h5>
  
    </div>
    );
  }
export default RestaurantCard;