// import React, { useState } from 'react';
// import '../App.css';
 
// function JobApplicationForm() {
//   const [file, setFile] = useState(null);
//   const [fullName, setFullName] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [skills, setSkills] = useState('');
//   const [experience, setExperience] = useState('');
//   const [candidateId, setCandidateId] = useState('');
//   const [jobId, setJobId] = useState('');
//   const [companyId, setCompanyId] = useState('');
//   const [status, setStatus] = useState('');
 
//   const handleSubmit = async (event) => {
//     event.preventDefault();
   
//     const formData = new FormData();
//     formData.append("fullName", fullName);
//     formData.append("contactNo", contactNo);
//     formData.append("skills", skills);
//     formData.append("experience", experience);
//     formData.append("candidateId", candidateId);
//     formData.append("jobId", jobId);
//     formData.append("status", status);
//     formData.append("companyId", companyId);
//     formData.append("file", file);
    
//     fetch('http://localhost:9000/udhyog/applications', {
//       method: 'POST',
//       body: formData,
//       // headers: {
//       //   'Content-Type': 'multipart/form-data'},
//     })
//     .then(res => {
//       if (res.ok) {
//         console.log(res.data);
//         alert("File uploaded successfully.");
//       }else {
//         // Handle error response
//         res.text().then(text => {
//             console.error("Error:", text);
//             alert("File upload failed. See console for details.");
//         })
       
//     }
// })
// .catch(error => {
//     // Handle network errors or other exceptions
//     console.error("Error:", error);
//     alert("An error occurred during upload. See console for details.");
// });
 
//   };
 
//   return (
//     <form onSubmit={handleSubmit} className="job-posting-form">
//       <h2>Job Application Form</h2>
//       <div className="form-group">
//         <label htmlFor="fullName">Full Name:</label>
//         <input
//           type="text"
//           id="fullName"
//           name="fullName"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="contactNo">Contact Number:</label>
//         <input
//           type="text"
//           id="contactNo"
//           name="contactNo"
//           value={contactNo}
//           onChange={(e) => setContactNo(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="skills">Skills:</label>
//         <textarea
//           id="skills"
//           name="skills"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="experience">Experience:</label>
//         <input
//           type="text"
//           id="experience"
//           name="experience"
//           value={experience}
//           onChange={(e) => setExperience(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="candidateId">Candidate ID:</label>
//         <input
//           type="text"
//           id="candidateId"
//           name="candidateId"
//           value={candidateId}
//           onChange={(e) => setCandidateId(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="jobId">Job ID:</label>
//         <input
//           type="text"
//           id="jobId"
//           name="jobId"
//           value={jobId}
//           onChange={(e) => setJobId(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="companyId">Company ID:</label>
//         <input
//           type="text"
//           id="companyId"
//           name="companyId"
//           value={companyId}
//           onChange={(e) => setCompanyId(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="resume">Upload Resume (PDF only):</label>
//         <input
//           type="file"
//           id="resume"
//           name="resume"
//           accept=".pdf"
//           onChange={(e) => setFile(e.target.files[0])}
//           required
//         />
//       </div>
//       <button type="submit">Submit Job Application</button>
//     </form>
//   );
// }
 
// export default JobApplicationForm;



// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {Link} from 'react-router-dom';

// function JobApplicationForm() {
//   const { jobId } = useParams();
//   const navigate = useNavigate();
//   const [companyData, setCompanyData] = useState(null);
//   const [file, setFile] = useState(null);
//   const [fullName, setFullName] = useState('');
//   const [contactNo, setContactNo] = useState('');
//   const [skills, setSkills] = useState('');
//   const [experience, setExperience] = useState('');
//   const [candidateId, setCandidateId] = useState('');
//   const [companyId, setCompanyId] = useState('');
//   const [status, setStatus] = useState('applied');

//   // Fetch company data using jobId
//   useEffect(() => {
//     fetchCompanyData();
//   }, [jobId]);

//   const fetchCompanyData = async () => {
//     try {
//       const response = await fetch(`http://localhost:9002/api/job/${jobId}`);
//       const jsonData = await response.json();
//       setCompanyId(jsonData.companyId);
//       const candidateId=localStorage.getItem('emailId');
//     } catch (error) {
//       console.error('Error fetching company data:', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
   
//     const formData = new FormData();
//     formData.append("fullName", fullName);
//     formData.append("contactNo", contactNo);
//     formData.append("skills", skills);
//     formData.append("experience", experience);
//     formData.append("candidateId", candidateId);
//     formData.append("jobId", jobId);
//     formData.append("status", status);
//     formData.append("companyId", companyId);
//     formData.append("file", file);
    
//     fetch('http://localhost:9000/udhyog/applications', {
//       method: 'POST',
//       body: formData,
//     })
//     .then(res => {
//       if (res.ok) {
//         console.log(res.data);
//         alert("File uploaded successfully.");
//         navigate('/success'); // Redirect to homepage after successful submission
//       } else {
//         res.text().then(text => {
//           console.error("Error:", text);
//           alert("File upload failed. See console for details.");
//         });
//       }
//     })
//     .catch(error => {
//       console.error("Error:", error);
//       alert("An error occurred during upload. See console for details.");
//     });
//   };
 
//   return (
//     <form onSubmit={handleSubmit} className="job-posting-form">
//       <h2>Job Application Form</h2>
//       <div className="form-group">
//         <label htmlFor="fullName">Full Name:</label>
//         <input
//           type="text"
//           id="fullName"
//           name="fullName"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="contactNo">Contact Number:</label>
//         <input
//           type="text"
//           id="contactNo"
//           name="contactNo"
//           value={contactNo}
//           onChange={(e) => setContactNo(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="skills">Skills:</label>
//         <textarea
//           id="skills"
//           name="skills"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="experience">Experience:</label>
//         <input
//           type="text"
//           id="experience"
//           name="experience"
//           value={experience}
//           onChange={(e) => setExperience(e.target.value)}
//           required
//         />
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="resume">Upload Resume (PDF only):</label>
//         <input
//           type="file"
//           id="resume"
//           name="resume"
//           accept=".pdf"
//           onChange={(e) => setFile(e.target.files[0])}
//           required
//         />
//       </div>
//       <button type="submit">Submit Job Application</button>
//     </form>
//   );
// }

// export default JobApplicationForm;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footerall from './Footerall';
import Navbar2 from '../components/Navbar2';

function JobApplicationForm() {
  const token=localStorage.getItem('token');
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [candidateId, setCandidateId] = useState(localStorage.getItem('emailId'));
  const [companyId, setCompanyId] = useState('');
  const [status, setStatus] = useState('applied');

  useEffect(() => {
    fetchCompanyData();
  }, [jobId]);

  const fetchCompanyData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8001/api/job/${jobId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
      const jsonData = await response.json();
      setCompanyId(jsonData.companyId); // Assign companyId fetched from backend
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("contactNo", contactNo);
    formData.append("skills", skills);
    formData.append("experience", experience);
    formData.append("candidateId", candidateId);
    formData.append("jobId", jobId);
    formData.append("status", status);
    formData.append("companyId", companyId);
    formData.append("file", file);
    
    fetch('http://localhost:8001/udhyog/applications', {
      method: 'POST',
      body: formData,headers: {
        Authorization: `Bearer ${token}`
    }
    })
    .then(res => {
      if (res.ok) {
        console.log(res.data);
        alert("File uploaded successfully.");
        navigate('/candpage'); // Redirect to homepage after successful submission
      } else {
        res.text().then(text => {
          console.error("Error:", text);
          alert("File upload failed. See console for details.");
        });
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred during upload. See console for details.");
    });
  };
 
  return (
    <>
      <Navbar2/>
    <form onSubmit={handleSubmit} className="job-application-form" style={{width:'60%', marginLeft:'20%', marginTop:'2%', border:'5px', backgroundColor:'#d0d2d6', borderRadius:'8px'}}>
      <h2 style={{marginLeft:'2%'}}>Job Application Form</h2>
      <div className="form-group" style={{margin:'10px 10px'}}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="form-group" style={{margin:'10px 10px'}}>
        <label htmlFor="contactNo">Contact Number:</label>
        <input
          type="text"
          id="contactNo"
          name="contactNo"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          required
        />
      </div>
      <div className="form-group" style={{margin:'10px 10px'}}>
        <label htmlFor="skills">Skills:</label>
        <textarea
          id="skills"
          name="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
      </div>
      <div className="form-group" style={{margin:'10px 10px'}}>
        <label htmlFor="experience">Experience:</label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
      </div>
      <div className="form-group" style={{margin:'10px'}}>
        <label htmlFor="resume">Upload Resume (PDF only):</label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </div>
      <button type="submit" style={{backgroundColor:'#132a4d', borderRadius:'8px', marginLeft:'10px'}}>Submit Job Application</button>
    </form>
    </>
  );
}

export default JobApplicationForm;


