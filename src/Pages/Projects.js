import React from "react";
import art1 from './art1.jpg';
import art2 from './art2.jpg';
import art3 from './art3.jpg';
import art4 from './art4.jpg';
import article1 from './article1.jpg';
import article2 from './article2.jpg';
import article3 from './article3.jpg';
import rp1 from './rp1.PNG';
import rp2 from './rp2.PNG';
import rp3 from './rp3.PNG';
import Footer from "../common/Footer";

import "./Projects.css";


const Portfolio = () => {
  return (
    <>
      <div id="portfolio" data-aos="fade-in">
        <div className="container">
          <div className="row">
            <div className="col-sm-11 offset-sm-1">
              <div className="row">
                <div className="col-sm-12">
                  <h2>Projects</h2>
                  <br />
                </div>
                
                <div className="col-sm-6">
                  <h2>React Project</h2>
                    <div className="imgsec" data-aos="zoom-in">
                       <img src={rp1} className="img-fluid" alt="1Life" style={{height:"200px"}}/>
                      <img src={rp2} className="img-fluid" alt="1Life" style={{height:"200px"}}/>
                      <img src={rp3} className="img-fluid" alt="1Life" style={{height:"200px"}}/>

                    </div>
                </div>
                <div className="col-sm-6">
                  
                      <h2>Articles and Poetry</h2>
                    <div className="imgsec" data-aos="zoom-in">
                      
                      <img src={article3} className="img-fluid" alt="1Life" style={{height:"300px" }}/>
                      <img src={article2} className="img-fluid" alt="1Life" style={{height:"350px" }}/>
                      <img src={article1} className="img-fluid" alt="1Life" style={{height:"400px"}} />
                    </div>
                 
                </div>
                <div className="col-sm-6">
                  
                      <h2>Wall Paintings</h2>
                    <div className="imgsec" data-aos="zoom-in">
                      <img src={art3} className="img-fluid" alt="art" style={{height:"250px"}}/>
                      <img src={art4} className="img-fluid" alt="art" style={{height:"280px"}}/>
                      <img src={art1} className="img-fluid" alt="art" style={{height:"280px"}}/>
                      <img src={art2} className="img-fluid" alt="art" style={{height:"280px"}}/>
                      </div>
                  
                </div>
                      
                    
                 
               
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default Portfolio;
