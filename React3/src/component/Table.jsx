import React,{useState} from "react";

import './style.css'; // Replace 'styles.css' with the actual path to your CSS file
import Deletedata from "./Deletedata";
function Table(props)
{
  
  return <div>
   
   <table className="employee-table">
        <thead>
            <tr>
                <th  >Name</th>
                <th  >ID</th>
                <th>Location</th>
                <th>Company</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
    {props.data.map((entry) => {
        let { Name, ID, Location, Company } = entry;
        return (
            <tr key={ID}>
                <td>{Name}</td>
                <td>{ID}</td>
                <td>{Location}</td>
                <td>{Company}</td>
                <td><button onClick={() => remove(entry)}>Delete</button></td>
            </tr>
        );
    })}
</tbody>
    </table>

   
  </div>
}


function remove(data)
{

  console.log(data.Name + "   Is REMOVED....")
   console.log(Deletedata(data))
}


export  default Table