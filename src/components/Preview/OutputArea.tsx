import React from 'react'
import './OutputArea.scss'
import { ContextWrapper } from '../../context/contexts'
import parser from 'html-react-parser'

const OutputArea = () => {

  const showContextMarkdown = React.useContext(ContextWrapper)
  const previewText = showContextMarkdown?.markdown.previewText
 
  

  return (
    <div>
       <div className='outputArea--wrapper'>
        <h2 className="outputArea--title">Preview</h2>
        <div className="outputArea--text" >{previewText && parser(previewText) }</div>
       </div>
    </div>
  )
}

export default OutputArea