import { CDN_URL } from "../utils/constants";
const RestuarantCard = (props) =>{
    const {resData} = props
  
    const{name,cloudinaryImageId, avgRating, deliveryTime, totalRatingsString, costForTwo, areaName, cuisines} = resData?.info;  // ?. optional chaining
    return(
        <div className="res-card">
            <img className="res-image"src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <div className="card1">
                <p>{avgRating}</p>
                <p>{deliveryTime}</p>
                <p>{totalRatingsString}</p>
                <p>{costForTwo}</p>
                <p>{areaName}</p>
            </div>
            <p>{cuisines.join(", ")}</p>
        </div>
    )
  }

  export default RestuarantCard;