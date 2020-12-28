import React,{ createContext,useContext,useReducer,useEffect } from 'react'
const ThemeContext = createContext();

const initialState = {
    darkMode:false
}

const reducer = (state,action)=>{
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