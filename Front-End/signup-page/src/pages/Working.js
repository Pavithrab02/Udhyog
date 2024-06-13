import React from 'react';
import "../App.css";

// Import your images
import job from "../images/job.png";
import create from "../images/create.png";
import cv from "../images/cv.png";


function HowItWorks() {
  return (
    <div className="how-it-works">
      <h5 style={{color:'#606266'}}>Here You Can See</h5>
      <h3 style={{color:'#606266'}}>How It Works</h3>
      <div className="section-container">
        <div className="section">
          <img src={create} alt="Create Account" style={{ width: "100px", height: "auto" }} />
          <h3>Create An Account</h3>
          <p>Sign up now and unlock a world of opportunities! Join our community of job seekers and gain access to personalized job recommendations, career resources, and more. Start your job search with Udhyog today!</p>
        </div>
        <div className="section">
          <img src={job} alt="Search Desired Job" style={{ width: "100px", height: "auto" }} />
          <h3>Search Desired Job</h3>
          <p>Explore thousands of job listings from top companies across various industries. Find your dream job with just a few clicks!</p>
        </div>
        <div className="section">
          <img src={cv} alt="Send Your Resume" style={{ width: "100px", height: "auto" }} />
          <h3>Send Your Resume</h3>
          <p>Submit your resume effortlessly and let employers discover your talents. Start building your career path today!</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
