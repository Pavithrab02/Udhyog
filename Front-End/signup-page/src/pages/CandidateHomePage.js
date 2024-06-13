import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import backgroundImg from '../images/cand.webp';
import Navbar2 from '../components/Navbar2';
import Footerall from './Footerall';
import CandidateLogin from './CandidateLogin';
 
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  content: {
    backgroundColor: 'rgba(150, 150, 150, 0.7)', // Adjust the color and transparency here
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
  paragraph: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(3),
  },
  uniqueText: {
    color: '#294f8c',
    fontWeight: 'bold',
    marginTop: theme.spacing(4),
    fontStyle: 'italic',
  },
}));
 
const CandidateHomePage = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
 
  const handleClick = () => {
    window.location.href = '/jobapp'; // Directly change the location when the button is clicked
  };
 
  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar2 />
          <div className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
              <Typography variant="h4" className={classes.title}>
                Welcome to Udyog
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                Discover your path to success! Udyog connects you with opportunities that match your aspirations.
              </Typography>
              <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
                Start Your Journey
              </Button>
              <Typography variant="body2" className={classes.uniqueText}>
                "Unlock the door to your future with Udyog - where dreams meet opportunities."
              </Typography>
            </Container>
          </div>
          <Footerall />
        </>
      ) : (
        <CandidateLogin />
      )}
    </>
  );
};
 
export default CandidateHomePage;