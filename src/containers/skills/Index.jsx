import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PageHeaderContent from "../../components/pageHeader/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import ProgressBar from "react-animated-progress-bar";
import { skillsData } from "./utils";
import { Animate } from "react-simple-animate";
import { Line, Circle } from "rc-progress";

import "./style.scss";


const Skills = () => {
  const value = 30;
  const minValue = 0;
  const maxValue = 60;
  return (
    <>
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} className="skills1"/>}
      />
      <section id="skills" className="skills">
        <br />

        <div className="skills_content_wrapper">
          <h3>Professional Skills</h3>

          {skillsData.map((item, i) => (
            <div key={i} className="skills_content_wrapper_inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h1 className="skills_content_wrapper_inner-content_category-text">
                  {item.lable}
                </h1>

                <div>
                  {item.data.map((skillItem, j) => (
                    <div className="progressbar-wrapper" key={j}>
                      <br />
                      <div className="card">
                        <p>{skillItem.skillName}</p>

                        <br />

                        <CircularProgressbarWithChildren
                          text={skillItem.percentage + "%"}
                          value={skillItem.percentage}
                          minValue={minValue}
                          strokeWidth="10"
                          strokeColor="aqua"
                          strokeLinecap="round"
                          animation={true}
                          styles={buildStyles({
                            pathTransition:
                              "stroke-dashoffset 0.5s ease-in-out !important",
                            pathColor: `aqua`,
                            textColor: "#f88",
                            trailColor: "orange",

                            backgroundColor: "orange",
                          })}
                        ></CircularProgressbarWithChildren>
                      </div>
                    </div>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>

        <div className="skills_content_wrapper_2">
          <h3>Personal Skills</h3>
          <p>Leadership</p>
          <ProgressBar
            text="com"
            width="400px"
            height="14px"
            rect
            fontColor="orangered"
            percentage="85"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="aqua"
            bgColor="#A9B920"
            trackBorderColor="white"
          />

          <p>
            Problem-Solving
          </p>
          <ProgressBar
            text="com"
            width="400px"
            height="14px"
            rect
            fontColor="orangered"
            percentage="75"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="aqua"
            bgColor="#A9B920"
            trackBorderColor="white"
          />

          <p>Team Works</p>
          <ProgressBar
            text="com"
            width="400px"
            height="14px"
            rect
            fontColor="orangered"
            percentage="80"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="aqua"
            bgColor="#A9B920"
            trackBorderColor="white"
          />

          <p>Communication</p>
          <ProgressBar
            text="com"
            width="400px"
            height="14px"
            rect
            fontColor="orangered"
            percentage="85"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="aqua"
            bgColor="#A9B920"
            trackBorderColor="white"
          />
        </div>
      </section>

     
    </>
  );
};

export default Skills;
