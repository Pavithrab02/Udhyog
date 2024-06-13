import React from 'react';
import "../App.css";
import aboutus from "../images/aboutus.png";


class AboutUsButton extends React.Component {
  scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('footer');
    const sectionPosition = aboutUsSection.offsetTop;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <button className="about-us-button" onClick={this.scrollToAboutUs}>
        Contact Us
      </button>
    );
  }
}

class AboutUsSection extends React.Component {
  render() {
    return (
      <section id="about-us-section">
        {/* <h2>About Us</h2> */}
        <img src={aboutus} alt='about us' style={{ width: '10%',height: '10%', marginLeft:'5%'}}></img>
        <p id='aboutsection'>Welcome to Udhyog. We're more than just a job portal; we're a community-driven platform connecting talent with opportunities. Our mission is to make the job search process seamless and inclusive. With intuitive tools and a commitment to diversity, we're here to help you find your dream career or top-tier talent. Join us in shaping the future of work. Discover, connect, and succeed with Udhyog.</p>
        <p id='aboutsection'>Our mission is simple: to bridge the gap between talent and opportunity, empowering both job seekers and employers to find their perfect match effortlessly. Whether you're a seasoned professional looking to take the next step in your career journey or an employer seeking top-tier talent, we've got you covered.</p>
      </section>
    );
  }
}

export { AboutUsButton, AboutUsSection };
