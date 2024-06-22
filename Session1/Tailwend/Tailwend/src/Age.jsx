import React from "react"

 export const Age=({age})=>{
console.log('AGE')

    return(<>
   <h3>{age}</h3>
    </>)
}

export default React.memo(Age)