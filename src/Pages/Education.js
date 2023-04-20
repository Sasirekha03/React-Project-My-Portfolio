import React from "react";
import "./Education.css";
import services from "../Data/Education.json";
import cpp from "../Data/Portfolioimg/cpp.png";
import java from "../Data/Portfolioimg/java.png";
import cp from "../Data/Portfolioimg/c-programming.png";
import css from "../Data/Portfolioimg/css.png";
import html from "../Data/Portfolioimg/html.png";
import js from "../Data/Portfolioimg/js.png";
import mysql from "../Data/Portfolioimg/mysql.png";
import rct from "../Data/Portfolioimg/react.png";
import Footer from "../common/Footer";
import { Divider } from "@mui/material";
const Education = () => {
  return (
    <div id="educationn">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <ul className="nav nav-tabs" data-aos="fade-down">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#internship">
                  Skills
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="education">
                {services.map((item, i) => (
                  <div className="educationblock" key={i}>
                    <div className="row" key={i}>
                      <div className="col-sm-5">
                        <h5 data-aos="fade-right">
                          {item.coursename} - {item.courseyear}
                        </h5>
                       
                      </div>
                      <div className="col-sm-7">
                        <div className="educationright">
                          <h5 data-aos="fade-left">{item.institute} </h5>
                          <h6 data-aos="fade-left"> {item.grade}</h6>
                        </div>
                          <Divider/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tab-pane fade" id="internship">
                <div className="educationblock">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="row">
                        <div className="column">
                         <img src={cpp}  style={{width:"100px"}}alt="cpp"></img>
                         <img src={java}  style={{width:"100px"}}alt="java"></img>
                         <img src={cp}  style={{width:"100px"}}alt="java"></img>
                         <img src={js}  style={{width:"100px"}}alt="java"></img>
                         </div>
                         <div className="column">
                          
                         <img src={mysql}  style={{width:"100px"}}alt="java"></img>
                         <img src={rct}  style={{width:"100px"}}alt="java"></img>
                         <img src={html}  style={{width:"100px"}}alt="java"></img>
                         <img src={css}  style={{width:"100px"}}alt="java"></img>
                         </div>
                         </div>
                      
                    </div>
                    <div className="col-sm-8">
                      <div className="educationright" data-aos="fade-left">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
         <Footer/>
    </div>
  );
};

export default Education;
