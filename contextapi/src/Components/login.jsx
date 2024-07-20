import React, { useContext,useState } from 'react'
import UseContextprovider from '../Context/UseContextprovider'
import UseContext from '../Context/UseContext'


function Login() {

    const [name, setname] = useState("")
    const [password, setpassword] = useState("")

    const {setvalue} = useContext(UseContext)

    const handlesub = (e)=>{
        e.preventDefault()
        setvalue({name,password})
    }


    return (
       <>
       <div className='' style={{marginTop: "20%"}}>

        <h1 className='text-white' style={{marginTop: "-10%"}}>Login</h1>

        <input type="text" placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}}/> 
        <br />
        <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}}  placeholder='Password' />
        <br />
        
        <button  onClick={handlesub} className='border-4 border-solid  border-blue-400 text-black bg-white rounded-lg hover:scale-105 )' >Submit</button> 

       </div>
       
       
       </> 
    )
}



export default Login
