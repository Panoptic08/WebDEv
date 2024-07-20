  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import './index.css'
  import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Routes,
  } from "react-router-dom";

  import Root from './Root.jsx';
  import MainBody, { myinfo } from './components/mainbody.jsx';
import Start from './components/start.jsx';
import Content from './components/content.jsx';


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
      
      <Route  
      path='mainpath' element={<MainBody />} />
      
      <Route  
      path='' element={<Start />} />
  
  <Route path="/content/:username" element={<Content />} loader={myinfo} />

          </Route>
          
    )
  )


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider  router={router}  />
    </React.StrictMode>,
  )
