import parser from "../utils/Utils"

export type StateProps = {
    sidebar: boolean
    markdownText: string
    previewText:string 
}

export type ActionToggle = {
    type: "TOGGLESIDEBAR"
}
export type ActionMarkdown = {
    type: "SHOWINPUT",
    payload: string
}


export const initialState:StateProps = {
    sidebar: false,
    markdownText: '',
    previewText: '',

    
}
export type ActionType = ActionToggle | ActionMarkdown 

export const reducer = (state:StateProps, action: ActionType) => {
    switch(action.type){
        case "TOGGLESIDEBAR":
            return {
                ...state,
                sidebar: !state.sidebar,
            }
            case "SHOWINPUT":
                return {
                    ...state,
                    markdownText: action.payload,
                    previewText: parser(action.payload)
                }
            default:
            return state
    }
}