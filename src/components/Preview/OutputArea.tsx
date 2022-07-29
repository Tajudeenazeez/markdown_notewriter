import React from "react";
import "./OutputArea.scss";
import { ContextWrapper } from "../../context/contexts";
import parser from "html-react-parser";
import { FiEyeOff, FiEye } from "react-icons/fi";

const OutputArea = () => {
  const showContextMarkdown = React.useContext(ContextWrapper);
  const previewText = showContextMarkdown?.markdown.previewText;
  const eye = showContextMarkdown?.markdown.fiEye;
  const handleFiEye = () => {
    showContextMarkdown?.dispatch({
      type: "SHOW EYE",
    });
  };

  return (
    <div>
      <div className={`outputArea--wrapper ${!eye ? "fullscreen":"" }`}>
        <h2 className="outputArea--title">Preview</h2>
        <span className="eye" onClick={handleFiEye}>
          {eye ? <FiEye /> : <FiEyeOff />}
        </span>
        <div className="outputArea--text">
          {previewText && parser(previewText)}
        </div>
      </div>
    </div>
  );
};

export default OutputArea;
