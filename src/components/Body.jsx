import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resObj from "../utils/mockData"
// import resobj from "../utils/mockData";
const Body = () => {
    const [listOfRestaurants,setlistOfRestaurants] = useState(resObj);
// it is array destructuring
// it is same as 
// const[listOfRestaurants,setListOfRestaurants] = arr
// or
// const listOfRestaurants = arr[0]
// const setlistOfRestaurants = arr[1]
    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={()=>{
                    let filteredList = listOfRestaurants.filter(
                        (resData) => resData.info.avgRating >= 4.3 
                     );
                     setlistOfRestaurants(filteredList)
                     
                }}
                >
                    Top Rated Restaurants
                    </button>

                    <button 
                className="filter-price"
                onClick={()=>{
                    let filteredList = listOfRestaurants.filter(
                        (resData) => resData.info.sla.deliveryTime <= 25 
                     );
                     setlistOfRestaurants(filteredList)
                     
                }}
                >
                    Under 25 minutes
                    </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
  }
export default Body;