// import React, { useState } from "react";
// import axios from "axios";

// const Signin = () => {
//     const [formData, setFormData] = useState({
//         emailId: "",
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
//         if (formData.email.trim() === "") {
//             alert("Please enter email");
//             return;
//         }
//         if (formData.password.trim() === "") {
//             alert("Please enter password");
//             return;
//         }

//         try {
//             // Make a GET request to retrieve user data from db.json
//             const response = await axios.get("http://localhost:5000/users");
//             const users = response.data;

//             // Check if the entered email and password match any user data
//             const user = users.find((user) => user.email === formData.email && user.password === formData.password);
//             if (user) {
//                 // User found, allow signin
//                 alert("Signin successful!");
//                 // Optionally, you can redirect the user to another page
//             } else {
//                 // User not found, show error message
//                 alert("Invalid email or password. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error:", error.message);
//             alert("Error signing in. Please try again later.");
//         }
//     };

//     return (
//         <div style={{backgroundImage: `url('https://th.bing.com/th/id/R.a0663bba2cc2654aac69407d2e0b5690?rik=14vFlxtgQrOAwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fLight-blue-wallpaper-hd-quality.jpg&ehk=ebOgJiU5%2fkN6aJLjZLIhMYm0N%2fWHUm1mvjQnaXrR6NA%3d&risl=&pid=ImgRaw&r=0.jpg')`,backgroundSize:'cover', display: "flex", justifyContent: "center", alignItems: "center" }}>
//             <div style={{  margin:'100px', width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)" }}>
//         <div>
//             <div style={{display:'flex',justifyContent:'center'}}>
//             <h1 >Sign In</h1><br/>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <h5>Enter Email id : </h5>
//                 <input
//                     style={{padding:'10px',width:'250px'}}
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 <h5>Password</h5>
//                 <input
//                 style={{padding:'10px',width:'250px'}}
//                     type="password"
//                     name="password"
//                     placeholder="Type your password..."
//                     value={formData.password}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <br/>
//                 <div style={{display:'flex',justifyContent:'center'}}>
//                 <button style={{borderRadius:'50px',padding:'10px',width:'100px',cursor:'pointer',backgroundColor:' transparent'}} type="submit">Sign In</button>
//                 </div>
//             </form>
//         </div>
//         </div>
//         </div>
//     );
// };

// export default Signin;
// import React, { useState } from "react";
// import axios from "axios";

// const Signin = () => {
//     const [formData, setFormData] = useState({
//         emailId: "",
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
//         if (formData.emailId.trim() === "") {
//             alert("Please enter email");
//             return;
//         }
//         if (formData.password.trim() === "") {
//             alert("Please enter password");
//             return;
//         }

//         try {
//             // Make a POST request to verify credentials and retrieve token
//             const response = await axios.post("http://localhost:9001/api/v1/users/login", formData);
//             const token = response.data;

//             // Check if token is received
//             if (token) {
//                 // Store the email in local storage for further use
//                 localStorage.setItem('emailId', formData.emailId);
                
//                 // Optionally, you can redirect the user to another page
//                 alert("Signin successful!");
//                 setFormData({
                  
//                     emailId:"",
//                     password: ""
                    
//                 }
//             );
//                 // Redirect to dashboard or any other page
//             } else {
//                 // Token not received, show error message
//                 alert("Invalid email or password. Please try again.");
//             }
//         } catch (error) {
//             console.error("Error:", error.message);
//             // setError('Invalid credentials. Please try again.');
//             alert("Error signing in. Please try again later.");
//         }
//     };

//     return (
//         <div style={{backgroundImage: `url('https://th.bing.com/th/id/R.a0663bba2cc2654aac69407d2e0b5690?rik=14vFlxtgQrOAwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fLight-blue-wallpaper-hd-quality.jpg&ehk=ebOgJiU5%2fkN6aJLjZLIhMYm0N%2fWHUm1mvjQnaXrR6NA%3d&risl=&pid=ImgRaw&r=0.jpg')`,backgroundSize:'cover', display: "flex", justifyContent: "center", alignItems: "center" }}>
//             <div style={{  margin:'100px', width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)" }}>
//                 <div>
//                     <div style={{display:'flex',justifyContent:'center'}}>
//                         <h1>Sign In</h1><br/>
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <h5>Enter Email id : </h5>
//                         <input
//                             style={{padding:'10px',width:'250px'}}
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                         <h5>Password</h5>
//                         <input
//                             style={{padding:'10px',width:'250px'}}
//                             type="password"
//                             name="password"
//                             placeholder="Type your password..."
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <br />
//                         <br/>
//                         <div style={{display:'flex',justifyContent:'center'}}>
//                             <button style={{borderRadius:'50px',padding:'10px',width:'100px',cursor:'pointer',backgroundColor:' transparent'}} type="submit">Sign In</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components';
import Footerall from './Footerall';



function Loginn() {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/api/v1/users/login', {
        emailId,
        password
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('emailId', emailId);

      
      navigate('/employerpage');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <><Navbar/>
    <div className="login-container">
      <div className="login-form">
      {/* <div style={{display:'flex',justifyContent:'center'}}>
                         <h1>Sign In</h1><br/>
                    </div> */}
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailId">Email:</label>
            <input
            style={{padding:'10px',width:'250px'}}
              type="text"
              id="emailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
            style={{padding:'10px',width:'250px'}}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{display:'flex',justifyContent:'center'}}>
            <button style={{borderRadius:'50px',padding:'10px',width:'100px',cursor:'pointer',backgroundColor:' blue'}} type="submit">Sign In</button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
    <Footerall/>
    </>
  );
}

export default Loginn;
