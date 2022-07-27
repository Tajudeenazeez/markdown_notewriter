import React from 'react'
import './Header.scss'
import { ContextWrapper } from '../../context/contexts'


const Header = () => {
  const contextslider = React.useContext(ContextWrapper)
  const show = contextslider?.markdown.sidebar


  const changeSlider = () => {
    contextslider?.dispatch({
      type: "TOGGLESIDEBAR"
    })
  }
  return (
    <div className="header">
        <div  className="header__wrapper">
            <div  onClick={changeSlider}>
            <div className="bar bar1"></div>
            <div className="bar bar1"></div>
            <div className="bar bar1"></div>
            </div>
            <h2 className='header__title'>markdown</h2>
            <h3 className='header__name'>document name</h3>

            <button className={`btn btn--orange btn--${show? "show":""}`}>save changes</button>

        </div>
    </div>
  )
}

export default Header