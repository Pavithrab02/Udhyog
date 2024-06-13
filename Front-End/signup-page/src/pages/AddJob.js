// import React, { useState } from 'react';
// import '../App.css';
// import axios from 'axios';
// import Navbar1 from '../components/Navbar1';
// import { useNavigate } from 'react-router-dom';

// function JobPostingForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     companyId:'',
//     companyname: '',
//     jobrole: '',
//     requiredskills: '',
//     requiredqualification: '',
//     description: '',
//     location: '',
//     salary: '',
//     experience: '',
//     applicationdeadline: '',
//     postDate: '',
//   }
// );
// const [errors, setErrors] = useState({}); // Track form field errors
 
// const handleChange = (event) => {
//   setFormData({
//     ...formData,
//     [event.target.name]: event.target.value,
//   });
//   // Clear error message when user starts typing in the field
  
// };
 
//   const handleDateChange = (event) => {
//     const { name, value } = event.target;
//     // Extract the date part (YYYY-MM-DD) from the input value
//     const dateOnly = value.substr(0, 10);
//     //console.log(dateOnly);
//     setFormData({ ...formData, [name]: dateOnly });
//   };
  

// //   const handleSubmit = (event) => {
// //     event.preventDefault(); // Prevent default form submission behavior
// //     console.log('Job posting data:', formData);
// //     // You can replace this with your logic to submit the data to your server
// //     // or perform other actions (e.g., saving to local storage)
// //   };
// const handleSubmit = async (event) => {




//     event.preventDefault(); // Prevent default form submission behavior

//     // Get email ID from local storage
//     const companyId = localStorage.getItem('emailId');
//     const token = localStorage.getItem('token');

//     try {
//       // Make HTTP POST request to backend endpoint
//       const response = await axios.post('http://localhost:8001/api/jobposting', {
//         ...formData,
//         companyId: companyId}, // Pass email ID along with form data
//         {
//           headers: {
//               Authorization: `Bearer ${token}`
//           }
//       }
//   );
        
     

//       console.log('Response from backend:', response.data);
//       alert("Job Posted successfully!");
//       setFormData({
//           companyId:'',
//           companyname: '',
//           jobrole: '',
//           requiredskills: '',
//           requiredqualification: '',
//           description: '',
//           location: '',
//           salary: '',
//           experience: '',
//           applicationdeadline: '',
//           postDate: '',
       
//     }
// );
// navigate("/employerpage");

//     } catch (error) {
//       console.error('Error submitting job:', error);
//     }
//   };
//   return (
//     <><Navbar1/>
//     <form onSubmit={handleSubmit} className="job-posting-form">
//       <h2>Job Posting Form</h2>
      
//       <div className="form-group">
//         <label htmlFor="companyname">Company Name:</label>
//         <input
//           type="text"
//           id="companyname"
//           name="companyname"
//           value={formData.companyname}
//           onChange={handleChange}
//           required
//         />
//         <span className="error-message">{errors.companyname}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="jobrole">Job Role:</label>
//         <input
//           type="text"
//           id="jobrole"
//           name="jobrole"
//           value={formData.jobrole}
//           onChange={handleChange}
//           required
//         />
//         <span className="error-message">{errors.jobrole}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="requiredskills">Required Skills:</label>
//         <textarea
//           type="text"
//           id="requiredskills"
//           name="requiredskills"
//           value={formData.requiredskills}
//           onChange={handleChange}
//           required
//         />
//         <span className="error-message">{errors.requiredskills}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="requiredqualification">Required qualification:</label>
//         <input
//           type="text"
//           id="requiredqualification"
//           name="requiredqualification"
//           value={formData.requiredqualification}
//           onChange={handleChange}
//           required
//         />
//         <span className="error-message">{errors.requiredqualification}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="description">Job Description:</label>
//         <textarea
//           type="text"
//           id="descriptions"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//         <span className="error-message">{errors.description}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           required
//         />
//         <span className="error-message">{errors.location}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="salary">Salary:</label>
//         <input
//           type="text"
//           id="salary"
//           name="salary"
//           value={formData.salary}
//           onChange={handleChange}
//           required
//         />
//         <span className="error-message">{errors.salary}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="experience">Experience:</label>
//         <input
//           type="text"
//           id="experience"
//           name="experience"
//           value={formData.experience}
//           onChange={handleChange}
//           required
//         />
//         <span className="error-message">{errors.jobrole}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="applicationdeadline">Application deadline:</label>
//         <input
//           type="date"
//           id="applicationdeadline"
//           name="applicationdeadline"
//           value={formData.applicationdeadline}
//           onChange={handleDateChange}
//           required
//         />
//         <span className="error-message">{errors.applicationdeadline}</span> {/* Display error message */}
//       </div>
//       <div className="form-group">
//         <label htmlFor="postDate">Post Date:</label>
//         <input
//           type="date"
//           id="postDate"
//           name="postDate"
//           value={formData.postDate}
//           onChange={handleDateChange}
//           required
//         />
//         <span className="error-message">{errors.postDate}</span> {/* Display error message */}
//       </div>
//       <button type="submit">Submit Job Posting</button>
//     </form>
//     </>
//   );
// }
 
// export default JobPostingForm;


import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import Navbar1 from '../components/Navbar1';
import { useNavigate } from 'react-router-dom';
 
function JobPostingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyId:'',
    companyname: '',
    jobrole: '',
    requiredskills: '',
    requiredqualification: '',
    description: '',
    location: '',
    salary: '',
    experience: '',
    applicationdeadline: '',
    postDate: new Date().toISOString().split('T')[0], // Initialize postDate to today's date
  });
  const [errors, setErrors] = useState({}); // Track form field errors
 
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    // Clear error message when user starts typing in the field
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
 
    // Get email ID from local storage
    const companyId = localStorage.getItem('emailId');
    const token = localStorage.getItem('token');
 
    try {
      // Make HTTP POST request to backend endpoint
      const response = await axios.post('http://localhost:8001/api/jobposting', {
        ...formData,
        companyId: companyId, // Pass email ID along with form data
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
 
      console.log('Response from backend:', response.data);
      alert("Job Posted successfully!");
      setFormData({
        companyId:'',
        companyname: '',
        jobrole: '',
        requiredskills: '',
        requiredqualification: '',
        description: '',
        location: '',
        salary: '',
        experience: '',
        applicationdeadline: '',
        postDate: new Date().toISOString().split('T')[0], // Reset postDate to today's date after submission
      });
      navigate("/employerpage");
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };
 
  return (
    <>
      <Navbar1 />
      <form onSubmit={handleSubmit} className="job-posting-form">
        <h2>Job Posting Form</h2>
        <div className="form-group">
          <label htmlFor="companyname">Company Name:</label>
          <input
            type="text"
            id="companyname"
            name="companyname"
            value={formData.companyname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobrole">Job Role:</label>
          <input
            type="text"
            id="jobrole"
            name="jobrole"
            value={formData.jobrole}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="requiredskills">Required Skills:</label>
          <textarea
            type="text"
            id="requiredskills"
            name="requiredskills"
            value={formData.requiredskills}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="requiredqualification">Required Qualification:</label>
          <input
            type="text"
            id="requiredqualification"
            name="requiredqualification"
            value={formData.requiredqualification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Job Description:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="applicationdeadline">Application Deadline:</label>
          <input
            type="date"
            id="applicationdeadline"
            name="applicationdeadline"
            value={formData.applicationdeadline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postDate">Post Date:</label>
          <input
            type="date"
            id="postDate"
            name="postDate"
            value={formData.postDate}
            readOnly // Set the postDate field as readOnly
            required
          />
        </div>
        <button type="submit">Submit Job Posting</button>
      </form>
    </>
  );
}
 
export default JobPostingForm;
 
 