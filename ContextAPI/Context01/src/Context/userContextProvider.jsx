import React from "react";

import userContext  from "./userContext";
import { useState } from "react";

const UserContextProvider=({children})=>{

    const[user,setUser]=useState(null)   // We can give any value (not necessary to give null)
                                             /*  we can  also call API here and give access  */


    return(<>
     <userContext.Provider value={{user,setUser}}>           {/* we are giving access  of user , setUser */ }  
        {children}
    </userContext.Provider>
    </>)
}

export default UserContextProvider


