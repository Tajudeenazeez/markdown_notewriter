import React, {useState} from 'react';
import './App.css';
import Markdown from './components/markdown/Markdown';
import Preview from './components/preview/Preview';
import { ContextEditor } from './contexts/MarkdownContex';
import Header from './components/header/Header';


const App = () => {
  const [markDown, setMarkDown] = useState('')
  const contextValue = {
    markDown,
    setMarkDown
  }


  return (
    <div className = "App">
      <ContextEditor.Provider value={contextValue}>
        <Header/>
        <Markdown/>
        <Preview/>
      </ContextEditor.Provider>
    </div>
  )

}

export default App;
