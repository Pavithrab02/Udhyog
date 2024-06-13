import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components';
import Footerall from './Footerall';

function CandidateLogin() {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Clear email and password fields when the component mounts
    setEmailId('');
    setPassword('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/udhyog/users/candlogin', {
        emailId,
        password
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('emailId', emailId);
      navigate('/candpage');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <> 
      <Navbar></Navbar>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailId">Email:</label>
              <input
                style={{ padding: '10px', width: '250px' }}
                type="text"
                id="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                style={{ padding: '10px', width: '250px' }}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={{ borderRadius: '50px', padding: '10px', width: '100px', cursor: 'pointer', backgroundColor: 'blue' }} type="submit">Sign In</button>
            </div>
            {error && <div className="error-message">{error}</div>}
          </form>
        </div>
      </div>
      <Footerall/>
    </>
  );
}

export default CandidateLogin;
