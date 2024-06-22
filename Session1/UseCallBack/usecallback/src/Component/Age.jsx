import React, { useEffect, useState } from "react"

  const Age=({increseage,age})=>{

    console.log('AGE')
   

    return(<>

        <button onClick={increseage} >increseage</button>
    <h3>{age}</h3>
    </>)
}

export default React.memo(Age)
