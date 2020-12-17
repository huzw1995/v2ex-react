export const switchDarkMode = (state,action)=>{
    switch(action.type){
        case 'SWITCH_DARKMODE':
        return {
            ...state,
            darkMode:action.switcher
        }
        default:
            return state
    }
}