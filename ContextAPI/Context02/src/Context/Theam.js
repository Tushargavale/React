

import React,{createContext,useContext} from "react";

export const ThemeContaxt=createContext({thememode:"light",darkTheme:()=>{},lightTheme:()=>{}})

export const ThemeContaxtProvider=ThemeContaxt.Provider  


export default function useTheme(){
    return useContext(ThemeContaxt)
}