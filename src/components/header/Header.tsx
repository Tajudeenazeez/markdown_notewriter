import React from 'react'
import './Header.css'
import Slider from '../sidebar/Slider'


const Header = () => {

  return (
    <div className="header--container" id='outer-container'>
        <Slider pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id='page-wrap'>  Markdown</div>
        <button className='btn btn--save'><i className="material-icons"></i>save changes</button>
    </div>
  )
}

export default Header