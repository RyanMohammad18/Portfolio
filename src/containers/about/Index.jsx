import React from "react";
import PageHeaderContent from "../../components/pageHeader/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaReact, FaDatabase, FaPython, FaBootstrap } from "react-icons/fa";
import "./style.scss";

const personalDetails = [
  {
    lable: "Name: ",
    value: "Ryan Mohammad Bin Shahjahan",
  },
  {
    lable: "Age: ",
    value: "22",
  },
  {
    lable: "Address: ",
    value: "Banasree,Dhaka,Bangladesh",
  },
  {
    lable: "Email:",
    value: "kabirraiyan23@gmail.com",
  },
  {
    lable: "Phone:",
    value: "+8801834754045",
  },
];

const jobsummary =
  "A competent and highly driven web developer who is passionate about building effective websites. I want to be flexible in my website design and development utilizing high level framework languages so that I may change to another language as technology advances. I want to collaborate with knowledgeable professionals and significantly influence the software development. As I have previously created a few front-end websites, I am concentrating on full-stack development, more especially, MERN stack development, which encompasses high-level programming languages and databases.";
const About = () => {
  return (
    <>
      <section id="about" className="about">
        <PageHeaderContent
          headerText="About ME"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className="about_content">
          <div className="about_content_personalWrapper">
            <Animate
              play
              duration={1}
              delay={1}
              start={{
                transform: "translateX(-800px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3>Career Objective</h3>
              <p>{jobsummary}</p>
            </Animate>

            <Animate
              play
              duration={1}
              delay={1}
              start={{
                transform: "translateX(500px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="personalInfoHeaderText">Personal Information</h3>
              <br />
              <br />
              <ul>
                {personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className="title">{item.lable}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
          <div className="about_content_serviceWrapper">
            <Animate
              play
              duration={1}
              delay={1}
              start={{
                transform: "translateX(600px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              {" "}
              <div className="about_content_serviceWrapper_innerContent">
                <div>
                  <FaPython size={60} color="#b3cee5" />
                </div>
                <div>
                  <FaDatabase size={60} color="#b3cee5" />
                </div>
                <div>
                  <FaReact size={60} color="#b3cee5" />
                </div>
                <div>
                  <FaBootstrap size={60} color="#b3cee5" />
                </div>
                <div>
                  <h1>Core Skills</h1>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
