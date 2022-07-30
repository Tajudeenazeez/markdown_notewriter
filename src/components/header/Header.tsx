import React from 'react'
import './Header.scss'
import { ContextWrapper } from '../../context/contexts'
import { RiDeleteBinLine } from 'react-icons/ri'


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
            <div className="bar--wrapper"  onClick={changeSlider}>
            <div className="bar bar1"></div>
            <div className="bar bar1"></div>
            <div className="bar bar1"></div>
            </div>
            <h2 className='header__title'>markdown</h2>
            <h3 className='header__name'>document name</h3>
            <span className='delete'><RiDeleteBinLine/></span>

            <button className={`btn btn--orange btn--${show? "show":""}`}>save</button>

        </div>
    </div>
  )
}

export default Header