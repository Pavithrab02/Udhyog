import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import img5 from "../images/cand.jpg";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components';
import Footerall from './Footerall';


function CardContainer1() {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick1 = () => {
    // Navigate to the desired page
    navigate('/Signin');
  };
  const handleRegisterClick2 = () => {
    // Navigate to the desired page
    navigate('/candlogin');
  };

  return (
    <><Navbar/>
    <div className="mt-3 d-flex justify-content-around" style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.GbMboU-krQvdIrfKgWpzXgHaFj?rs=1&pid=ImgDetMain.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '70px' }}>
      <Card style={{ width: '18rem', marginRight: '-105px' }}>
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title>Candidate Login</Card.Title>
          <Card.Text>
          Login to search for jobs, apply to positions that match your skills and track your application
          </Card.Text>
          <Button variant="primary" onClick={handleRegisterClick2}style={{ backgroundColor:'rgb(12,6,39)', borderColor: 'rgb(12,6,39)' }}>Login</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', marginLeft: '-105px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTI4v0YiW5X7XkmvEVKPzkWEQgHHiNfay9Q&s.jpg" />
        <Card.Body>
          <Card.Title>Recruiter Login</Card.Title>
          <Card.Text>
          Login to post new job opportunities and manage your hiring process efficiently
          
          </Card.Text>
          <Button variant="primary" onClick={handleRegisterClick1}style={{ backgroundColor:'rgb(12,6,39)', borderColor: 'rgb(12,6,39)' }}>Login</Button>
        </Card.Body>
      </Card>

      
    </div>
    <Footerall/>
    </>
  );
}

export default CardContainer1;
