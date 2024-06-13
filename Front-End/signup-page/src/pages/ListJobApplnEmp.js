


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ListJobApplnEmp = () => {
// //   const [applications, setApplications] = useState([]);
// //   const companyId = localStorage.getItem('emailId');

// //   useEffect(() => {
// //     const fetchApplications = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:9000/udhyog/applications/company/${companyId}`);
// //         const applicationsWithDetails = await Promise.all(
// //           response.data.map(async (application) => {
// //             const companyDetails = await fetchCompanyDetails(application.jobId);
// //             return { ...application, companyDetails };
// //           })
// //         );
// //         setApplications(applicationsWithDetails);
// //       } catch (error) {
// //         console.error('Error fetching applications or company details:', error);
// //       }
// //     };

// //     fetchApplications();
// //   }, [companyId]); // Only refetch on candidateId change

// //   const fetchCompanyDetails = async (jobId) => {
// //     try {
// //       const response = await axios.get(`http://localhost:9002/api/job/${jobId}`);
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error fetching company details:', error);
// //       return null; // Return null for graceful handling
// //     }
// //   };

// //   const openResumeInNewTab = (resume) => {
// //     const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
// //     const blob = new Blob([byteArray], { type: 'application/pdf' });
// //     const url = URL.createObjectURL(blob);
// //     window.open(url, '_blank');
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center mb-4">Job Applications</h1>
// //       <div className="row">
// //         {applications.map(application => (
// //           <div key={application.id} className="col-md-4 mb-4">
// //             <div className="card w-100">
// //               <div className="card-body">
                

// //                 {application.companyDetails ? (
// //                   <div>
                    
// //                     <h5>Company Details</h5>
// //                     <p className="card-text">Company Name: {application.companyDetails.companyname}</p>
// //                     <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
// //                     <p className="card-text">Company Location: {application.companyDetails.location}</p>
// //                     <p className="card-text">Salary: {application.companyDetails.salary}</p>
// //                   </div>
// //                 ) : (
// //                   <p>Job Posting no longer available</p>
// //                 )}
// //                 <hr />
// //                 <h5>Candidate Details</h5>
// //                 <p>Full Name: {application.fullName}</p>
// //                 <p>Contact No: {application.contactNo}</p>
// //                 <p>Skills: {application.skills}</p>
// //                 <p>Experience: {application.experience}</p>
// //                 <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)}>View Resume</button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListJobApplnEmp;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ListJobApplnEmp = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [editApplication, setEditApplication] = useState(null); // State to track the application being edited
// //   const [newStatus, setNewStatus] = useState(""); // State to store the new status input
// //   const companyId = localStorage.getItem('emailId');

// //   useEffect(() => {
// //     const fetchApplications = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:9000/udhyog/applications/company/${companyId}`);
// //         const applicationsWithDetails = await Promise.all(
// //           response.data.map(async (application) => {
// //             const companyDetails = await fetchCompanyDetails(application.jobId);
// //             return { ...application, companyDetails };
// //           })
// //         );
// //         setApplications(applicationsWithDetails);
// //       } catch (error) {
// //         console.error('Error fetching applications or company details:', error);
// //       }
// //     };

// //     fetchApplications();
// //   }, [companyId]); // Only refetch on companyId change

// //   const fetchCompanyDetails = async (jobId) => {
// //     try {
// //       const response = await axios.get(`http://localhost:9002/api/job/${jobId}`);
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error fetching company details:', error);
// //       return null; // Return null for graceful handling
// //     }
// //   };

// //   const openResumeInNewTab = (resume) => {
// //     const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
// //     const blob = new Blob([byteArray], { type: 'application/pdf' });
// //     const url = URL.createObjectURL(blob);
// //     window.open(url, '_blank');
// //   };

// //   const handleEdit = (application) => {
// //     setEditApplication(application); // Set the application to be edited
// //   };

// //   const handleSaveEdit = async () => {
// //     try {
// //       // Send the edited application data to the backend
// //       await axios.put(`http://localhost:9000/udhyog/${editApplication.id}/status?status=${newStatus}`);
// //       // Reset editApplication and newStatus state after successful update
// //       setEditApplication(null);
// //       setNewStatus("");
// //     } catch (error) {
// //       console.error('Error updating application:', error);
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     setNewStatus(e.target.value); // Update newStatus state with the input value
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center mb-4">Job Applications</h1>
// //       <div className="row">
// //         {applications.map(application => (
// //           <div key={application.id} className="col-md-4 mb-4">
// //             <div className="card w-100">
// //               <div className="card-body">
// //                 {editApplication && editApplication.id === application.id ? (
// //                   // Render form fields for editing when editApplication state is set
// //                   <div>
// //                     <input type="text" name="newStatus" value={newStatus} onChange={handleInputChange} placeholder="Enter new status" />
// //                     <button className="btn btn-primary mr-2" onClick={handleSaveEdit}>Save</button>
// //                     <button className="btn btn-secondary" onClick={() => setEditApplication(null)}>Cancel</button>
// //                   </div>
// //                 ) : (
// //                   <div>
// //                     {application.companyDetails ? (
// //                       <div>
// //                         <h5>Company Details</h5>
// //                         <p className="card-text">Company Name: {application.companyDetails.companyname}</p>
// //                         <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
// //                         <p className="card-text">Company Location: {application.companyDetails.location}</p>
// //                         <p className="card-text">Salary: {application.companyDetails.salary}</p>
// //                       </div>
// //                     ) : (
// //                       <p>Job Posting no longer available</p>
// //                     )}
// //                     <hr />
// //                     <h5>Candidate Details</h5>
// //                     <p>Full Name: {application.fullName}</p>
// //                     <p>Contact No: {application.contactNo}</p>
// //                     <p>Skills: {application.skills}</p>
// //                     <p>Experience: {application.experience}</p>
// //                     <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)}>View Resume</button>
// //                     {/* Render edit button */}
// //                     <button className="btn btn-primary ml-2" onClick={() => handleEdit(application)}>Edit</button>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListJobApplnEmp;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../App.css'; // Import the CSS file
// import Navbar1 from '../components/Navbar1';

// const ListJobApplnEmp = () => {
//   const [applications, setApplications] = useState([]);
//   const [editApplication, setEditApplication] = useState(null); // State to track the application being edited
//   const [newStatus, setNewStatus] = useState(""); // State to store the new status input
//   const companyId = localStorage.getItem('emailId');
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8001/udhyog/applications/company/${companyId}`,
//           {
//               headers: {
//                   Authorization: `Bearer ${token}`
//               }
//           }
//       );
//         const applicationsWithDetails = await Promise.all(
//           response.data.map(async (application) => {
//             const companyDetails = await fetchCompanyDetails(application.jobId);
//             return { ...application, companyDetails };
//           })
//         );
//         setApplications(applicationsWithDetails);
//       } catch (error) {
//         console.error('Error fetching applications or company details:', error);
//       }
//     };

//     fetchApplications();
//   }, [companyId]); // Only refetch on companyId change

//   const fetchCompanyDetails = async (jobId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8001/api/job/${jobId}`,
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching company details:', error);
//       return null; // Return null for graceful handling
//     }
//   };

//   const openResumeInNewTab = (resume) => {
//     const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
//     const blob = new Blob([byteArray], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);
//     window.open(url, '_blank');
//   };

//   const handleEdit = (application) => {
//     setEditApplication(application); // Set the application to be edited
//   };

//   const handleSaveEdit = async () => {
//     try {
//       // Send the edited application data to the backend
//       await axios.put(
//         `http://localhost:8001/udhyog/${editApplication.id}/status?status=${newStatus}`,
//         null, // No data to send in the body
//         {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }
//     );
//       setNewStatus("");
//     } catch (error) {
//       console.error('Error updating application:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewStatus(e.target.value); // Update newStatus state with the input value
//   };

//   return (
//     <><Navbar1/>
//         <div className="container mt-5" style={{backgroundColor:'#91979e'}}>
//       <h1 className="text-center mb-4">Job Applications</h1>
//       <div className="row">
//         {applications.map(application => (
//           <div key={application.id} className="col-md-4 mb-4">
//             <div className="card w-100">
//               <div className="card-body">
//                 {editApplication && editApplication.id === application.id ? (
//                   // Render form fields for editing when editApplication state is set
//                   <div>
//                     <input type="text" name="newStatus" value={newStatus} onChange={handleInputChange} placeholder="Enter new status" />
//                     <div className="btn-container"> {/* Container for buttons */}
//                       <button className="btn btn-primary" onClick={handleSaveEdit}>Save</button>
//                       <button className="btn btn-secondary" onClick={() => setEditApplication(null)}>Cancel</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
//                     {application.companyDetails ? (
//                       <div>
//                         <h5>Company Details</h5>
//                         <p className="card-text">Company Name: {application.companyDetails.companyname}</p>
//                         <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
//                         <p className="card-text">Company Location: {application.companyDetails.location}</p>
//                         <p className="card-text">Salary: {application.companyDetails.salary}</p>
//                       </div>
//                     ) : (
//                       <p>Job Posting no longer available</p>
//                     )}
//                     <hr />
//                     <h5>Candidate Details</h5>
//                     <p>Full Name: {application.fullName}</p>
//                     <p>Contact No: {application.contactNo}</p>
//                     <p>Skills: {application.skills}</p>
//                     <p>Experience: {application.experience}</p>
//                     <p>Status: {application.status}</p>
//                     <button className="btn-resume" onClick={() => openResumeInNewTab(application.file)}>View Resume</button>
//                     {/* Render edit button */}
//                     <button className="btn-edit" onClick={() => handleEdit(application)}>Edit Status</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default ListJobApplnEmp;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import the CSS file
import Navbar1 from '../components/Navbar1';
import file from "../images/file.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

 
const ListJobApplnEmp = () => {
  const [applications, setApplications] = useState([]);
  const [editApplication, setEditApplication] = useState(null); // State to track the application being edited
  const [newStatus, setNewStatus] = useState(""); // State to store the new status input
  const companyId = localStorage.getItem('emailId');
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(true); // State to track loading state
 
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/udhyog/applications/company/${companyId}`,
          {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }
      );
        const applicationsWithDetails = await Promise.all(
          response.data.map(async (application) => {
            const companyDetails = await fetchCompanyDetails(application.jobId);
            return { ...application, companyDetails };
          })
        );
        setApplications(applicationsWithDetails);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching applications or company details:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };
 
    fetchApplications();
  }, [companyId]); // Only refetch on companyId change
 
  const fetchCompanyDetails = async (jobId) => {
    try {
      const response = await axios.get(
        `http://localhost:8001/api/job/${jobId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
      return response.data;
    } catch (error) {
      console.error('Error fetching company details:', error);
      return null; // Return null for graceful handling
    }
  };
 
  const openResumeInNewTab = (resume) => {
    const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };
 
  const handleEdit = (application) => {
    setEditApplication(application); // Set the application to be edited
  };
 
  const handleSaveEdit = async () => {
    try {
      // Send the edited application data to the backend
      await axios.put(
        `http://localhost:8001/udhyog/${editApplication.id}/status?status=${newStatus}`,
        null, // No data to send in the body
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
      setNewStatus("");
    } catch (error) {
      console.error('Error updating application:', error);
    }
  };
 
  const handleInputChange = (e) => {
    setNewStatus(e.target.value); // Update newStatus state with the input value
  };
 
  return (
    <>
      <Navbar1 />
      <div style={{backgroundImage: `url('https://th.bing.com/th/id/R.a0663bba2cc2654aac69407d2e0b5690?rik=14vFlxtgQrOAwg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fLight-blue-wallpaper-hd-quality.jpg&ehk=ebOgJiU5%2fkN6aJLjZLIhMYm0N%2fWHUm1mvjQnaXrR6NA%3d&risl=&pid=ImgRaw&r=0.jpg')`,backgroundSize:'cover', display: "flex", justifyContent: "center", alignItems: "center" }}></div>
      <div>
       
        {loading ? (
          <p>Loading...</p>
        ) : applications.length === 0 ? (
          <div>
          <h1 style={{
            textAlign: 'center',    // Center align the text
            color: '#22375c',       // Dark purple color
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', marginTop:'5%'}}>No job applications found.</h1>
            <img src={file} alt="Logo" style={{ marginTop:'6%',width: '10%',height: '10%', marginLeft:'45%'}} />
            </div>
        ) : (
         
          <div className="row">
            <h1 className="text-center mb-4">Job Applications</h1>
            {applications.map(application => (
              <div key={application.id} className="col-md-4 mb-4">
                <div className="card w-100">
                  <div className="card-body">
                    {editApplication && editApplication.id === application.id ? (
                      // Render form fields for editing when editApplication state is set
                      <div>
                        <input type="text" name="newStatus" value={newStatus} onChange={handleInputChange} placeholder="Enter new status" />
                        <div className="btn-container"> {/* Container for buttons */}
                          <a href='/listjobapplnemp'><button className="btn btn-primary" onClick={handleSaveEdit}>Save</button></a>
                          <button className="btn btn-secondary" onClick={() => setEditApplication(null)}>Cancel</button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        {application.companyDetails ? (
                          <div style={{
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow effect
                            padding: '20px',                              // Add padding for spacing
                            borderRadius: '8px',                          // Add border radius for rounded corners
                            backgroundColor: '#FFFFFF',                   // Set background color to white
                          }}>
                            <h5 style={{ color: '#787a7d' }}>
        <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '5px' }} />
        Company Details
      </h5>  {/* Set title color */}
                            <p style={{ marginBottom: '8px' }}>
  <span style={{ fontWeight: 'bold', color: '#6A0DAD'}}>Company:</span>
  <span style={{ marginLeft: '5px', textTransform: 'capitalize', fontWeight: 'bold', color: '#747578' }}>{application.companyDetails.companyname}</span>
</p>
 
  <p style={{ marginBottom: '8px' }}>
    <span style={{ fontWeight: 'bold', color: '#6A0DAD' }}>Job Role:</span>
    <span style={{ marginLeft: '5px' }}>{application.companyDetails.jobrole}</span>
  </p>
  <p style={{ marginBottom: '8px' }}>
  <span style={{ fontWeight: 'bold', color: '#6A0DAD' }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
        :
      </span>
    <span style={{ marginLeft: '5px' }}>{application.companyDetails.location}</span>
  </p>
  <p style={{ marginBottom: '8px' }}>
    <span style={{ fontWeight: 'bold', color: '#6A0DAD' }}>Salary:</span>
    <span style={{ marginLeft: '5px' }}>{application.companyDetails.salary}</span>
  </p>
                          </div>
                         
                        ) : (
                          <p>Job Posting no longer available</p>
                        )}
                        <hr />
                        <div style={{
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow effect
  padding: '20px',                              // Add padding for spacing
  borderRadius: '8px',                          // Add border radius for rounded corners
  backgroundColor: '#FFFFFF',                   // Set background color to white
}}>
  <h5 style={{ color: '#787a7d' }}>
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
        Candidate Details
      </h5>  {/* Set title color */}
 <p style={{ marginBottom: '8px' }}>
  <span style={{ fontWeight: 'bold', color: '#6A0DAD' }}>Full Name:</span>
  <span style={{ marginLeft: '5px', textTransform: 'capitalize', fontWeight: 'bold' , color:'grey'}}>{application.fullName}</span>
</p>
<p style={{ marginBottom: '8px' }}>
<span style={{ fontWeight: 'bold', color: '#6A0DAD' }}>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
        :
      </span>

  <span style={{ marginLeft: '5px'}}>{application.contactNo}</span>
</p>
<p style={{ marginBottom: '8px' }}>
  <span style={{ fontWeight: 'bold', color: '#6A0DAD' }}>Skills:</span>
  <span style={{ marginLeft: '5px' }}>{application.skills}</span>
</p>
<p style={{ marginBottom: '8px' }}>
  <span style={{ fontWeight: 'bold', color: '#6A0DAD' }}>Experience:</span>
  <span style={{ marginLeft: '5px' }}>{application.experience}</span>
</p>
<p style={{ marginBottom: '8px' }}>
  <span style={{ fontWeight: 'bold', color: '#6A0DAD' }}>Status:</span>
  <span style={{ marginLeft: '5px' }}>{application.status}</span>
</p>
 
</div>
 
                        <button className="btn-resume" onClick={() => openResumeInNewTab(application.file)} style={{backgroundColor:'#172c4f',  borderRadius:'5px'}}>View Resume</button>
                        {/* Render edit button */}
                        <button className="btn-edit" onClick={() => handleEdit(application)} style={{backgroundColor:'#172c4f', borderRadius:'5px'}}>Edit Status</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
 
export default ListJobApplnEmp;