import { createContext,useContext } from "react";


// creating a variable holding an object in which contains the values of themes.

export const Themegiver = createContext({
    thememode: "light",
    Darktheme: ()=>{},
    Lighttheme: ()=>{}
})


// wraper for our context
export const Themeprovider = Themegiver.Provider

 
// creating a custom hook.

// All the work done in a single

export default function usetheme(){
    return (
        useContext(Themegiver)
    )
}