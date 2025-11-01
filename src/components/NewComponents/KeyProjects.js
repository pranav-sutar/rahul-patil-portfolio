import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {workExperiences, workExperiencesSecond} from "../../portfolio";
import "./KeyProjectsCss.scss";

export default function KeyProjects() {
  const {id} = useParams();
  const history = useHistory();

  // Merge both datasets
  const allProjects = [
    ...(workExperiences?.experience || []),
    ...(workExperiencesSecond?.experience || [])
  ];

  // Find project by id or index
  const project =
    allProjects.find(
      (p, i) =>
        String(p._id) === String(id) ||
        String(p.id) === String(id) ||
        String(i) === String(id)
    ) || null;

  if (!project) {
    return (
      <div className="keyproject-container">
        <h2>Project not found</h2>
        <button className="back-btn" onClick={() => history.push("/")}>
          ⬅ Back
        </button>
      </div>
    );
  }

  // ✅ Dynamically collect all images starting with "scr"
  const imageKeys = Object.keys(project).filter(key => key.startsWith("scr"));
  const images = imageKeys.map(key => project[key]);

  return (
    <div className="keyproject-container">
      <button className="back-btn" onClick={() => history.goBack()}>
        ⬅ Back
      </button>

      <h1 className="project-title">{project.role || "Project Details"}</h1>

      <div className="project-header">
        {project.companylogo && (
          <img
            src={project.companylogo}
            alt={project.company}
            className="project-logo"
          />
        )}
        <div>
          {/* <h2>{project.company}</h2> */}
          {/* <p className="project-date">{project.date}</p> */}
        </div>
      </div>

      <p className="project-desc">{project.description}</p>

      {/* Highlights */}
      {/* {project.descBullets && project.descBullets.length > 0 && (
        <>
          <h3>Highlights:</h3>
          <ul className="project-bullets">
            {project.descBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </>
      )} */}

      {/* ✅ Auto-playing, looping video */}
      {project.video_ref && (
        <div className="project-video">
          <h3>Project Demo Video</h3>
          <video
            src={project.video_ref}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="video-player"
          />
        </div>
      )}

      {/* ✅ Dynamic Images */}
      {images.length > 0 && (
        <>
          <h3 className="ref-title">Reference Images</h3>
          <div className="project-images">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Project Screenshot ${i + 1}`}
                className="project-img"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
