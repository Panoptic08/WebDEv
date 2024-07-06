import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-green-400 p-5  justify-content: space-evenly'>
     <button>1. green</button>
     <button>2. red</button>
     <button>3. blue</button>
     <button>4. grey</button>
</div>  
    </>
  )
}

export default App
