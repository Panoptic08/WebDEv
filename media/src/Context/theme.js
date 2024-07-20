import { createContext, useContext } from "react";

// creating variables and methods by passing the values

export const Giver = createContext({
    thememode: "light",
    dark:()=>{},
    light:()=>{},
})

// Wraper
export const Giverprovider = Giver.Provider

// Creating a usecontext
export const useme = ()=>{
    return (
        useContext(Giver)
    )
}
