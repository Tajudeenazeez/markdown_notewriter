import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { ContextEditor } from '../../contexts/MarkdownContex'
import './Preview.css'
type Props = {
  
}

const Preview = () => {

  const { markDown } = useContext(ContextEditor)
  return (
    <div className='container'>
      <div className='title--preview'>Preview</div>
      <ReactMarkdown children = {markDown} />
    </div>
  )
}

export default Preview