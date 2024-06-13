import React from "react";
import "./App.css";
//import Nav from "./components/navbarelements";
import Navbar from "./components/index";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
//import Home from "./pages";
import Home from "./pages/home";
//import Events from "./pages/events";
//import AnnualReport from "./pages/signin";
//import Teams from "./pages/team";
import Signup from "./pages/signup";
// import Signin from "./pages/signin";
import Login from "./pages/RecruiterLogin";
import TextExample from "./pages/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContainer from "./pages/CardContainer";
import Signin from "./pages/signin";
import Loginn from "./pages/signin";
import CandidateLogin from "./pages/CandidateLogin";
import CardContainer1 from "./pages/CardContainer1";
import CandSignup from "./pages/CandSignup";

import JobPostingForm from "./pages/AddJob";
import Navbar1 from "./components/Navbar1";
import GetPostedJobs from "./pages/GetPostedJobs";
import CandidateUpdateForm1 from "./pages/UpdateProfile";
import CandidateDetails from "./pages/ProfileDetails";
// import CandidatePage from "./pages/CandidatePage";
import DisplayJobs from "./pages/DisplayJobs";
import JobApplicationForm from "./pages/JobApplicationFom";
import ListJobApplnCand from "./pages/ListJobApplnCand";
import ListJobApplnEmp from "./pages/ListJobApplnEmp";
import EmployerHomePage from "./pages/EmployerHomePage";
import CandidateHomePage from "./pages/CandidateHomePage";


//import SignUp from "./pages/signup";

function App() {
    return (
        
        <Router>
            {/* <Navbar /> */}
            
            
            <Routes>
                <Route path="/candsignup" element={<CandSignup />} />
                <Route path="/cards" element={<TextExample />} />
                <Route path="/addjob" element={<JobPostingForm />} />
                <Route path="/" element={<Home/>} />
                <Route
                    path="/cardscontainer1"
                    element={<CardContainer1 />}
                />
                <Route path="/candlogin" element={<CandidateLogin />} />
                <Route
                    path="/login"
                    element={<CardContainer1 />}
                />
                <Route
                    path="/Signin"
                    element={<Loginn/>}
                />
                <Route path="/employerpage" element={<EmployerHomePage/>} />
                <Route path="/cardscontainer" element={<CardContainer />} />
                
                <Route
                    path="/Signup"
                    element={<Signup/>}
                />
                <Route
                    path="/candprofile"
                    element={<CandidateDetails/>}
                />
                <Route
                    path="/updateprofile"
                    element={<CandidateUpdateForm1/>}
                />
                  <Route
                    path="/candpage"
                    element={<CandidateHomePage/>}
                />
                <Route
                    path="/displayjobs"
                    element={<DisplayJobs/>}
                />
                <Route
                    path="/listjobapplnemp"
                    element={<ListJobApplnEmp/>}
                />
                <Route
                    path="/listjobapplncand"
                    element={<ListJobApplnCand/>}
                />
                <Route
                    path="/jobapp"
                    element={<TextExample/>}
                />
                <Route
                    path="/jobsposted"
                    element={<GetPostedJobs/>}
                />
                <Route
                    path="/logout"
                    element={<Home/>}
                />
                <Route path="/job/:jobId" element={<JobApplicationForm />} />
                
            </Routes>
        </Router>
    );
}

export default App;
