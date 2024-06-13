import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';
import backgroundImg from '../images/em.jpg';
import Navbar1 from '../components/Navbar1';
import Home from './home';
import Login from './RecruiterLogin';
 
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
  paragraph: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  uniqueText: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    marginTop: theme.spacing(4),
    fontStyle: 'italic',
  },
}));
 
const EmployerHomePage = () => {
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
 
  return (
    (
      isLoggedIn ? (
        <>
          <Navbar1 />
          <div className={classes.root}>
            <Container maxWidth="md" className={classes.content}>
            <Typography variant="h6" className={classes.title}>
                Dear Recruiter
              </Typography>
              <Typography variant="h4" className={classes.title}>
                Welcome to Udyog
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                Find the best talents for your company! Udyog helps you discover skilled professionals to drive your business forward.
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                Post job listings, browse resumes, and connect with potential candidates effortlessly.
              </Typography>
              <Typography variant="body1" className={classes.paragraph}>
                Join thousands of companies who trust Udyog to streamline their hiring process and find top talent.
              </Typography>
              {/* <Button variant="contained" color="primary" className={classes.button}>
                Get Started
              </Button> */}
              <Typography variant="body2" className={classes.uniqueText}>
                "Empower your team with Udyog - where talent meets opportunity."
              </Typography>
            </Container>
          </div>
        </>
      ) : (
        <Home />
      )
    )
  );
};
 
export default EmployerHomePage;