import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {workExperiences, workExperiencesSecond} from "../../portfolio";
import "./KeyProjectsCss.scss";

export default function KeyProjects() {
  const {id} = useParams();
  const history = useHistory();

  // Merge both sets
  const allProjects = [
    ...(workExperiences?.experience || []),
    ...(workExperiencesSecond?.experience || [])
  ];

  // Find the project by id or index
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

  // ✅ Detect if project uses new sections-based format
  const hasSections =
    Array.isArray(project.sections) && project.sections.length > 0;

  // ✅ For legacy projects (with scrXX/titleXX)
  const titleKeys = Object.keys(project)
    .filter(key => key.startsWith("title"))
    .sort();

  const imageKeys = Object.keys(project)
    .filter(key => key.startsWith("scr"))
    .sort();

  const groupImagesByTitles = () => {
    const groups = [];
    for (let i = 0; i < titleKeys.length; i++) {
      const titleKey = titleKeys[i];
      const nextTitleKey = titleKeys[i + 1];

      const currentTitleNum = parseInt(titleKey.replace("title", ""));
      const nextTitleNum = nextTitleKey
        ? parseInt(nextTitleKey.replace("title", ""))
        : Infinity;

      const imagesForTitle = imageKeys
        .filter(imgKey => {
          const imgNum = parseInt(imgKey.replace("scr", ""));
          return (
            imgNum >= (currentTitleNum - 1) * 3 + 1 && imgNum < nextTitleNum * 3
          );
        })
        .map(imgKey => project[imgKey])
        .filter(Boolean);

      groups.push({
        title: project[titleKey],
        images: imagesForTitle
      });
    }
    return groups;
  };

  const titledGroups = hasSections ? project.sections : groupImagesByTitles();

  const hasMultipleTitles = titledGroups.length > 0;

  const images =
    !hasMultipleTitles && imageKeys.map(key => project[key]).filter(Boolean);

  return (
    <div className="keyproject-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => history.goBack()}>
        ⬅ Back
      </button>

      {/* Project Title */}
      <h1 className="project-title">{project.role || "Project Details"}</h1>

      {/* Header Section */}
      <div className="project-header">
        {project.companylogo && (
          <img
            src={project.companylogo}
            alt={project.company || "Project Logo"}
            className="project-logo"
          />
        )}
        <div>
          {/* {project.company && <p className="project-date">{project.company}</p>} */}
          {/* {project.date && <p className="project-date">{project.date}</p>} */}
        </div>
      </div>

      {/* Description */}
      {project.description && (
        <p className="project-desc">{project.description}</p>
      )}

      {/* Highlights */}
      {project.descBullets && project.descBullets.length > 0 && (
        <ul className="project-bullets">
          {project.descBullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}

      {/* Video Section */}
      {project.video_ref && (
        <div className="project-video">
          <h3>Project Demo Video</h3>
          <video
            src={project.video_ref}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
          />
        </div>
      )}

      {/* ✅ Reference Images Section */}
      <div className="reference-section">
        <h3>Reference Images</h3>

        {hasMultipleTitles ? (
          titledGroups.map((group, i) => (
            <div key={i} className="image-group">
              <h4 className="group-title">{group.title}</h4>
              <div className="project-images">
                {group.images.map((img, j) => (
                  <img
                    key={j}
                    src={img}
                    alt={`Group ${i + 1} - Image ${j + 1}`}
                    className="project-img"
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
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
        )}
      </div>
    </div>
  );
}
