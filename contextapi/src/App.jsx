import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseContextprovider from './Context/UseContextprovider'
import Login from './Components/login'
import Profile from './Components/Profile'


function App() {
 return(
  <UseContextprovider >

  <Login />
  <Profile />

  </ UseContextprovider>
 )
}

export default App
