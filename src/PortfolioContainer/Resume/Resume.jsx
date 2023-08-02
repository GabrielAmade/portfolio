import React, { useState } from "react";
import Heading from "../Heading/Heading";
import "./Resume.css";

function Resume() {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
            <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    </div>;
  };

  return (
    <div className="resume-container">
      <div className="resume-content">
        <Heading title={"Expériences"} />
      </div>
    </div>
  );
}

export default Resume;
