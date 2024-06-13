import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";// Import your custom CSS file
import { Navigate, navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footerall from './Footerall';
import Footer from './footer';
import Navbar2 from '../components/Navbar2';

const CandidateDetails = () => {
  const navigate = useNavigate();
  const [candidateData, setCandidateData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    contact: '',
    address: '',
    skills: '',
    others: '',
    certifications: '',
    email: '',
    image: null
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch candidate data when component mounts
    fetchCandidateData();
  }, []);

  const fetchCandidateData = async () => {
    const email = localStorage.getItem('emailId');
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(
        `http://localhost:8001/candidates/candidate/${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const fetchedData = response.data;
      if (Object.keys(fetchedData).length === 0 && fetchedData.constructor === Object) {
        // If fetched data is empty, set a message indicating that the candidate was not found
        setMessage('Candidate not found');
      } else {
        // If fetched data is not empty, set the candidate data state
        setCandidateData(fetchedData);
      }
    } catch (error) {
      console.error('Error fetching candidate data:', error);
      setMessage('Update Profile to see your data');
    }
  };
  
  const handleBackButtonClick = () => {
    // Navigate to the desired route when back button is clicked
    navigate('/candpage');
    // Navigate('/other-page');
  };

  return (
    <>
    <Navbar2/>
    <div className="container my-5 shadow p-6 rounded" style={{backgroundColor:'#b7b6d1', width:'60%',boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.5)'}}>
      <h2>Profile</h2>
      <div className="profile-image-container">
      <label htmlFor="image"></label>
    {candidateData.image && 
      <img 
        src={`data:image/jpeg;base64,${candidateData.image}`} 
        alt="Profile" 
        className="profile-image rounded-circle" // Added "rounded-circle" class
      />
    }
    </div>
      <form>
      {message && <p className="error-message">{message}</p>}
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" className="form-control" id="firstname" value={candidateData.firstname} readOnly />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="middlename">Middle Name:</label>
              <input type="text" className="form-control" id="middlename" value={candidateData.middlename} readOnly />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" className="form-control" id="lastname" value={candidateData.lastname} readOnly />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <input type="text" className="form-control" id="gender" value={candidateData.gender} readOnly />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="contact">Contact:</label>
              <input type="text" className="form-control" id="contact" value={candidateData.contact} readOnly />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" className="form-control" id="address" value={candidateData.address} readOnly />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="skills">Skills:</label>
              <input type="text" className="form-control" id="skills" value={candidateData.skills} readOnly />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="certifications">Certifications:</label>
              <input type="text" className="form-control" id="certifications" value={candidateData.certifications} readOnly />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="others">Others:</label>
              <input type="text" className="form-control" id="others" value={candidateData.others} readOnly />
            </div>
          </div>
         
        </div>
      </form>
      {/* Display error message if candidate not found */}
      {/* {message && <p className="error-message">{message}</p>} */}
      <button className="btn btn-primary" onClick={handleBackButtonClick} style={{backgroundColor:'#373657'}}>Back</button>

    </div>
<Footerall/>
    </>
  );
};

export default CandidateDetails;

