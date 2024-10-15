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

const RestuarantCard = (props) =>{
    const {resName,cuisine,rating,time} = props
    return(
        <div className="res-card">
            <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_235624.JPG" />
            <h3>{props.resName}</h3>
            <div className="card1">
                <p>{props.rating}</p>
                <p>{props.time}</p>
            </div>
            <p>{props.cuisine}</p>
        </div>

        
    )
}

const Body =() =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard resName = "Meghana Foods" cuisine="biryani,North Indian" rating="4.1" time="36 min"/>
                <RestuarantCard resName = "KFC" cuisine="Bueger,Fries" image="" rating="4.2" time="25 min"/>
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