import RestuarantCard from "./RestuarantCard";



const Body =() =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map((restaurant) => (
                  <RestuarantCard key="resData.info.id" resData ={restaurant}/>
                ))}

            </div>
        </div>
    )
}
export default Body;