import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Modal, Button } from 'react-bootstrap';

function DisplayJobs() {
  const [data, setData] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const token=localStorage.getItem('token');

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

  return (
    <div>
      <Row>
        {data &&
          data.map((item) => (
            <Col key={item.jobId} xs={12} md={6} lg={4} style={{ marginBottom: '20px'}}>
              <Card style={{  height:'100%' }}>
                <Card.Body>
                  <Card.Title>{item.companyname}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"> {item.jobrole}</Card.Subtitle>
                  <Card.Text>Skills: {item.requiredskills}</Card.Text>
                  <Card.Text>Application Deadline: {item.applicationdeadline}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => handleViewDetails(item)}>View Details</Button>
                  
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
              <p><strong>Company Name:</strong> {selectedJob.companyname}</p>
              <p><strong>Job Role:</strong> {selectedJob.jobrole}</p>
              <p><strong>Required Skills:</strong> {selectedJob.requiredskills}</p>
              <p><strong>Required Qualification:</strong> {selectedJob.requiredqualification}</p>
              <p><strong>Job Decsription:</strong> {selectedJob.description}</p>
              <p><strong>Location:</strong> {selectedJob.location}</p>
              <p><strong>salary:</strong> {selectedJob.salary}</p>
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
  );
}

 export default DisplayJobs;