import React, { useReducer } from 'react'
import {initialState, StateProps, reducer, ActionType} from '../reducers/Reducers'

type ContextValueProps = {
    markdown: StateProps,
    dispatch: React.Dispatch<ActionType>
}
type ChildrenProp = {
    children: React.ReactNode
}

export const ContextWrapper = React.createContext<ContextValueProps | null>(null)

export const ContextProvider = ContextWrapper.Provider
const ContextMarkdown = ({children}:ChildrenProp) => {
    const [markdown, dispatch] = useReducer(reducer, initialState)
  

  return (
    <ContextProvider value={{markdown, dispatch}}>
        {children}
    </ContextProvider>
  )
}

export default ContextMarkdown