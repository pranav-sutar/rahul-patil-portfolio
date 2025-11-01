import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences, workExperiencesSecond} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (workExperiencesSecond.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="project-title">Key Projects</h1>
          <div className="experience-container" id="workExperience">
            <div>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  // ensure we always have an id to navigate with
                  const idForNav = card.id ?? card._id ?? i;
                  return (
                    <ExperienceCard
                      key={`we1-${idForNav}`}
                      isDark={isDark}
                      idForNav={idForNav}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        back_img: card.back_img,
                        scr01: card.scr01,
                        scr02: card.scr02,
                        scr03: card.scr03,
                        scr04: card.scr04,
                        video_ref: card.video_ref
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperienceSecond">
            <div>
              <div className="experience-cards-div">
                {workExperiencesSecond.experience.map((card, i) => {
                  const idForNav = card.id ?? card._id ?? `second-${i}`;
                  return (
                    <ExperienceCard
                      key={`we2-${idForNav}`}
                      isDark={isDark}
                      idForNav={idForNav}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        back_img: card.back_img,
                        scr01: card.scr01,
                        scr02: card.scr02,
                        scr03: card.scr03,
                        scr04: card.scr04,
                        video_ref: card.video_ref
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }

  return null;
}
