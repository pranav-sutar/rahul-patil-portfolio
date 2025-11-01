import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext"; // ✅ adjust path if needed
// import "./KeyProjects.scss";

const KeyProjects = () => {
  // Try to get theme from context, otherwise use default dark mode
  const context = useContext(StyleContext);
  const isDark = context?.isDark ?? true; // ✅ Default = dark mode

  return (
    <div
      className="key-projects-container"
      style={{
        backgroundColor: isDark ? "#0d1117" : "#ffffff",
        color: isDark ? "#e6edf3" : "#000000",
        minHeight: "100vh",
        padding: "50px 20px"
      }}
    >
      <h1 style={{textAlign: "center", marginBottom: "30px"}}>
        Key Project Details
      </h1>

      <div className="project-content" style={{textAlign: "center"}}>
        <p>
          This page displays detailed information about the selected key
          project.
        </p>
      </div>
    </div>
  );
};

export default KeyProjects;
