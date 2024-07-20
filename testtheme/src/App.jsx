import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GProvider } from './Context/Theme'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
function App() {
  const [thememode, settheme] = useState()

  const light = ()=>{
    settheme("light")
  }
  const dark = ()=>{
    settheme("dark")
  }

  useEffect(()=>{
    document.querySelector("HTML").classList.remove("ligt", "dark")
    document.querySelector("HTML").classList.add(thememode)
  },[thememode])


  return (
    <GProvider value={{thememode,dark, light}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
    </GProvider>
  )
}

export default App
