import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components";
import Footerall from "./Footerall";
const CandSignup = () => {
    const navigate = useNavigate();
        const [formData, setFormData] = useState({
            firstname: "",
            lasttname: "",
            emailId:"",
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
            if (formData.firstname.trim() === "") {
                alert("Please enter the name");
                return;
            }
            if (formData.emailId.trim() === "") {
                alert("Please enter email");
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
               firstname:formData.firstname,
               lastname:formData.lastname,
               emailId:formData.emailId,
               password: formData.password,
               
            };
    
            try {
                // Make a POST request using Axios
                const response = await axios.post("http://localhost:8001/udhyog/users/candregister", newUser);
                console.log(response.data); // Response from the server
    
                alert("Sign up successful!");

                // Optionally, you can reset the form fields if needed
                setFormData({
                    firstname: "",
                    lastname: "",
                    emailId:"",
                    password: ""
                    
                }
            );
            navigate("/candlogin");

            } catch (error) {
                console.error("Error:", error.message);
                alert("Error signing up. Please try again later.");
            }
        };
    
        return (
            <>
             <Navbar></Navbar>
            <div style={{backgroundImage: `url('https://th.bing.com/th/id/R.a0663bba2cc2654aac69407d2e0b5690?rik=14vFlxtgQrOAwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fLight-blue-wallpaper-hd-quality.jpg&ehk=ebOgJiU5%2fkN6aJLjZLIhMYm0N%2fWHUm1mvjQnaXrR6NA%3d&risl=&pid=ImgRaw&r=0.jpg')`,backgroundSize:'cover', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{  margin:'20px', width: "350px", padding: "20px", border: "1px solid #ccc", borderRadius: "15px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)" }}>
                <div >
                <div style={{display:'flex',justifyContent:'center'}}>
                    <h1>Register</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <h5>First Name: </h5>
                        <input
                        style={{padding:'10px',width:'290px'}}
                            type="text"
                            name="firstname"
                            placeholder="Enter Firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                         <h5>Last Name: </h5>
                        <input
                        style={{padding:'10px',width:'290px'}}
                            type="text"
                            name="lastname"
                            placeholder="Enter Lastname"
                            value={formData.lastname}
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
    
    export default CandSignup;
    