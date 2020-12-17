import React,{ createContext,useState,useContext,useReducer,useEffect } from 'react'
import { switchDarkMode as reducer} from '@redux/reducer'
const ThemeContext = createContext();

const initialState = {
    darkMode:false
}

const ThemeProvider = (props) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    const switchDarkMode = (switcher) => {
        dispatch({
          type: 'SWITCH_DARKMODE',
          switcher,
        });
    };
    return (
        <ThemeContext.Provider value={{...state,switchDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {ThemeContext, ThemeProvider}