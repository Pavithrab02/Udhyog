// // // import React, { useState, useEffect } from 'react';
// // // import Card from 'react-bootstrap/Card';
// // // import { Row, Col, Modal, Button } from 'react-bootstrap';
// // // import Navbar1 from '../components/Navbar1';

// // // function GetPostedJobs() {
// // //   const [data, setData] = useState(null);
// // //   const [selectedJob, setSelectedJob] = useState(null);

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, []);

// // //   const fetchData = async () => {
// // //     try {
// // //         const companyId = localStorage.getItem('emailId');
// // //       const response = await fetch(`http://localhost:9002/api/getjobs/${companyId}`);
// // //       const jsonData = await response.json();
// // //       setData(jsonData);
// // //     } catch (error) {
// // //       console.error('Error fetching data:', error);
// // //     }
// // //   };

// // //   const handleViewDetails = (job) => {
// // //     setSelectedJob(job);
// // //   };

// // //   const handleClose = () => {
// // //     setSelectedJob(null);
// // //   };

// // //   return (
// // //     <><Navbar1/>
// // //     <div>
// // //       <Row>
// // //         {data &&
// // //           data.map((item) => (
// // //             <Col key={item.jobId} xs={12} md={6} lg={4} style={{ marginBottom: '20px'}}>
// // //               <Card style={{ height:'100%' }}>
// // //                 <Card.Body>
// // //                   <Card.Title>{item.companyname}</Card.Title>
// // //                   <Card.Subtitle className="mb-2 text-muted"> {item.jobrole}</Card.Subtitle>
// // //                   <Card.Text>Skills: {item.requiredskills}</Card.Text>
// // //                   <Card.Text>Application Deadline: {item.applicationdeadline}</Card.Text>
// // //                   <div className="d-flex justify-content-between">
// // //                     <Button variant="primary" onClick={() => handleViewDetails(item)}>View Details</Button>
// // //                     <Card.Link href="#" className="btn btn-secondary">Update Now</Card.Link>
// // //                   </div>
// // //                 </Card.Body>
// // //               </Card>
// // //             </Col>
// // //           ))}
// // //       </Row>

// // //       <Modal show={selectedJob !== null} onHide={handleClose}>
// // //         <Modal.Header closeButton>
// // //           <Modal.Title>Job Details</Modal.Title>
// // //         </Modal.Header>
// // //         <Modal.Body>
// // //           {selectedJob && (
// // //             <>
// // //               <p><strong>Company Name:</strong> {selectedJob.companyname}</p>
// // //               <p><strong>Job Role:</strong> {selectedJob.jobrole}</p>
// // //               <p><strong>Required Skills:</strong> {selectedJob.requiredskills}</p>
// // //               <p><strong>Required Qualification:</strong> {selectedJob.requiredqualification}</p>
// // //               <p><strong>Job Description:</strong> {selectedJob.description}</p>
// // //               <p><strong>Location:</strong> {selectedJob.location}</p>
// // //               <p><strong>Salary:</strong> {selectedJob.salary}</p>
// // //               <p><strong>Experience:</strong> {selectedJob.experience}</p>
// // //               <p><strong>Application Deadline:</strong> {selectedJob.applicationdeadline}</p>
// // //               <p><strong>Post Date:</strong> {selectedJob.postDate}</p>
// // //             </>
// // //           )}
// // //         </Modal.Body>
// // //         <Modal.Footer>
// // //           <Button variant="secondary" onClick={handleClose}>
// // //             Close
// // //           </Button>
// // //         </Modal.Footer>
// // //       </Modal>
// // //     </div>
// // //     </>
// // //   );
// // // }

// // // export default GetPostedJobs;

// // import React, { useState, useEffect } from 'react';
// // import Card from 'react-bootstrap/Card';
// // import { Row, Col, Modal, Button } from 'react-bootstrap';
// // import Navbar1 from '../components/Navbar1';

// // function GetPostedJobs() {
// //   const [data, setData] = useState(null);
// //   const [selectedJob, setSelectedJob] = useState(null);
// //   const token = localStorage.getItem('token');


// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const companyId = localStorage.getItem('emailId');
     
// //        const response = await fetch(
// //             `http://localhost:8001/api/getjobs/${companyId}`, 
// //             {
// //                 headers: {
// //                     Authorization: `Bearer ${token}`
// //                 }
// //             }
// //         );
// //       const jsonData = await response.json();
// //       setData(jsonData);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   const handleViewDetails = (job) => {
// //     setSelectedJob(job);
// //   };

// //   const handleClose = () => {
// //     setSelectedJob(null);
// //   };

// //   const handleDelete = async (jobId) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:8001/api/deletejob/${jobId}`,
// //         {
// //             method: 'DELETE',
// //             headers: {
// //                 Authorization: `Bearer ${token}`
// //             }
// //         }
// //     );
// //       if (response.ok) {
// //         fetchData(); // Refresh data after successful deletion
// //         handleClose(); // Close modal after successful deletion
// //         console.log('Job deleted successfully!');
// //         alert("Job Deleted Successfully");
// //       } else {
// //         console.error('Failed to delete job');
// //       }
// //     } catch (error) {
// //       console.error('Error deleting job:', error);
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar1 />
// //       <div>
// //         <Row>
// //           {data &&
// //             data.map((item) => (
// //               <Col key={item.jobId} xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
// //                 <Card style={{ height: '100%' }}>
// //                   <Card.Body>
// //                     <Card.Title>{item.companyname}</Card.Title>
// //                     <Card.Subtitle className="mb-2 text-muted"> {item.jobrole}</Card.Subtitle>
// //                     <Card.Text>Skills: {item.requiredskills}</Card.Text>
// //                     <Card.Text>Application Deadline: {item.applicationdeadline}</Card.Text>
// //                     <div className="d-flex justify-content-between">
// //                       <Button variant="primary" onClick={() => handleViewDetails(item)}>View Details</Button>
// //                       <Button variant="danger" onClick={() => handleDelete(item.jobId)}>Delete</Button>
// //                     </div>
// //                   </Card.Body>
// //                 </Card>
// //               </Col>
// //             ))}
// //         </Row>

// //         <Modal show={selectedJob !== null} onHide={handleClose}>
// //           <Modal.Header closeButton>
// //             <Modal.Title>Job Details</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             {selectedJob && (
// //               <>
// //                 <p><strong>Company Name:</strong> {selectedJob.companyname}</p>
// //                 <p><strong>Job Role:</strong> {selectedJob.jobrole}</p>
// //                 <p><strong>Required Skills:</strong> {selectedJob.requiredskills}</p>
// //                 <p><strong>Required Qualification:</strong> {selectedJob.requiredqualification}</p>
// //                 <p><strong>Job Description:</strong> {selectedJob.description}</p>
// //                 <p><strong>Location:</strong> {selectedJob.location}</p>
// //                 <p><strong>Salary:</strong> {selectedJob.salary}</p>
// //                 <p><strong>Experience:</strong> {selectedJob.experience}</p>
// //                 <p><strong>Application Deadline:</strong> {selectedJob.applicationdeadline}</p>
// //                 <p><strong>Post Date:</strong> {selectedJob.postDate}</p>
// //               </>
// //             )}
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button variant="secondary" onClick={handleClose}>
// //               Close
// //             </Button>
// //           </Modal.Footer>
// //         </Modal>
// //       </div>
// //     </>
// //   );
// // }

// // export default GetPostedJobs;

import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import { FaEye, FaTrash } from 'react-icons/fa'; // Import Eye and Trash icons from react-icons/fa
import Navbar1 from '../components/Navbar1';
import { Link } from 'react-router-dom';
 
function GetPostedJobs() {
  const [data, setData] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const token = localStorage.getItem('token');
 
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    try {
      const companyId = localStorage.getItem('emailId');
     
      const response = await fetch(
        `http://localhost:8001/api/getjobs/${companyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      const jsonData = await response.json();
      setData(jsonData);
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
 
  const handleDelete = async (jobId) => {
    try {
      const response = await fetch(
        `http://localhost:8001/api/deletejob/${jobId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      if (response.ok) {
        fetchData(); // Refresh data after successful deletion
        handleClose(); // Close modal after successful deletion
        console.log('Job deleted successfully!');
        alert("Job Deleted Successfully");
      } else {
        console.error('Failed to delete job');
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };
 
  return (
    <>
      <Navbar1 />
      
      <div >
        
        <Row style={{marginLeft:'6%', marginTop:'5%'}}>
          {data && data.length > 0 ? (
            data.map((item) => (
              <Col key={item.jobId} xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
                <Card style={{ height: '100%' }}>
                  <Card.Body>
                    <Card.Title>{item.companyname}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> {item.jobrole}</Card.Subtitle>
                    <Card.Text>Skills: {item.requiredskills}</Card.Text>
                    <Card.Text>Application Deadline: {item.applicationdeadline}</Card.Text>
                    <div className="d-flex justify-content-between">
                    <Button
  style={{
    background: '', // Dark purple color matching the navbar
    color: 'white',        // White text color
    border: 'none',        // Remove border
    borderRadius: '5px'    ,// Add some border radius for a rounded look
  }}
  onClick={() => handleViewDetails(item)}
>
  <FaEye/>
</Button>
                      <Button variant="danger" onClick={() => handleDelete(item.jobId)} style={{marginLeft:'30%'}}>
                        <FaTrash />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div>
            <h1 style={{ textAlign: 'center', fontSize: '24px', color: '#333', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', marginTop: '50px' }}>No jobs posted yet. </h1>
            <Link to="/addjob" style={{ 
                    textDecoration: 'none',
                    display: 'inline-block',
                    backgroundColor: '#223961',
                    color: 'white',
                    padding: '12px 28px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                    marginLeft:'44%',
                    
                }}
                // :hover {{
                //     backgroundColor: '#0056b3',
                // }}
                >
                    Post Job
                </Link>
            </div>
          )}
        </Row>
 
        <Modal show={selectedJob !== null} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Job Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedJob && (
              <>
                <p><strong>Company Name:</strong> {selectedJob.companyname}</p>
                <p><strong>Job Role:</strong> {selectedJob.jobrole}</p>
                <p><strong>Required Skills:</strong> {selectedJob.requiredskills}</p>
                <p><strong>Required Qualification:</strong> {selectedJob.requiredqualification}</p>
                <p><strong>Job Description:</strong> {selectedJob.description}</p>
                <p><strong>Location:</strong> {selectedJob.location}</p>
                <p><strong>Salary:</strong> {selectedJob.salary}</p>
                <p><strong>Experience:</strong> {selectedJob.experience}</p>
                <p><strong>Application Deadline:</strong> {selectedJob.applicationdeadline}</p>
                <p><strong>Post Date:</strong> {selectedJob.postDate}</p>
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
    </>
  );
}
 
export default GetPostedJobs;

