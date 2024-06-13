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
const Navbar1 = () => {
    return (
        <>
            <Nav>
                
                <Bars />
                <a href="/employerpage">
                <img src={logoimg} alt="Logo" style={{ width: '300px',height: '100px'}} />
                </a>
                <NavMenu>
                    {/* <NavLink to="/home" >
                        Home
                    </NavLink> */}
                    
                    <NavLink to="/addjob" activeStyle>
                         Add Job
                    </NavLink>
                    
                    <NavLink to="/listjobapplnemp" activeStyle>
                        View Job Application
                    </NavLink>

                     <NavLink to="/jobsposted" activeStyle>
                        View Jobs Posted
                    </NavLink>

                    <NavLink to="/logout" activeStyle>
                        Logout
                    </NavLink>

                    
                  
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar1;
