import React, { useEffect, useState } from "react";
import "./Slider.scss";
import { ContextWrapper } from "../../context/contexts";
import { FiSun, FiMoon } from "react-icons/fi";

const Slider = () => {
  const markdownContext = React.useContext(ContextWrapper);
  const show = markdownContext?.markdown.sidebar;
  const [toggled, setToggled] = useState(false);

  // const toggled = markdownContext?.dispatch({
  //   type: "SHOW DARKMODE"
  // })


  useEffect(() => {
    console.log('before toggle');
    
    const toggleMode = document.querySelector(
      ".sideBar--btn-round"
    ) as HTMLElement;
    toggleMode.classList.toggle("darkmode");
    console.log('after toggle');
    
  }, [toggled]);

  return (
    <div className={`sideBar sideBar${show ? "--show" : ""}`} >
      <div className="sideBar--wrapper">
        <h2 className="sideBar--title">My Document</h2>
        <button className="btn btn--orange">+ New document</button>
        <div className="sideBar--mode">
          <div
            onClick={() => setToggled(!toggled)}
            className={`sideBar--btn-round `}
          ></div>
       
        </div>
        <span>
          <FiMoon className="fa fa-icon-light-mode" />
        </span>
        <span>
          <FiSun className="fa fa-icon-dark-mode" />
        </span>
      </div>
    </div>
  );
};

export default Slider;