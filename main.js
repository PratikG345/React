import React, { useState } from "react";
import ReactDom from "react-dom/client"; 

const Header = () =>{
    return(
    <div className="header">
        <div className="logo-container">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
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

const RestuarantCard = () =>{
    return(
        <div className="res-card">
            <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_235624.JPG" />
            <h3>KFC</h3>
            <div className="card1">
                <p>4.1</p>
                <p>25-30mins</p>
            </div>
            <p>Burgers, Fastfood, Rolls & Wraps</p>
        </div>

        
    )
}

const Body =() =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard/>
                <RestuarantCard/>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />)