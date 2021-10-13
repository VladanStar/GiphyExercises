import React from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";

const Header = ()=>{
    return (
        <Navbar className="nav navbar bg-primary d-flex justify-content-sm-center">
            <h1 className="header_title" >Giphy App</h1>

        </Navbar>
    )
}
export default Header;