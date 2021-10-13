import React from "react";
import "./Footer.css";
import {Navbar} from "react-bootstrap";

const Footer = ()=>{
    return (
        <Navbar className = "footer d-flex justify-content-sm-center bg-primary"  >
            <Navbar.Brand >
                <span className= "name ">&copy 2021 by Vladan Cupric</span>
            </Navbar.Brand>
        </Navbar>
    )
}
export default Footer;