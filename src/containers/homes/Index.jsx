import React from "react";

import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaDownload,FaFacebook,FaLinkedin,FaEnvelope,FaGithub } from "react-icons/fa";
import myimage from "../../Images/1.png";
import "./style.scss";
import About from "../about/Index";
import Skills from "../skills/Index";
import Resume from "../resume/Index";

import Contact from "../contact/Index";
import resume from "../../Images/2.pdf";
import PortfolioHome from "../portfolio_home/Index";
import Footer from "../footer/Index";

const Homes = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <section id="home" className="home">
        <div className="photo">
          <img src={myimage} alt="image" className="image" />
        </div>
        <div className="home_text-wrapper">
          <br />
          <h2> I'm</h2>
          <h1>
            Ryan Mohammad <br /> Bin Shahjahan{" "}
          </h1>
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateY(550px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="home_contact-me">
              <button onClick={handleContact}>Hire ME</button>
            </div>

            <div className="home_contact-me2">
              <a href={resume} download="Resume">
                Download CV <FaDownload size={20} />
              </a>
              
            </div>
            
            <div className="logos">
            <a href="https://github.com/RyanMohammad18" target="_blank">
                <FaGithub size={40}/>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook size={40}/>
              </a>
              <a href="https://www.linkedin.com/in/ryan-mohammad-35b59518b/" target="_blank">
                <FaLinkedin size={40}/>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                <FaEnvelope size={40}/>
              </a>
            </div>
          </Animate>
        </div>
      </section>

      <div className="hello">
        <About />
        <Skills />
        <PortfolioHome/>

        <Resume />
       
      
        <Contact />
        <Footer/>
       
      </div>
     

      
    </>
  );
};

export default Homes;
