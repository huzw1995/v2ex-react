import { SWITCH_DARKMODE } from '../constants'

const initialState = {
    darkMode:false
}

export const switchDarkMode = (state = initialState,action)=>{
    switch(action.type){
        case SWITCH_DARKMODE:
        return {
            ...state,
            darkMode:action.switcher
        }
        default:
            return state
    }
}