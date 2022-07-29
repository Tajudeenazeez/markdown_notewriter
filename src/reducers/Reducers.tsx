import parser from "../utils/Utils"

export type StateProps = {
    sidebar: boolean
    markdownText: string
    previewText:string 
    darkmode: boolean
    fiEye : boolean
}

export type ActionToggle = {
    type: "TOGGLESIDEBAR"
}
export type ActionMarkdown = {
    type: "SHOWINPUT",
    payload: string
}
export type ActionDarkmode = {
    type: "SHOW DARKMODE",
}
export type ActionFiEye = {
    type: "SHOW EYE"
}


export const initialState:StateProps = {
    sidebar: false,
    markdownText: '',
    previewText: '',
    darkmode: false,
    fiEye: true

    
}
export type ActionType = ActionToggle | ActionMarkdown | ActionDarkmode | ActionFiEye

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
            case "SHOW DARKMODE":
                return {
                    ...state,
                    darkmode: !state.darkmode
                }
                case "SHOW EYE":
                    return {
                        ...state,
                        fiEye: !state.fiEye
                    }
            default:
            return state
    }
}