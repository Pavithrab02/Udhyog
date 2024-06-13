// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';
// import Avatar from '@material-ui/core/Avatar';
// import Modal from '@material-ui/core/Modal';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   avatar: {
//     width: theme.spacing(15), // Adjust as needed
//     height: theme.spacing(15), // Adjust as needed
//     marginBottom: theme.spacing(2),
//   },
//   modal: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//   },
// }));

// function CandidateUpdateForm1() {
//   const [imageSrc, setImageSrc] = useState(null);
//   const [formData, setFormData] = useState({
//     firstname: '',
//     middlename: '',
//     lastname: '',
//     email: '',
//     contact: '',
//     gender: '',
//     address: '',
//     skills: '',
//     image: null,
//     certifications: '',
//     others: '',
//   });
//   const [successModalOpen, setSuccessModalOpen] = useState(false);
//   const classes = useStyles();

//   const handleImageChange = event => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setImageSrc(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//       setFormData({
//         ...formData,
//         image: file,
//       });
//     }
//   };

//   const handleChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('firstname', formData.firstname);
//       formDataToSend.append('middlename', formData.middlename);
//       formDataToSend.append('lastname', formData.lastname);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('contact', formData.contact);
//       formDataToSend.append('gender', formData.gender);
//       formDataToSend.append('address', formData.address);
//       formDataToSend.append('skills', formData.skills);
//       formDataToSend.append('certifications', formData.certifications);
//       formDataToSend.append('others', formData.others);
//       formDataToSend.append('image', formData.image);

//       const response = await axios.post(
//         'http://localhost:9002/candidates/candidates/update',
//         formDataToSend
//       );
//       console.log('Response from backend:', response.data);
//       setSuccessModalOpen(true); // Open success modal
//       // Add any success handling logic here
//     } catch (error) {
//       console.error('Error updating candidate profile:', error);
//       // Add error handling logic here
//     }
//   };

//   const handleCloseModal = () => {
//     setSuccessModalOpen(false);
//   };

//   return (
//     <div className="container">
//       <h2>Candidate Profile Update Form</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <Avatar
//           alt="Candidate Photo"
//           src={imageSrc}
//           className={classes.avatar}
//         />
//         <input
//           accept="image/*"
//           id="image"
//           type="file"
//           name="image"
//           onChange={handleImageChange}
//           required
//         />
//         <div className="form-group">
//           <label htmlFor="firstname">First Name *</label>
//           <input
//             type="text"
//             id="firstname"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="middlename">Middle Name *</label>
//           <input
//             type="text"
//             id="middlename"
//             name="middlename"
//             value={formData.middlename}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastname">Last Name *</label>
//           <input
//             type="text"
//             id="lastname"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email *</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="contact">Contact *</label>
//           <input
//             type="text"
//             id="contact"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender *</label>
//           <input
//             type="text"
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address *</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="skills">Skills *</label>
//           <input
//             type="text"
//             id="skills"
//             name="skills"
//             value={formData.skills}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="certifications">Certifications *</label>
//           <input
//             type="text"
//             id="certifications"
//             name="certifications"
//             value={formData.certifications}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="others">Others *</label>
//           <input
//             type="text"
//             id="others"
//             name="others"
//             value={formData.others}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn">
//           Update Profile
//         </button>
//       </form>
//       <Modal
//         open={successModalOpen}
//         onClose={handleCloseModal}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         <div className={classes.modal}>
//           <h2 id="simple-modal-title">Profile Updated Successfully</h2>
//           <button onClick={handleCloseModal} className="btn">
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default CandidateUpdateForm1;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../App.css";
// import Avatar from '@material-ui/core/Avatar';
// import Modal from '@material-ui/core/Modal';
// import { makeStyles } from '@material-ui/core/styles';
// import Navbar2 from '../components/Navbar2';
// import Footerall from './Footerall';
// import { useNavigate, Navigate } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//   avatar: {
//     width: theme.spacing(15), // Adjust as needed
//     height: theme.spacing(15), // Adjust as needed
//     marginBottom: theme.spacing(2),
//   },
//   modal: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//   },
// }));

// function CandidateUpdateForm1() {
//   const [imageSrc, setImageSrc] = useState(null);
//   const token = localStorage.getItem('token');
//   const [formData, setFormData] = useState({
//     firstname: '',
//     middlename: '',
//     lastname: '',
//     email: '',
//     contact: '',
//     gender: '',
//     address: '',
//     skills: '',
//     image: null,
//     certifications: '',
//     others: '',
//   });
//   const [successModalOpen, setSuccessModalOpen] = useState(false);
//   const classes = useStyles();

//   useEffect(() => {
//     // Retrieve email from local storage
//     const email = localStorage.getItem('emailId');
//     if (email) {
//       setFormData(prevState => ({
//         ...prevState,
//         email: email,
//       }));
//     }
//   }, []); // Run this effect only once when the component mounts

//   const handleImageChange = event => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setImageSrc(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//       setFormData({
//         ...formData,
//         image: file,
//       });
//     }
//   };

//   const handleChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();

//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });

//       const response = await axios.post(
//         'http://localhost:8001/candidates/candidates/update',
//         formDataToSend,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );
//       console.log('Response from backend:', response.data);
//       setSuccessModalOpen(true); // Open success modal
//       // Add any success handling logic here
//       Navigate("/candpage");
      
//     } catch (error) {
//       console.error('Error updating candidate profile:', error);
//       alert("Ensure the image is less than 50kb, try again if image is not uploaded");
//       // Add error handling logic here
//     }
//   };

//   const handleCloseModal = () => {
//     setSuccessModalOpen(false);
//   };

//   return (
//     <>
//     <Navbar2/>
//     <div className="container" style={{backgroundColor:'#b7b6d1', width:'80%', marginTop:'10px', marginBottom:'10px'}}>
//       <h2 style={{color:'#2e3a4d'}}>Update Profile</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <Avatar
//           alt="Candidate Photo"
//           src={imageSrc}
//           className={classes.avatar}
//         />
//        <input
//   accept="image/*"
//   id="image"
//   type="file"
//   name="image"
//   onChange={handleImageChange}
//   required
//   style={{
//     display: 'none', // Hide the default file input
//   }}
// />

// <label htmlFor="image" style={{
//   backgroundColor: '#373657', // Background color
//   color: '#fff', // Text color
//   padding: '10px 20px', // Padding
//   borderRadius: '5px', // Rounded corners
//   cursor: 'pointer', // Change cursor to pointer on hover
//   transition: 'background-color 0.3s ease', // Smooth transition for background color change
// }}>
//   Choose an Image
// </label>

//         <div className="form-group">
//           <label htmlFor="firstname">First Name *</label>
//           <input
//             type="text"
//             id="firstname"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="middlename">Middle Name *</label>
//           <input
//             type="text"
//             id="middlename"
//             name="middlename"
//             value={formData.middlename}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastname">Last Name *</label>
//           <input
//             type="text"
//             id="lastname"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//             required
//           />
//         </div>
       
       
//         <div className="form-group">
//           <label htmlFor="contact">Contact *</label>
//           <input
//             type="text"
//             id="contact"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender">Gender *</label>
//           <input
//             type="text"
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address *</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="skills">Skills *</label>
//           <input
//             type="text"
//             id="skills"
//             name="skills"
//             value={formData.skills}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="certifications">Certifications *</label>
//           <input
//             type="text"
//             id="certifications"
//             name="certifications"
//             value={formData.certifications}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="others">Others *</label>
//           <input
//             type="text"
//             id="others"
//             name="others"
//             value={formData.others}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn" style={{backgroundColor:'#373657', color:'#fff'}}>
//           Update Profile
//         </button>
//       </form>
//       <Modal
//         open={successModalOpen}
//         onClose={handleCloseModal}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         <div className={classes.modal}>
//           <h2 id="simple-modal-title">Profile Updated Successfully</h2>
//           <button onClick={handleCloseModal} className="btn" style={{backgroundColor:'#373657', color:'#fff'}}>
//             Close
//           </button>
//         </div>
//       </Modal>
//     </div>
//     <Footerall/>
//     </>
//   );
// }

// export default CandidateUpdateForm1;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Navbar2 from '../components/Navbar2';
import Footerall from './Footerall';
import { useNavigate } from 'react-router-dom';
 
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginBottom: theme.spacing(2),
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));
 
function CandidateUpdateForm1() {
  const [imageSrc, setImageSrc] = useState(null);
  const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    address: '',
    skills: '',
    image: null,
    certifications: '',
    others: '',
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
 
  useEffect(() => {
    const email = localStorage.getItem('emailId');
    if (email) {
      setFormData(prevState => ({
        ...prevState,
        email: email,
      }));
    }
  }, []);
 
  const handleImageChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
 
    reader.onload = () => {
      setImageSrc(reader.result);
    };
 
    if (file) {
      reader.readAsDataURL(file);
      setFormData({
        ...formData,
        image: file,
      });
    }
  };
 
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
 
  const handleSubmit = async event => {
    event.preventDefault();
 
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
 
      const response = await axios.post(
        'http://localhost:8001/candidates/candidates/update',
        formDataToSend,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
      console.log('Response from backend:', response.data);
      setSuccessModalOpen(true);
     
    } catch (error) {
      console.error('Error updating candidate profile:', error);
      alert("Ensure the image is less than 50kb, try again if image is not uploaded");
    }
  };
 
  const handleCloseModal = () => {
    setSuccessModalOpen(false);
    navigate("/candpage");
  };
 
  return (
    <>
    <Navbar2/>
    <div className="container" style={{backgroundColor:'#b7b6d1', width:'80%', marginTop:'10px', marginBottom:'10px'}}>
      <h2 style={{color:'#2e3a4d'}}>Update Profile</h2>
      <form onSubmit={handleSubmit} className="form">
        <Avatar
          alt="Candidate Photo"
          src={imageSrc}
          className={classes.avatar}
        />
       <input
  accept="image/*"
  id="image"
  type="file"
  name="image"
  onChange={handleImageChange}
  required
  style={{
    display: 'none',
  }}
/>
 
<label htmlFor="image" style={{
  backgroundColor: '#373657',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
}}>
  Choose an Image
</label>
 
        <div className="form-group">
          <label htmlFor="firstname">First Name *</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="middlename">Middle Name *</label>
          <input
            type="text"
            id="middlename"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name *</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
       
       
        <div className="form-group">
          <label htmlFor="contact">Contact *</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender *</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills *</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="certifications">Certifications *</label>
          <input
            type="text"
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="others">Others *</label>
          <input
            type="text"
            id="others"
            name="others"
            value={formData.others}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn" style={{backgroundColor:'#373657', color:'#fff'}}>
          Update Profile
        </button>
      </form>
      <Modal
        open={successModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <h2 id="simple-modal-title">Profile Updated Successfully</h2>
          <button onClick={handleCloseModal} className="btn" style={{backgroundColor:'#373657', color:'#fff'}}>
            Close
          </button>
        </div>
      </Modal>
    </div>
    <Footerall/>
    </>
  );
}
 
export default CandidateUpdateForm1;
 
