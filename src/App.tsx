import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import InputArea from "./components/markdown/InputArea";
import OutputArea from "./components/Preview/OutputArea";
import Slider from "./components/slider/Slider";
import { ContextWrapper } from "./context/contexts";

const App = () => {
  const contextsidebar = React.useContext(ContextWrapper);
  const darkmode = contextsidebar?.markdown.darkmode;

  const show = contextsidebar?.markdown.sidebar;

  return (
    <div
      className={`App App--${show ? "show" : ""} App-body${
        darkmode ? "--darkmode" : ""
      }`}
    >
      <Header />
      <Slider />
      <div className={`app-body `}>
        <InputArea />
        <OutputArea />
      </div>
    </div>
  );
};

export default App;
