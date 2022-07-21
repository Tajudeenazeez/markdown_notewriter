import React from 'react'

type MarkdownContextProps = {
  markDown: string,
  setMarkDown: React.Dispatch<React.SetStateAction<string>>
}


  const defaultValue = {
    markDown: '',
    setMarkDown: () => {}
  }
  export const ContextEditor = React.createContext<MarkdownContextProps>(defaultValue)
  
  

