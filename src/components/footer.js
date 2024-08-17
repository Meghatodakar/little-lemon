import React from "react"
import small_logo from "../assets/small_logo.png"

const Footer = () => {
    return(
        <footer>
            <section>
            <div>
                <img src={small_logo} />
            </div>
            
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li>Facebook</li>
                <li>X</li>
                <li>Instagram</li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;