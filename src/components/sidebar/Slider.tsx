import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import './Slider.css'

type SliderProps = {
    pageWrapId:string,
    outerContainerId:string
}

const Slider = (props:SliderProps) => {
  return (
    <Menu>
    
        <div className='menu-item'>MY DOCUMENTS</div>
        <button className='menu-item btn--orange'>&#43; New Document</button>

    </Menu>
  )
}

export default Slider