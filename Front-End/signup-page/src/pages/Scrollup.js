import { useState, useEffect } from 'react';
import "../App.css";
 
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
 
  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
 
    window.addEventListener('scroll', toggleVisibility);
 
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
 
  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };
 
  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Scroll to Top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}
 
export default ScrollToTopButton;