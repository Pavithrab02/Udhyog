// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarelements";
import logoimg from "../images/logoimg1.png";
import Home from "../pages/home";
const Navbar = () => {
    return (
        <>
            <Nav>
                
                <Bars />
                <a href="/">
                <img src={logoimg} alt="Logo" style={{ width: '300px',height: '100px'}} />
                </a>
                <NavMenu>
                    {/* <NavLink to="/home" >
                        Home
                    </NavLink> */}
                    
                    <NavLink to="/cardscontainer1" activeStyle>
                         Login
                    </NavLink>
                    
                    <NavLink to="/cardscontainer" activeStyle>
                        Sign up
                    </NavLink>

                    {/* <NavLink to="/signin" activeStyle>
                        Candidate Login
                    </NavLink>
                    
                    <NavLink to="/signup" activeStyle>
                       Candidate Regsiteration
                    </NavLink>
                     */}
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar;
