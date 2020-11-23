import {SWITCH_DARKMODE} from '../constants'
export const switchDarkMode = (switcher) =>{
    return {
        type:SWITCH_DARKMODE,
        switcher
    }
}