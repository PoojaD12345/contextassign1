import { createContext,useState } from "react";

export const TheamContext=createContext();

export const TheamProvider=({children})=>{
    const [theme,setTheme]=useState("light");

    const toggleTheme=()=>{
        if(theme==="light"){
            setTheme("dark");
        }else{
            setTheme("light")
        }
    }
    return <TheamContext.Provider value={{theme:theme,isLight:theme==="light",toggleTheme:toggleTheme}}>{children}</TheamContext.Provider>
};