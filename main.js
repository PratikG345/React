import React, { useState } from "react";
import ReactDom from "react-dom/client"; 

const Heading = () =>{
    return (
        <div className="header">
            <div className="image-container">
            <img 
            className="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>

    )
}
const RestaurantCard = () =>{
    return(
    <div className="res-card">
        <h3>Meghna Foods</h3>
    </div>
    )
}

const Body = () => {
    return(
    <div className="body">
        <div className="search">search</div>
        <div className="res-container">
            {/* Restaurant card */}
            <RestaurantCard/>
        </div>
    </div>
    )
}

const AppLayout = () =>{
    return (
    <div className="app">
        <Heading/>
        <Body/>
    </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />)