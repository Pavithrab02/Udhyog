// import React from "react";
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,

// } from "./navbarelements";

// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { colors } from "@material-ui/core";
// const Navbar2 = () => {
//     return (
//         <>
//             <Nav>

//                 <Bars />
//                 {/* <img src={logoimg} alt="Logo" style={{ width: '300px',height: '70px', marginRight: '20px' }} /> */}
//                 <NavMenu>
//                     {/* <NavLink to="/home" >
//                         Home
//                     </NavLink> */}



//                     <NavLink to="/listjobapplncand" activeStyle>
//                         View Jobs Applied
//                     </NavLink>

//                     <NavDropdown title="Profile" id="navbarScrollingDropdown" style={{ color: 'white' }}>
//                         <NavDropdown.Item href="/updateprofile">Update Profile</NavDropdown.Item>
                        
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="/candprofile">
//                             View Profile
//                         </NavDropdown.Item>
//                     </NavDropdown>
//                     <NavLink to="/logout" activeStyle>
//                         Logout
//                     </NavLink>



//                 </NavMenu>

//             </Nav>
//         </>
//     );
// };

// export default Navbar2;

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
 
} from "./navbarelements";
 
import NavDropdown from 'react-bootstrap/NavDropdown';
import { colors } from "@material-ui/core";
 
import logoimg from "../images/logoimg1.png";
const Navbar2 = () => {
    return (
        <>
            <Nav>
 
                <Bars />
                <a href="/candpage">
                <img src={logoimg} alt="Logo" style={{ width: '300px',height: '100px'}} />
                </a>
                <NavMenu>
                <NavLink to="/jobapp" activeStyle>
                        Search Job
                    </NavLink>
 
 
 
                    <NavLink to="/listjobapplncand" activeStyle>
                        View Jobs Applied
                    </NavLink>
 
                    <NavDropdown title="Profile" id="navbarScrollingDropdown" style={{ color: 'white' }}>
                        <NavDropdown.Item href="/updateprofile">Update Profile</NavDropdown.Item>
                       
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/candprofile">
                            View Profile
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavLink to="/logout" activeStyle>
                        Logout
                    </NavLink>
 
 
 
                </NavMenu>
 
            </Nav>
        </>
    );
};
 
export default Navbar2;