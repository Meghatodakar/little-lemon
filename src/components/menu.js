import React from "react";
import littlelemon_logo from "../assets/littlelemon_logo.png"

const Menu = () => {
    return(
        <nav>
            <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/booking">Reservations</a></li>
            </ul>
        </nav>
    )
}

export default Menu;