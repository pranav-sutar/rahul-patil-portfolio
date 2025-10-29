import React from "react";
import {useParams, useHistory} from "react-router-dom";
import {bigProjects} from "../../portfolio";
import "./BigProjectsCss.css";

export default function BigProjects() {
  const {id} = useParams();
  const history = useHistory();
  const project = bigProjects.projects[id];

  if (!project) return <h2>Project not found</h2>;

  return (
    <div style={{padding: "20px"}}>
      <button
        onClick={() => history.push("/")}
        style={{
          padding: "10px 15px",
          marginBottom: "20px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        ← Back to Projects
      </button>

      <h1>{project.projectName}</h1>
      <p>{project.projectDesc}</p>
      {project.image && (
        <img
          src={project.image}
          alt={project.projectName}
          style={{width: "400px", borderRadius: "10px"}}
        />
      )}
    </div>
  );
}
