import React, {useContext} from 'react'
import './Markdown.css'
import { ContextEditor } from '../../contexts/MarkdownContex'

const Markdown = () => {

  const { setMarkDown } = useContext(ContextEditor)
  const onchangeInput = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = event.currentTarget.value
    setMarkDown(inputValue)
  }

  return (
    <div className='container'>
      <div className='title--markdown'>Markdown</div>
      <div className='textarea--markdown'>
        <textarea onChange={onchangeInput} className='scope--markdown'/>
      </div>
    </div>
  )
}

export default Markdown