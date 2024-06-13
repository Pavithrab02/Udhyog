// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Navbar2 from '../components/Navbar2';
// import Footerall from './Footerall';
// import { FaEye } from 'react-icons/fa'; // Import Eye icon from react-icons/fa
// import './TextExample.css'; // Import custom CSS file for additional styling
 
// function TextExample() {
//   const [data, setData] = useState(null);
//   const [filteredData, setFilteredData] = useState(null);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const token=localStorage.getItem('token');
 
//   useEffect(() => {
//     fetchData();
//   }, []);
 
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         'http://localhost:8001/api/jobpostings',
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );
//       const jsonData = await response.json();
//       setData(jsonData);
//       setFilteredData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
 
//   const handleViewDetails = (job) => {
//     setSelectedJob(job);
//   };
 
//   const handleClose = () => {
//     setSelectedJob(null);
//   };
 
//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filteredJobs = data.filter((job) =>
//       job.companyname.toLowerCase().includes(query) ||
//       job.jobrole.toLowerCase().includes(query) ||
//       job.requiredskills.toLowerCase().includes(query)
//     );
//     setFilteredData(filteredJobs);
//   };
 
//   return (
//     <>
//     <Navbar2/>
//     <div>
//       {/* Search Bar */}
     
//       <Form.Group controlId="search" style={{marginTop:'20px', marginBottom:'20px', marginLeft:'40px', marginRight:'40px'}}>
     
//         <Form.Control
//           type="text"
//           placeholder="Search jobs..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="search-input"
//         />
//       </Form.Group>
 
//       <Row className="job-card-row" style={{marginLeft:'6%'}}>
//         {filteredData &&
//           filteredData.map((item) => (
//             <Col key={item.jobId} xs={12} md={6} lg={4} className="job-card-col">
//               <Card className="job-card" style={{borderColor: '#0c0627'}}> {/* Purple border color */}
//                 <Card.Body>
//                   <Card.Title className="job-card-title">{item.companyname}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted job-card-subtitle">{item.jobrole}</Card.Subtitle>
//                   <Card.Text className="job-card-text">Skills: {item.requiredskills}</Card.Text>
//                   <Card.Text className="job-card-text">Application Deadline: {item.applicationdeadline}</Card.Text>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <Button
//                       variant="secondary"
//                       className="view-details-button"
//                       onClick={() => handleViewDetails(item)}
//                       size="sm"
//                       style={{ width: '100px', height: '40px', backgroundColor: '#0c0627', borderColor: '#0c0627' }} // Custom width and purple color
//                     >
//                       <FaEye />  View
//                     </Button>
//                     <Card.Link
//                       as={Link}
//                       to={`/job/${item.jobId}`}
//                       className="apply-now-button"
//                     >
//                       Apply Now
//                     </Card.Link>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//       </Row>
 
//       <Modal show={selectedJob !== null} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Job Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedJob && (
//             <>
//               <p>
//                 <strong>Company Name:</strong> {selectedJob.companyname}
//               </p>
//               <p>
//                 <strong>Job Role:</strong> {selectedJob.jobrole}
//               </p>
//               <p>
//                 <strong>Required Skills:</strong> {selectedJob.requiredskills}
//               </p>
//               <p>
//                 <strong>Required Qualification:</strong> {selectedJob.requiredqualification}
//               </p>
//               <p>
//                 <strong>Job Description:</strong> {selectedJob.description}
//               </p>
//               <p>
//                 <strong>Location:</strong> {selectedJob.location}
//               </p>
//               <p>
//                 <strong>Salary:</strong> {selectedJob.salary}
//               </p>
//               <p>
//                 <strong>Experience:</strong> {selectedJob.experience}
//               </p>
//               <p>
//                 <strong>Application Deadline:</strong> {selectedJob.applicationdeadline}
//               </p>
//               <p>
//                 <strong>Post Date:</strong> {selectedJob.postDate}
//               </p>
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//     {/* <Footerall/> */}
//     </>
//   );
// }
 
// export default TextExample;

import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2';
import Footerall from './Footerall';
import { FaEye } from 'react-icons/fa'; // Import Eye icon from react-icons/fa
import './TextExample.css'; // Import custom CSS file for additional styling

function TextExample() {
  const [data, setData] = useState(null);
  // const [filteredData, setFilteredData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'http://localhost:8001/api/jobpostings',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData); // Initialize filteredData with all data initially
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
  };

  const handleClose = () => {
    setSelectedJob(null);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (data && Array.isArray(data)) {
      const filteredJobs = data.filter((job) =>
        job.companyname.toLowerCase().includes(query) ||
        job.jobrole.toLowerCase().includes(query) ||
        job.requiredskills.toLowerCase().includes(query)
      );
      setFilteredData(filteredJobs);
    } else {
      setFilteredData([]); // Set filteredData to an empty array if data is null or not an array
    }
  };
  

  return (
    <>
      <Navbar2 />
      <div>
        {/* Search Bar */}
        <Form.Group controlId="search" style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '40px', marginRight: '40px' }}>
          <Form.Control
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </Form.Group>

        <Row className="job-card-row" style={{ marginLeft: '6%' }}>
          {filteredData &&
            filteredData.map((item) => (
              <Col key={item.jobId} xs={12} md={6} lg={4} className="job-card-col">
                <Card className="job-card" style={{ borderColor: '#0c0627' }}> {/* Purple border color */}
                  <Card.Body>
                    <Card.Title className="job-card-title">{item.companyname}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted job-card-subtitle">{item.jobrole}</Card.Subtitle>
                    <Card.Text className="job-card-text">Skills: {item.requiredskills}</Card.Text>
                    <Card.Text className="job-card-text">Application Deadline: {item.applicationdeadline}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button
                        variant="secondary"
                        className="view-details-button"
                        onClick={() => handleViewDetails(item)}
                        size="sm"
                        style={{ width: '100px', height: '40px', backgroundColor: '#0c0627', borderColor: '#0c0627' }} // Custom width and purple color
                      >
                        <FaEye /> View
                      </Button>
                      <Card.Link
                        as={Link}
                        to={`/job/${item.jobId}`}
                        className="apply-now-button"
                      >
                        Apply Now
                      </Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>

        <Modal show={selectedJob !== null} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Job Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedJob && (
              <>
                <p>
                  <strong>Company Name:</strong> {selectedJob.companyname}
                </p>
                <p>
                  <strong>Job Role:</strong> {selectedJob.jobrole}
                </p>
                <p>
                  <strong>Required Skills:</strong> {selectedJob.requiredskills}
                </p>
                <p>
                  <strong>Required Qualification:</strong> {selectedJob.requiredqualification}
                </p>
                <p>
                  <strong>Job Description:</strong> {selectedJob.description}
                </p>
                <p>
                  <strong>Location:</strong> {selectedJob.location}
                </p>
                <p>
                  <strong>Salary:</strong> {selectedJob.salary}
                </p>
                <p>
                  <strong>Experience:</strong> {selectedJob.experience}
                </p>
                <p>
                  <strong>Application Deadline:</strong> {selectedJob.applicationdeadline}
                </p>
                <p>
                  <strong>Post Date:</strong> {selectedJob.postDate}
                </p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <Footerall/> */}
    </>
  );
}

export default TextExample;
