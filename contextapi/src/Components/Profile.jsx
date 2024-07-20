import React, { useContext } from 'react'
import UseContext from '../Context/UseContext'



function Profile() {
    const {user} = useContext(UseContext)
    
    if(!user) return  <div className='text-white'>Please Enter Somethin.</div>
    
    return <div className='text-white'>
       Authentication Successfull {user.password}
       </div>
}

export default Profile
