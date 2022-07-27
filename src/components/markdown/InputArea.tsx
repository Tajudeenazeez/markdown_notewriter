import React from "react";
import "./InputArea.scss";
import { ContextWrapper } from "../../context/contexts";

const InputArea = () => {
  const contextMarkdown = React.useContext(ContextWrapper);

  const showMarkdown = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    contextMarkdown?.dispatch({ type: "SHOWINPUT", payload: e.target.value });
  };
  const darkmode = contextMarkdown?.markdown.darkmode

  return (
    <div>
      <div className="inputArea">
        <h2 className="inputArea--title">MarkDown</h2>
        <textarea
          onChange={showMarkdown}
          className={`inputArea--text inputArea--${darkmode? 'darkmode': ''}`}
        ></textarea>
      </div>
    </div>
  );
};

export default InputArea;
