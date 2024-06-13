import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import img5 from "../images/cand.jpg";
import { useNavigate } from 'react-router-dom';

import Navbar from '../components';
import Footerall from './Footerall';


function CardContainer() {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick1 = () => {
    // Navigate to the desired page
    navigate('/Signup');
  };
  const handleRegisterClick2 = () => {
    // Navigate to the desired page
    navigate('/candsignup');
  };

  return (
    <>
    <Navbar/>
    <div className="mt-3 d-flex justify-content-around" style={{  backgroundImage: `url('https://th.bing.com/th/id/OIP.GbMboU-krQvdIrfKgWpzXgHaFj?rs=1&pid=ImgDetMain.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '70px'}}>
      <Card style={{ width: '18rem', marginRight: '-105px' }}>
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title>Candidate Registration</Card.Title>
          <Card.Text>
          Get registered today to access exclusive job opportunities and personalized job recommendations
          
          </Card.Text>
          <Button variant="primary" onClick={handleRegisterClick2}style={{ backgroundColor: 'rgb(12,6,39)', borderColor: 'rgb(12,6,39)' }}>Register</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', marginLeft: '-105px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTI4v0YiW5X7XkmvEVKPzkWEQgHHiNfay9Q&s.jpg" />
        <Card.Body>
          <Card.Title>Recruiter Registration</Card.Title>
          <Card.Text>
          Get registered to uncover the brightest minds and top talent for your team
          
          </Card.Text>
          <Button variant="primary" onClick={handleRegisterClick1}style={{ backgroundColor: 'rgb(12,6,39)', borderColor: 'rgb(12,6,39)' }}>Register</Button>
        </Card.Body>
      </Card>

      
    </div>
    <Footerall/>
    </>
  );
}

export default CardContainer;
