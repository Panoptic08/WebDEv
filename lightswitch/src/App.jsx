import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/Themebtn'
import { Themeprovider } from './Context/Theme'

function App() {
  const [thememode, setTheme] = useState("light")

  const Lighttheme  = ()=>{
    setTheme("light")
  }
  const Darktheme  = ()=>{
    setTheme("dark")
  }
// added a new feature.
  useEffect(()=>{
    document.querySelector("HTML").classList.remove("light", "dark")

    document.querySelector("HTML").classList.add(thememode)
  }, [thememode])

// no w thememode holds the current value

  return (
    <Themeprovider value={{thememode, Darktheme, Lighttheme}}>
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
    </Themeprovider>
  )
}

export default App
