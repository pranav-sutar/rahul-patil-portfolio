import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";
import {useHistory} from "react-router-dom";

export default function ExperienceCard({cardInfo, isDark, idForNav}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  const history = useHistory();

  function getColorArrays() {
    try {
      const colorThief = new ColorThief();
      // ColorThief expects an <img> that's loaded and allowed by CORS; guard it
      if (imgRef.current && imgRef.current.complete) {
        const cols = colorThief.getColor(imgRef.current);
        setColorArrays(cols);
      }
    } catch (err) {
      // if ColorThief fails, silently ignore (prevents crash)
      // console.warn("ColorThief error:", err);
    }
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const handleViewProject = e => {
    // prevent any parent handlers (optional)
    if (e && e.stopPropagation) e.stopPropagation();

    // Prefer explicit idForNav passed from parent, else try cardInfo.id/_id
    const idToUse = idForNav ?? cardInfo.id ?? cardInfo._id ?? null;

    if (!idToUse) {
      console.error(
        "ExperienceCard: no id available to navigate. cardInfo:",
        cardInfo
      );
      // fallback action: stay on page or show alert
      return;
    }

    // navigate to the key project route (adjust route if you use different path)
    history.push(`/key_project/${idToUse}`);
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        className="experience-banner"
        style={{
          backgroundImage: `url(${cardInfo.back_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="experience-blurred_div"></div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
          onError={() => {
            /* ignore image load errors to avoid breaking UI */
          }}
        />
      </div>

      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>

        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>

        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>

        <div
          className="button-view-project"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <button onClick={e => handleViewProject(e)}>View Project</button>
        </div>
      </div>
    </div>
  );
}
