import React from "react";
import "./Progress.scss";
import {illustration, techStack, experienceData} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import test from "../../assets/images/airbnbLogo.png";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Experience</h1>
            {experienceData.experience.map((exp, i) => {
              return (
                <div key={i} className="skill">
                  <div className="container-experience">
                    <div className="left">
                      <img
                        src={exp.image}
                        alt="Experience Logo"
                        style={{borderRadius: "50%"}}
                      />
                    </div>
                    <div className="right">
                      <span>
                        <b>{exp.title}</b>
                      </span>
                      <span>{exp.subtitle}</span>
                      <span>{exp.time}</span>
                      <span>{exp.description}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })} */}
          </div>

          {/* <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div> */}
        </div>
      </Fade>
    );
  }
  return null;
}
