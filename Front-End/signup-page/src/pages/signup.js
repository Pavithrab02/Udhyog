import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components";
import Footerall from "./Footerall";


// const Signup = () => {
//     const [formData, setFormData] = useState({
//         firstname: "",
//         lastname: "",
//         emailId: "",
//         contactNo: "",
//         password: ""
        
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Perform validation here before submitting the form
//         if (formData.firstname.trim() === "") {
//             alert("Please enter firstname");
//             return;
//         }
//         if (formData.emailId.trim() === "") {
//             alert("Please enter email");
//             return;
//         }
//         if (formData.contactNo.trim() === "") {
//             alert("Please enter contact number");
//             return;
//         }
//         if (!/^\d{10}$/.test(formData.contactNo)) {
//             alert("Contact number should be 10 digits");
//             return;
//         }
        
//         // Create a new user object
//         const newUser = {
//            firstname: formData.firstname,
//            lastname: formData.lastname,
//             emailId: formData.emailId,
//             contactNo: formData.contactNo,
//             password: formData.password
//         };

//         try {
//             // Make a POST request using Axios
//             const response = await axios.post("http://localhost:9050/udhyog/user", newUser);
//             console.log(response.data); // Response from the server

//             alert("Sign up successful!");
//             // Optionally, you can reset the form fields if needed
//             setFormData({
//                firstname:"",
//                lastname:"",
//                 emailId: "",
//                 contactNo: "",
//                 password: ""
//             });
//         } catch (error) {
//             console.error("Error:", error.message);
//             alert("Error signing up. Please try again later.");
//         }
//     };

//     return (
//         <>
//         <div style={{backgroundImage: `url('https://th.bing.com/th/id/R.a0663bba2cc2654aac69407d2e0b5690?rik=14vFlxtgQrOAwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fLight-blue-wallpaper-hd-quality.jpg&ehk=ebOgJiU5%2fkN6aJLjZLIhMYm0N%2fWHUm1mvjQnaXrR6NA%3d&risl=&pid=ImgRaw&r=0.jpg')`,backgroundSize:'cover', display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <div style={{  margin:'100px', width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)" }}>
//             <div >
//             <div style={{display:'flex',justifyContent:'center'}}>
//                 <h1>Register</h1>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <h5>Enter firstname : </h5>
//                     <input
//                     style={{padding:'10px',width:'250px'}}
//                         type="text"
//                         name="firstname"
//                         placeholder="firstname"
//                         value={formData.firstname}
//                         onChange={handleChange}
//                     />
//                     <h5>Enter lastname : </h5>
//                     <input
//                     style={{padding:'10px',width:'250px'}}
//                         type="text"
//                         name="lastname"
//                         placeholder="lastname"
//                         value={formData.lastname}
//                         onChange={handleChange}
//                     />
//                     <h5>Enter Email id : </h5>
//                     <input
//                     style={{padding:'10px',width:'250px'}}
//                         type="emailId"
//                         name="emailId"
//                         placeholder="emailId"
//                         value={formData.emailId}
//                         onChange={handleChange}
//                     />
//                     <h5>Enter contact Number : </h5>
//                     <input
//                     style={{padding:'10px',width:'250px'}}
//                         type="tel"
//                         name="contactNo"
//                         placeholder="Contact Number"
//                         value={formData.contactNo}
//                         onChange={handleChange}
//                     />
//                     <h5>Password</h5>
//                     <input
//                     style={{padding:'10px',width:'250px'}}
//                         type="password"
//                         name="password"
//                         placeholder="Type your password..."
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     <br />
//                     <br/>
//                     <div style={{display:'flex',justifyContent:'center'}}>
//                     <button type="submit" style={{borderRadius:'50px',padding:'10px',width:'100px',cursor:'pointer',backgroundColor:' transparent'}}>Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//             </div>
//             </div>
           
//         </>
//     );
// };

// export default Signup;
const Signup = () => {
    const navigate = useNavigate();
        const [formData, setFormData] = useState({
            name: "",
            emailId:"",
            companyname:"",
            contactno:"",
            password: ""
            
            
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            // Perform validation here before submitting the form
            if (formData.name.trim() === "") {
                alert("Please enter the name");
                return;
            }
            if (formData.emailId.trim() === "") {
                alert("Please enter email");
                return;
            }
            if (formData.contactno.trim() === "") {
                alert("Please enter contact number");
                return;
            }
            if (!/^\d{10}$/.test(formData.contactno)) {
                alert("Contact number should be 10 digits");
                return;
            }
            if (formData.password.trim().length < 6) {
                alert("Password should be at least 6 characters long");
                return;
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
                alert("Password should contain at least one special character");
                return;
            }
            // Create a new user object
            const newUser = {
               name:formData.name,
               emailId:formData.emailId,
               companyname:formData.companyname,
               contactno: formData.contactno,
               password: formData.password,
               
            };
    
            try {
                // Make a POST request using Axios
                const response = await axios.post("http://localhost:8001/api/v1/users/register", newUser);
                console.log(response.data); // Response from the server
    
                alert("Sign up successful!");

                // Optionally, you can reset the form fields if needed
                setFormData({
                    name: "",
                    emailId:"",
                    companyname:"",
                    contactno:"",
                    password: ""
                    
                }
            );
            navigate("/Signin");

            } catch (error) {
                console.error("Error:", error.message);
                alert("Error signing up. Please try again later.");
            }
        };
    
        return (
            <>
            <Navbar/>
            <div style={{backgroundImage: `url('https://th.bing.com/th/id/R.a0663bba2cc2654aac69407d2e0b5690?rik=14vFlxtgQrOAwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fLight-blue-wallpaper-hd-quality.jpg&ehk=ebOgJiU5%2fkN6aJLjZLIhMYm0N%2fWHUm1mvjQnaXrR6NA%3d&risl=&pid=ImgRaw&r=0.jpg')`,backgroundSize:'cover', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{  margin:'20px', width: "350px", padding: "20px", border: "1px solid #ccc", borderRadius: "15px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)" }}>
                <div >
                <div style={{display:'flex',justifyContent:'center'}}>
                    <h1>Register</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <h5>Enter Name: </h5>
                        <input
                        style={{padding:'10px',width:'290px'}}
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <h5>Email Id</h5>
                        <input
                        style={{padding:'10px',width:'290px'}}
                            type="email"
                            name="emailId"
                            placeholder="Enter emailId"
                            value={formData.emailId}
                            onChange={handleChange}
                        />
                        <h5>Company Name: </h5>
                        <input
                        style={{padding:'10px',width:'290px'}}
                            type="text"
                            name="companyname"
                            placeholder="Enter company Name"
                            value={formData.companyname}
                            onChange={handleChange}
                        />
                        <h5>Contact Number</h5>
                        <input
                        style={{padding:'10px',width:'290px'}}
                            type="tel"
                            name="contactno"
                            placeholder="Enter ContactNo"
                            value={formData.contactno}
                            onChange={handleChange}
                        />
                        <h5>Password</h5>
                        <input
                        style={{padding:'10px',width:'290px'}}
                            type="password"
                            name="password"
                            placeholder="Type your password..."
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <br />
                        <br/>
                        <div style={{display:'flex',justifyContent:'center'}}>
                        <button type="submit" style={{borderRadius:'50px',padding:'10px',width:'100px',cursor:'pointer',backgroundColor:' #181740'}}>Sign Up</button>
                        </div>
                    </form>
                </div>
                </div>
                </div>
                <Footerall/>
            </>
        );
    };
    
    export default Signup;
    