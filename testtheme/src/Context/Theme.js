import { createContext, useContext } from "react";


export const Giver = createContext({
    
        thememode: "ligt",
        dark:()=>{},
        light:()=>{},
    
})

export const GProvider = Giver.Provider

export const useme =()=>{
    return(
        useContext(Giver)
    )
}
