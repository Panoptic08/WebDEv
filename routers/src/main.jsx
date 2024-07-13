import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Create from './components/Create/Create.jsx'
import Instagram, { loadtooptimize } from './components/Intagram/Instagram.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>  {/*Created a parent element, now create a child element*/}

    <Route  path=''  element={<Home />}/>  {/*Reason for this not taking a path*/}
    <Route  path='About'  element={<About />}>
    <Route path='Create' />
    </Route>
    <Route  path='Contact'  element={<Contact />}/>
    <Route  path='Create/:userid'  element={<Create />}/>   
    <Route 
    loader={loadtooptimize}
    path='Instagram'  element={<Instagram />}/>   

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>  
  </React.StrictMode>,
)
