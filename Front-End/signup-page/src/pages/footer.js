import React from 'react';
import '../App.css'; // Import your footer styles
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTopButton from './Scrollup';


function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 style={{textAlign:'center'}}>About Us</h4>
            <p>We're a community-driven platform connecting talent with opportunities. <br></br> With intuitive tools and a commitment to diversity, we're here to help you find your dream career or top-tier talent. <br></br>Join us in shaping the future of work. Discover, connect, and succeed with Udhyog.</p>
          </div>
          <div className="col-md-4">
            <h4 style={{textAlign:'center'}}>Contact Us</h4>
            <p style={{textAlign:'center'}}>Email: info@udyog.com<br />Phone: +1234567890</p>
          </div>
          <div className="col-md-4" style={{textAlign:'center'}}>
            <h4 >Follow Us</h4>
            <p>Stay connected with us on social media:</p>
            <div className="social-icons" style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="#"><i className="bi bi-twitter icon"></i></a>
              <a href="#"><i className="bi bi-facebook icon"></i></a>
              <a href="#"><i className="bi bi-instagram icon"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">&copy; {new Date().getFullYear()} Udyog. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton/>
    </footer>
  );
}

export default Footer;
