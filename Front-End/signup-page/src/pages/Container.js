import React, { useState, useEffect } from 'react';
import "../App.css";
import jobmain from "../images/browse.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const jobBrowseContainer = document.querySelector('.job-browse-container');
            if (jobBrowseContainer) {
                const jobBrowseContainerTop = jobBrowseContainer.offsetTop;
                if (currentScrollY >= jobBrowseContainerTop) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="job-browse-container">
                <div className="text-container">
                    <h2 style={{ color: '#3c475c' }}>Discover Your Dream Job</h2>
                    <p>
                        Explore a myriad of exciting opportunities tailored just for you. Whether you're on your mobile device or desktop, embark on a seamless journey to find and apply for your ideal job.
                        <br></br>
                        Unleash the power of convenience as you manage all your applications effortlessly from a secure and user-friendly dashboard. Your career progression starts here!
                    </p>
                </div>
                <div className="image-container1">
                    <img src={jobmain} alt="Image" className="img-fluid" />
                </div>
            </div>
            {isVisible && (
                <div className="content-after-scroll">
                    {/* Content to appear after scrolling to job-browse-container */}
                </div>
            )}
        </div>
    );
};

export default Container;
