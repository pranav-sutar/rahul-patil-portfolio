import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {bigProjects} from "../../portfolio";
import "./BigProjectsCss.css";
import {Fade} from "react-reveal";

export default function BigProjects() {
  const {id} = useParams();
  const history = useHistory();
  const project = bigProjects.projects[id];

  if (!project) return <h2>Project not found</h2>;

  // Collect all image fields dynamically (scr01, scr02, etc.)
  const imageKeys = Object.keys(project).filter(key => key.startsWith("scr"));
  const images = imageKeys.map(key => project[key]);
  const video = project.vid01;

  return (
    <div className="big-project-page">
      <Fade bottom duration={1000} distance="30px">
        <button
          className="big-project-back-btn"
          onClick={() => history.push("/")}
        >
          ← Back to Projects
        </button>

        <h1 className="big-project-title">{project.projectName}</h1>

        {/* Video Section */}
        {video && (
          <div className="big-project-video-container">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="big-project-video"
            />
          </div>
        )}

        <p className="big-project-description">{project.projectDesc}</p>
        <p className="Ref_img_title">Reference Images</p>

        {/* Images Section */}
        <div className="big-project-image-row">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`screenshot-${idx}`}
              className="big-project-image"
            />
          ))}
        </div>
      </Fade>

      {/* Description */}

      {/* Optional Footer Link */}
      {/* {project.footerLink && project.footerLink.length > 0 && (
        <div className="big-project-footer-links">
          {project.footerLink.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="big-project-footer-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      )} */}
    </div>
  );
}
