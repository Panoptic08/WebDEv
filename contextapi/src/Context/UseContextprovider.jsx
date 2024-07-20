import React, { useState } from 'react'
import UseContext from './UseContext' 



function UseContextprovider({children}) {
    const [user, setvalue] = useState(null)

    return (
        <UseContext.Provider value={{user, setvalue}}>  {/* pass as many values as u want to work with eg (here we just want to work with the username and setting its value up).  */}
            {children}
        </ UseContext.Provider>
    )

}

export default UseContextprovider
