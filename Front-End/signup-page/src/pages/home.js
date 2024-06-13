import React from "react";
import "../App.css";
import Navbar from "../components";
import ImgOverlayExample from "./homeimage";
import CompanyCarousel from "./CompanyCarousel";
import Container from "./Container";
import HowItWorks from "./Working";
import { AboutUsButton, AboutUsSection } from "./AboutUsButton";
import Footer from "./footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="image-container">
                <img src="https://bccie.bc.ca/wp-content/themes/bccie/img/jpg/post-top-image-default.jpg" alt="Your Image" className="image" />
                <div className="text-overlay">
                <h2 className="typing-effect">Welcome to Udyog!</h2>
                    <p>Unlock Endless Career Opportunities</p>
                    <p>Experience the power of Udyog and take your professional journey to new heights. <br></br>Join us today and unlock the door to a brighter future.</p>
                    <AboutUsButton />
                </div>
            </div>
            <ImgOverlayExample/>
            <CompanyCarousel />
            <Container/>
            <HowItWorks/>
            {/* <AboutUsSection /> */}
            <Footer/>
        </>
    );
};

export default Home;

