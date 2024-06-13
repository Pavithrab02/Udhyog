// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9001/api/v1/users/login', {
//         username,
//         password
//       });
//       const { token } = response.data;
//       // Store the token in local storage or session storage
//       localStorage.setItem('token', token);
//       // Redirect or update the UI accordingly
//     } catch (error) {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// // export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';

// function Login() {
//   const [emailId, setEmailId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9001/api/v1/users/login', {
//         emailId,
//         password
//       });
//       const { token } = response.data;
//       localStorage.setItem('token', token);
      
//       localStorage.setItem('emailId', emailId); // Store username in local storage
//       // Redirect to the home page after successful login
//       navigate('/home'); // Navigate to the home page route
//     } catch (error) {
//       setError('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div style={{backgroundImage: `url('https://th.bing.com/th/id/R.a0663bba2cc2654aac69407d2e0b5690?rik=14vFlxtgQrOAwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fLight-blue-wallpaper-hd-quality.jpg&ehk=ebOgJiU5%2fkN6aJLjZLIhMYm0N%2fWHUm1mvjQnaXrR6NA%3d&risl=&pid=ImgRaw&r=0.jpg')`,backgroundSize:'cover', display: "flex", justifyContent: "center", alignItems: "center" }}>
//             <div style={{  margin:'100px', width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)" }}>
//         <div>
//             <div style={{display:'flex',justifyContent:'center'}}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="emailId">Email:</label>
//           <input
//           style={{padding:'10px',width:'250px'}}
//             type="text"
//             id="emailId"
//             value={emailId}
            
//             onChange={(e) => setEmailId(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//           style={{padding:'10px',width:'250px'}}
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//                 <br/>
//                 <div style={{display:'flex',justifyContent:'center'}}>
//                 <button style={{borderRadius:'50px',padding:'10px',width:'100px',cursor:'pointer',backgroundColor:' transparent'}} type="submit">Sign In</button>
//                 </div>
//         </div>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { Navbar } from 'react-bootstrap';

function Login() {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/api/v1/users/login', {
        emailId,
        password
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      
      localStorage.setItem('emailId', emailId); // Store username in local storage
      // Redirect to the home page after successful login
      navigate('/home'); // Navigate to the home page route
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <><Navbar/>
    <div style={{backgroundImage: `url('https://th.bing.com/th/id/R.a0663bba2cc2654aac69407d2e0b5690?rik=14vFlxtgQrOAwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fLight-blue-wallpaper-hd-quality.jpg&ehk=ebOgJiU5%2fkN6aJLjZLIhMYm0N%2fWHUm1mvjQnaXrR6NA%3d&risl=&pid=ImgRaw&r=0.jpg')`,backgroundSize:'cover', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{  margin:'100px', width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)" }}>
        <div>
            <div style={{display:'flex',justifyContent:'center'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailId">Email:</label>
          <input
          style={{padding:'10px',width:'250px'}}
            type="text"
            id="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
          style={{padding:'10px',width:'250px'}}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
                <br/>
                <div style={{display:'flex',justifyContent:'center'}}>
                <button style={{borderRadius:'50px',padding:'10px',width:'100px',cursor:'pointer',backgroundColor:' #181740'}} type="submit">Sign In</button>
                </div>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        
      </form>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Login;
