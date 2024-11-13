import RestaurantCard from "./RestaurantCard";
import resobj from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                    resobj.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    );
  }
export default Body;