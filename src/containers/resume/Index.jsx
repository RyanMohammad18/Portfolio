import React from "react";
import PageHeaderContent from "../../components/pageHeader/Index";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { data } from "./util";
import "react-vertical-timeline-component/style.min.css";
import './style.scss';
import {MdWork,MdGroup} from 'react-icons/md'
import { FaBookOpen } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <section id="resume" className="resume">
        <PageHeaderContent
          headerText="Journey"
          icon={<BsInfoCircleFill size={30} />}
        />

        <div className="timeline">
          <div className="timeline_experience">
            <h3 className="timeline_experience_header-text">Experience</h3>
            <VerticalTimeline layout={"1-column"} lineColor="orange">
              {data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline_experience_vertical-timeline-element"
                  contentStyle={
                    {
                      background: 'none',
                      color:'white',
                      border:'1.5px solid aqua'
                    }
                  }
                  icon={<MdWork/>}
                  iconStyle={{
                    background: "black",
                    color: "aquamarine",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-position">
                      {item.position}
                    </h3>
                    <h4 className="vertical-timeline-element-company">
                      {item.company}
                    </h4>
                    <p>{item.time}</p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className="timeline_extraactivities">
            <h3 className="timeline_extraactivities_header-text">
              Extra-Curricular Activities
            </h3>
            <VerticalTimeline layout={"1-column"} lineColor="orange">
              {data.ExtraActivity.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline_extraactivities_vertical-timeline-element"
                  contentStyle={
                    {
                      background: 'none',
                      color:'white',
                      border:'1.5px solid aqua'
                    }
                  }
                  icon={<MdGroup/>}
                  iconStyle={{
                    background: "black",
                    color: "aquamarine",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-position">
                      {item.position}
                    </h3>
                    <h4 className="vertical-timeline-element-company">
                      {item.company}
                    </h4>
                    <p>{item.time}</p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>





        {/*education*/}



        <div className="education">
        <div className="education_timeline">
            <h3 className="education_timeline_header-text">Education</h3>
            <VerticalTimeline  lineColor="orange">
              {data.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline_experience_vertical-timeline-element"
                  contentStyle={
                    {
                      background: 'none',
                      color:'white',
                      border:'1.5px solid aqua'
                    }
                  }
                  icon={<FaBookOpen/>}
                  iconStyle={{
                    background: "black",
                    color: "aquamarine",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 className="vertical-timeline-element-position">
                       {"> "+ item.position}
                    </h3>
                    <h4 className="vertical-timeline-element-company">
                      { item.company}
                    </h4>
                    <p>{ item.time}</p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
