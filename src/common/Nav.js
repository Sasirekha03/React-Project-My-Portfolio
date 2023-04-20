import React, { useState } from "react";
import "./Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Education from "../assets/img/education.png";
import Projects from "../assets/img/portfolio.png";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from './logo.PNG';

const Nav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div id="navigation">
      
      
        <ul>
      <a class="navbar-brand" href="/">
      <div class="logo-image">
            <img src={logo} style={{width:"100px"}} class="img-fluid" alt="Humanity"></img>
      </div>
</a>
<br></br>
<br></br>
          <Link to="/myportfolio">
            <li data-aos="zoom-in">
              <img src={Home} alt="home" ></img>
            </li>
          </Link>
          <Link to="/about">
            <li data-aos="zoom-in">
              <img src={About} alt="about" />
            </li>
          </Link>
          
          
          <Link to="/education">
            <li data-aos="zoom-in">
              <img src={Education} alt="education" />
            </li>
          </Link>
          
          <Link to="/portfolio">
            <li data-aos="zoom-in">
              <img src={Projects} alt="portfolio" />
            </li>
          </Link>
          <Link to="/contact">
            <li data-aos="zoom-in">
              <img src={Contact} alt="contact" />
            </li>
          </Link>
        </ul>
      </div>

      <div id="navigation-mob">
        <h1 data-aos="fade-in">
          <Link to="/myportfolio">Sasirekha</Link>
        </h1>
        <i
          data-aos="fade-in"
          className={visible ? "fa fa-close" : "fa fa-bars" }
          onClick={() => setVisible(!visible)}
          ></i>
        {visible ? (
          <ul
          className="list-unstyled"
          data-aos="slide-down"
          data-aos-duration="700"
          onClick={() => setVisible(!visible)}
          >
            <Link to="/myportfolio">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            
            
            <Link to="/education">
              <li>Education</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
          
           
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
