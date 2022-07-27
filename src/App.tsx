import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import InputArea from './components/markdown/InputArea';
import OutputArea from './components/Preview/OutputArea';
import Slider from './components/slider/Slider';
import { ContextWrapper } from './context/contexts';


const App = () => {
 const contextsidebar = React.useContext(ContextWrapper)
  
 const show = contextsidebar?.markdown.sidebar

  return (
    <div className = {`App App--${show ? 'show' : ''}`}>
      <Header/>
      <Slider/>
      <div className="app-body">
      <InputArea/>
      <OutputArea/>
      </div>
 
    </div>
  )

}

export default App;
