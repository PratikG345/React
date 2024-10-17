const RestuarantCard = (props) =>{
    const {resData} = props
  
    const{name,cloudinaryImageId, avgRating, deliveryTime, totalRatingsString, costForTwo, areaName, cuisines} = resData?.info;  // ?. optional chaining
    return(
        <div className="res-card">
            <img className="res-image"src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${cloudinaryImageId}`} />
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