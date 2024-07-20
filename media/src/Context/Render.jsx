import React, { useEffect, useState } from 'react'
import Content from '../components/content'
import { Giverprovider } from './theme'
import ThemeBtn from '../components/ThemeBtn'



function Render() {
    const[thememode, settheme] = useState()

    const dark = ()=>{
        settheme("dark")
    }

    const light = ()=>{
        settheme("light")
    }

    useEffect(()=>{
        document.querySelector("HTML").classList.remove("light", "dark")

        document.querySelector("HTML").classList.add(thememode)
    },[thememode])
    
    return(
    
        <Giverprovider value={{thememode,dark,light}} >
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                   <ThemeBtn></ThemeBtn>     
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Content></Content>
                    </div>
                </div>
            </div>

        </Giverprovider>

    
    )
}

export default Render
