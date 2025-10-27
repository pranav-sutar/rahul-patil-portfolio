import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import robotePerson from "../../assets/lottie/PersonRobote.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {IoMdCloudDownload} from "react-icons/io";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                {/* <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              {/* <SocialMedia /> */}
              {/* <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    // href={require("./resume.pdf")}
                    href={require("../../assets/Resume/Final_Resume_V2.pdf")}
                    download="Rahul_Patil_Resume.pdf"
                    className="download-link-button"
                  >
                    <Button
                      text={
                        <>
                          CV{" "}
                          <IoMdCloudDownload
                            style={{
                              fontSize: "1.5rem",
                              verticalAlign: "middle"
                            }}
                          />
                        </>
                      }
                    />
                  </a>
                )}
              </div> */}
            </div>
          </div>
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={robotePerson} />
            ) : (
              // <DisplayLottie animationData={landingPerson} />
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
        </div>
      </div>
    </Fade>
  );
}
