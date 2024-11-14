import { NavLink } from "react-router-dom"

 const Profiles=()=>{

    const Users=['Tushar','User1','User2','User3','USer4']

    return(<>
    
    <div className="flex justify-center items-center h-screen bg-gray-50">
        
    {Users.map((user)=>
        <SimpleBox username={user} key={user} ></SimpleBox>
   )}

    </div>
        

    </>)
}

export default Profiles



import React from 'react';

const SimpleBox = ({ username, taylwend }) => {
  return (
    <div className="p-2 bg-gray-100 border border-gray-300 rounded-lg shadow-lg w-80">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">User Profile</h3>
        <div className="mt-2">
          <label className="font-medium">Username: </label>
          <NavLink to={`/Profile/${username}`} >
          <span className="text-gray-700">{username}</span>
          </NavLink>
        </div>
      </div>
      <div className="mt-4">
        <label className="font-medium">Taylwend: </label>
        <span className="text-gray-700">{taylwend}</span>
      </div>
    </div>
  );
};

// export default SimpleBox;
