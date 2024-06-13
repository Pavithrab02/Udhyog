import React from "react";
import { Carousel } from "react-bootstrap";
import c1 from "../images/a1.png";
import c2 from "../images/a2.png";
import c4 from "../images/a4.webp";
import c5 from "../images/a5.png";
import c7 from "../images/a7.png";
import c8 from "../images/a8.png";
import c9 from "../images/a9.png";
import c10 from "../images/a10.png";
import c11 from "../images/a11.png";
import c12 from "../images/a12.png";

import "../App.css";

const CompanyCarousel = () => {
  return (
    <>
    <marquee style={{ scrollamount: "50", padding: "10px" }} loop="-5">
    <Carousel interval={5}>
      <Carousel.Item>
        <div className="carousel-row">
          <img
            src={c1}
            alt="Company Logo 1"
            style={{ maxWidth: "10%", maxHeight: "10%", marginRight: "15px" }}
          />
          <img
            src={c2}
            alt="Company Logo 2"
            style={{ maxWidth: "10%", maxHeight: "10%", marginRight: "15px" }}
          />
          <img
            src={c4}
            alt="Company Logo 4"
            style={{ maxWidth: "13%", maxHeight: "13%", marginRight: "15px" }}
          />
          <img
            src={c5}
            alt="Company Logo 5"
            style={{ maxWidth: "10%", maxHeight: "10%", marginRight: "15px" }}
          />
          <img
            src={c7}
            alt="Company Logo 7"
            style={{ maxWidth: "10%", maxHeight: "10%" }}
          />
          <img
            src={c8}
            alt="Company Logo 8"
            style={{ maxWidth: "6%", maxHeight: "6%", marginRight: "15px"}}
          />
          <img
            src={c9}
            alt="Company Logo 9"
            style={{maxWidth: "8%", maxHeight: "8%", marginRight: "15px" }}
          />
          <img
            src={c10}
            alt="Company Logo 7"
            style={{ maxWidth: "6%", maxHeight: "6%", marginRight: "15px" }}
          />
          <img
            src={c11}
            alt="Company Logo 7"
            style={{ maxWidth: "8%", maxHeight: "8%", marginRight: "15px"}}
          />
          <img
            src={c12}
            alt="Company Logo 7"
            style={{maxWidth: "8%", maxHeight: "8%", marginRight: "15px" }}
          />
        </div>
      </Carousel.Item>
    </Carousel>
    </marquee>
    </>
  );
};

export default CompanyCarousel;
