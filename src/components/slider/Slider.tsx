import React from 'react'
import './Slider.scss'
import { ContextWrapper } from '../../context/contexts'


const Slider = () => {
  const markdownContext = React.useContext(ContextWrapper)
  const show = markdownContext?.markdown.sidebar
  return (
    <div className='slider slider__wrapper'>
      <h2 className='slider__title'>My Document</h2>
      <div className={`slider slider--${show?"show":""}`}>
        <button className='btn btn--orange'>New document</button>
       
      </div>
    </div>
  )
}

export default Slider