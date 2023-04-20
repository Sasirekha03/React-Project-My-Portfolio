import React from "react";
import "./About.css";
import Footer from "../common/Footer";
const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
              As an electronic and communication engineer with a passion for coding, I have always been 
              interested in using technology to make a positive impact on society and the environment.
              I am driven by the desire to create solutions that not only improve people's lives but also 
              preserve nature and help animals.I am committed to using my skills and knowledge to create
              sustainable solutions that minimize environmental impact while also benefiting society.
              In addition to my passion for technology, I am also a strong advocate for animal welfare and
              conservation. I have volunteered my time at animal shelters and conservation organizations, 
              and I am always looking for ways to incorporate my engineering skills to help protect and 
              preserve endangered species.I believe that technology can be a powerful tool for positive 
              change, and I am excited to use my skills and knowledge to make a difference in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
