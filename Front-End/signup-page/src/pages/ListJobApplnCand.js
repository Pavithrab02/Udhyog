
 
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ListJobApplnCand = () => {
// //     const [applications, setApplications] = useState([]);
// //     const candidateId = "poojad@gmail.com";

// //     useEffect(() => {
// //         fetchApplications();
// //     }, []);

// //     const fetchApplications = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:9000/udhyog/applications/cand/${candidateId}`);
// //             setApplications(response.data);
// //         } catch (error) {
// //             console.error('Error fetching applications:', error);
// //         }
// //     };

// //     const openResumeInNewTab = (resume) => {
// //         const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
// //         const blob = new Blob([byteArray], { type: 'application/pdf' });
// //         const url = URL.createObjectURL(blob);
// //         window.open(url, '_blank');
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h1 className="text-center mb-4">Job Applications</h1>
// //             <div className="row">
// //                 {applications.map(application => (
// //                     <div key={application.id} className="col-md-4 mb-4">
// //                         <div className="card w-100">
// //                             <div className="card-body">
// //                                 <h5 className="card-title">Full Name: {application.fullName}</h5>
// //                                 <p className="card-text">Contact No: {application.contactNo}</p>
// //                                 <p className="card-text">Skills: {application.skills}</p>
// //                                 <p className="card-text">Experience: {application.experience}</p>
// //                                 <p className="card-text">Candidate ID: {application.candidateId}</p>
// //                                 <p className="card-text">Job ID: {application.jobId}</p>
// //                                 <p className="card-text">Status: {application.status}</p>
// //                                 <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)}>View Resume</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ListJobApplnCand;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ListJobApplnCand = () => {
// //     const [applications, setApplications] = useState([]);
// //     const candidateId = localStorage.getItem('emailId');

// //     useEffect(() => {
// //         fetchApplications();
// //     }, []);

// //     const fetchApplications = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:9000/udhyog/applications/cand/${candidateId}`);
// //             setApplications(response.data);
// //         } catch (error) {
// //             console.error('Error fetching applications:', error);
// //         }
// //     };

// //     const fetchCompanyDetails = async (jobId) => {
// //         try {
// //             const response = await axios.get(`http://localhost:9002/api/job/${jobId}`);
// //             return response.data;
// //         } catch (error) {
// //             console.error('Error fetching company details:', error);
// //             return null;
// //         }
// //     };

// //     const openResumeInNewTab = (resume) => {
// //         const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
// //         const blob = new Blob([byteArray], { type: 'application/pdf' });
// //         const url = URL.createObjectURL(blob);
// //         window.open(url, '_blank');
// //     };

// //     useEffect(() => {
// //         const fetchCompanyDetailsForApplications = async () => {
// //             const updatedApplications = await Promise.all(
// //                 applications.map(async application => {
// //                     const companyDetails = await fetchCompanyDetails(application.jobId);
// //                     return { ...application, companyDetails };
// //                 })
// //             );
// //             setApplications(updatedApplications);
// //         };
// //         fetchCompanyDetailsForApplications();
// //     }, [applications]);

// //     return (
// //         <div className="container mt-5">
// //             <h1 className="text-center mb-4">Job Applications</h1>
// //             <div className="row">
// //                 {applications.map(application => (
// //                     <div key={application.id} className="col-md-4 mb-4">
// //                         <div className="card w-100">
// //                             <div className="card-body">
                               
// //                                 <p className="card-text">Status: {application.status}</p>
// //                                 {application.companyDetails && (
// //                                     <div>
// //                                         <p className="card-text">Company Name: {application.companyDetails.companyname}</p>
// //                                         <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
// //                                         <p className="card-text">Company Location: {application.companyDetails.location}</p>
// //                                         <p className="card-text">Salary: {application.companyDetails.salary}</p>
// //                                         <p className="card-text">Required Skills: {application.companyDetails.requiredskills}</p>
// //                                         <p className="card-text">Experience: {application.companyDetails.experience}</p>
// //                                     </div>
// //                                 )}
// //                                 <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)}>View Resume</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ListJobApplnCand;


// // import React, { useState, useEffect, useMemo } from 'react';
// // import axios from 'axios';

// // const ListJobApplnCand = () => {
// //     const [applications, setApplications] = useState([]);
// //     const candidateId = localStorage.getItem('emailId');

// //     useEffect(() => {
// //         fetchApplications();
// //     }, []);

// //     const fetchApplications = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:9000/udhyog/applications/cand/${candidateId}`);
// //             setApplications(response.data);
// //         } catch (error) {
// //             console.error('Error fetching applications:', error);
// //         }
// //     };

// //     const fetchCompanyDetails = async (jobId) => {
// //         try {
// //             const response = await axios.get(`http://localhost:9002/api/job/${jobId}`);
// //             return response.data;
// //         } catch (error) {
// //             console.error('Error fetching company details:', error);
// //             return null;
// //         }
// //     };

// //     const openResumeInNewTab = (resume) => {
// //         const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
// //         const blob = new Blob([byteArray], { type: 'application/pdf' });
// //         const url = URL.createObjectURL(blob);
// //         window.open(url, '_blank');
// //     };

// //     const enhancedApplications = useMemo(() => {
// //         return applications.map(application => ({
// //             ...application,
// //             companyDetails: application.companyDetails || fetchCompanyDetails(application.jobId)
// //         }));
// //     }, [applications]);

// //     return (
// //         <div className="container mt-5">
// //             <h1 className="text-center mb-4">Job Applications</h1>
// //             <div className="row">
// //                 {enhancedApplications.map(application => (
// //                     <div key={application.id} className="col-md-4 mb-4">
// //                         <div className="card w-100">
// //                             <div className="card-body">
// //                                 <p className="card-text">Status: {application.status}</p>
// //                                 {application.companyDetails && (
// //                                     <div>
// //                                         <p className="card-text">Company Name: {application.companyDetails.companyname}</p>
// //                                         <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
// //                                         <p className="card-text">Company Location: {application.companyDetails.location}</p>
// //                                         <p className="card-text">Salary: {application.companyDetails.salary}</p>
// //                                         <p className="card-text">Required Skills: {application.companyDetails.requiredskills}</p>
// //                                         <p className="card-text">Experience: {application.companyDetails.experience}</p>
// //                                     </div>
// //                                 )}
// //                                 <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)}>View Resume</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ListJobApplnCand;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const ListJobApplnCand = () => {
// //     const [applications, setApplications] = useState([]);
// //     const candidateId = localStorage.getItem('emailId');

// //     useEffect(() => {
// //         fetchApplications();
// //     }, []);

// //     const fetchApplications = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:9000/udhyog/applications/cand/${candidateId}`);
// //             console.log(response.data); // Log response data
// //             setApplications(response.data);
// //         } catch (error) {
// //             console.error('Error fetching applications:', error);
// //         }
// //     };

// //     const fetchCompanyDetails = async (jobId) => {
// //         try {
// //             const response = await axios.get(`http://localhost:9002/api/job/${jobId}`);
// //             console.log(response.data); // Log response data
// //             return response.data;
// //         } catch (error) {
// //             console.error('Error fetching company details:', error);
// //             return null;
// //         }
// //     };

// //     const openResumeInNewTab = (resume) => {
// //         const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
// //         const blob = new Blob([byteArray], { type: 'application/pdf' });
// //         const url = URL.createObjectURL(blob);
// //         window.open(url, '_blank');
// //     };

// //     useEffect(() => {
// //         const fetchCompanyDetailsForApplications = async () => {
// //             const updatedApplications = await Promise.all(
// //                 applications.map(async application => {
// //                     const companyDetails = await fetchCompanyDetails(application.jobId);
// //                     return { ...application, companyDetails };
// //                 })
// //             );
// //             setApplications(updatedApplications);
// //         };
// //         fetchCompanyDetailsForApplications();
// //     }, [applications]);

// //     return (
// //         <div className="container mt-5">
// //             <h1 className="text-center mb-4">Job Applications</h1>
// //             <div className="row">
// //                 {applications.map(application => (
// //                     <div key={application.id} className="col-md-4 mb-4">
// //                         <div className="card w-100">
// //                             <div className="card-body">
                              
// //                                 {application.companyDetails ? (
// //                                     <div>
// //                                         <h5>Company Details</h5>
// //                                         <p className="card-text">Company Name: {application.companyDetails.companyname}</p>
// //                                         <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
// //                                         <p className="card-text">Company Location: {application.companyDetails.location}</p>
// //                                         <p className="card-text">Salary: {application.companyDetails.salary}</p>
// //                                     </div>
// //                                   ) : (
// //                                  <div>Job opening is no longer available </div>
// //                                  )
                                
// //                                 }  
// //                                 <hr></hr>
// //                                 <h5>Candidate Details</h5>
// //                                 <p>Full Name: {application.fullName}</p>
// //                                 <p>Contact No: {application.contactNo}</p>
// //                                 <p>Skills: {application.skills}</p>
// //                                 <p>Experience: {application.experience}</p>
// //                                 <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)}>View Resume</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ListJobApplnCand;


// // import React, { useState, useEffect, useMemo } from 'react';
// // import axios from 'axios';

// // const ListJobApplnCand = () => {
// //     const [applications, setApplications] = useState([]);
// //     const candidateId = localStorage.getItem('emailId');

// //     useEffect(() => {
// //         fetchApplications();
// //     }, []);

// //     const fetchApplications = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:9000/udhyog/applications/cand/${candidateId}`);
// //             setApplications(response.data);
// //         } catch (error) {
// //             console.error('Error fetching applications:', error);
// //         }
// //     };

// //     const fetchCompanyDetails = async (jobId) => {
// //         try {
// //             const response = await axios.get(`http://localhost:9002/api/job/${jobId}`);
// //             return response.data;
// //         } catch (error) {
// //             console.error('Error fetching company details:', error);
// //             return null;
// //         }
// //     };

// //     const openResumeInNewTab = (resume) => {
// //         const byteArray = new Uint8Array(atob(resume).split('').map(char => char.charCodeAt(0)));
// //         const blob = new Blob([byteArray], { type: 'application/pdf' });
// //         const url = URL.createObjectURL(blob);
// //         window.open(url, '_blank');
// //     };

// //     const memoizedApplications = useMemo(() => {
// //         return applications.map(application => ({
// //             ...application,
// //             companyDetails: fetchCompanyDetails(application.jobId) 
// //         }));
// //     }, [applications]);
// //     useEffect(() => {
// //                 const fetchCompanyDetailsForApplications = async () => {
// //                     const updatedApplications = await Promise.all(
// //                         applications.map(async application => {
// //                             const companyDetails = await fetchCompanyDetails(application.jobId);
// //                             return { ...application, companyDetails };
// //                         })
// //                     );
// //                     setApplications(updatedApplications);
// //                 };
// //                 fetchCompanyDetailsForApplications();
// //             }, [applications]);
        

// //     return (
// //         <div className="container mt-5">
// //             <h1 className="text-center mb-4">Job Applications</h1>
// //             <div className="row">
// //                 {memoizedApplications.map(application => (
// //                     <div key={application.id} className="col-md-4 mb-4">
// //                         <div className="card w-100">
// //                             <div className="card-body">
// //                                 {application.companyDetails ? (
// //                                     <div>
// //                                         <h5>Company Details</h5>
// //                                         <p className="card-text">Company Name: {application.companyDetails.companyname}</p>
// //                                         <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
// //                                         <p className="card-text">Company Location: {application.companyDetails.location}</p>
// //                                         <p className="card-text">Salary: {application.companyDetails.salary}</p>
// //                                     </div>
// //                                 ) : (
// //                                     <div>Job opening is no longer available</div>
// //                                 )}
// //                                 <hr />
// //                                 <h5>Candidate Details</h5>
// //                                 <p>Full Name: {application.fullName}</p>
// //                                 <p>Contact No: {application.contactNo}</p>
// //                                 <p>Skills: {application.skills}</p>
// //                                 <p>Experience: {application.experience}</p>
// //                                 <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)}>View Resume</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default ListJobApplnCand;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar2 from '../components/Navbar2';

// const ListJobApplnCand = () => {
//   const [applications, setApplications] = useState([]);
//   const candidateId = localStorage.getItem('emailId');
//   const token = localStorage.getItem('token');


//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8001/udhyog/applications/cand/${candidateId}`,
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
//   }, [candidateId]); // Only refetch on candidateId change

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

//   return (
//     <><Navbar2/>
//     <div className="container mt-5" style={{backgroundColor:'#b7b6d1'}}>
//       <h1 className="text-center mb-4" style={{color:'#373657'}}> Job Applications</h1>
//       <div className="row">
//         {applications.map(application => (
//           <div key={application.id} className="col-md-4 mb-4">
//             <div className="card w-100">
//               <div className="card-body">
                

//                 {application.companyDetails ? (
//                   <div>
                    
//                     <h5>Company Details</h5>
//                     <p className="card-text">Company Name: {application.companyDetails.companyname}</p>
//                     <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
//                     <p className="card-text">Company Location: {application.companyDetails.location}</p>
//                     <p className="card-text">Salary: {application.companyDetails.salary}</p>
//                   </div>
//                 ) : (
//                   <p>Job Posting no longer available</p>
//                 )}
//                 <hr />
//                 <h5>Candidate Details</h5>
//                 <p>Full Name: {application.fullName}</p>
//                 <p>Contact No: {application.contactNo}</p>
//                 <p>Skills: {application.skills}</p>
//                 <p>Experience: {application.experience}</p>
//                 <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)} style={{backgroundColor:'#373657'}}>View Resume</button>
//                 <hr></hr>
//                 <strong style={{color:'#b35c15'}} >Status: {application.status}</strong>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default ListJobApplnCand;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from '../components/Navbar2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
 
const ListJobApplnCand = () => {
  const [applications, setApplications] = useState([]);
  const candidateId = localStorage.getItem('emailId');
  const token = localStorage.getItem('token');
 
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/udhyog/applications/cand/${candidateId}`,
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
      } catch (error) {
        console.error('Error fetching applications or company details:', error);
      }
    };
 
    fetchApplications();
  }, [candidateId]); // Only refetch on candidateId change
 
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
 
  return (
    <>
      <Navbar2/>
      {applications.length > 0 && <h1 className="text-center mb-4" style={{color:'#373657', marginTop:'2%'}}> Job Applications</h1>}
      <div className="container mt-5" style={{backgroundColor:'#b7b6d1'}}>
     
        <div className="row">
       
          {applications.length > 0 ? (
            applications.map(application => (
             
              <div key={application.id} className="col-md-4 mb-4">
               
                <div className="card w-100">
                  <div className="card-body">
                    {application.companyDetails ? (
                      <div>
                        <h5> <FontAwesomeIcon icon={faBuilding} style={{ marginRight: '5px' }} /> Company Details</h5>
                        <p className="card-text" > Company Name: {application.companyDetails.companyname}</p>
                        <p className="card-text">Job Role: {application.companyDetails.jobrole}</p>
                        <p className="card-text"> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />: {application.companyDetails.location}</p>
                        <p className="card-text">Salary: {application.companyDetails.salary}</p>
                      </div>
                    ) : (
                      <p>Job Posting no longer available</p>
                    )}
                    <hr />
                    <h5> <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} /> Candidate Details</h5>
                    <p>Full Name: {application.fullName}</p>
                    <p><FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />: {application.contactNo}</p>
                    <p>Skills: {application.skills}</p>
                    <p>Experience: {application.experience}</p>
                    <button className="btn btn-primary" onClick={() => openResumeInNewTab(application.file)} style={{backgroundColor:'#373657'}}>View Resume</button>
                    <hr></hr>
                    <strong style={{color:'#b35c15'}} >Status: {application.status}</strong>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center" style={{ fontSize: '28px', color: '#373657', fontFamily: 'Arial, sans-serif', marginBottom: '20px', fontWeight: 'bold' }}>
            <span style={{ marginRight: '10px' }}>No job applications available</span>
            <span role="img" aria-label="sad-face" style={{ fontSize: '32px', verticalAlign: 'middle' }}>😔</span>
          </h1>
          )}
        </div>
      </div>
    </>
  );
};
 
export default ListJobApplnCand;