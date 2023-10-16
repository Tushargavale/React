import React, { useState } from 'react';
import '../Component/Table.css'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
  } from 'recoil';

  import { useNavigate } from 'react-router-dom';






function TableRow(props) {
    let data=props.todo
 //   console.log(data)
    
    const fullDate = data.Date;
const shortDate = fullDate.substring(0, 10);
//   console.log(data.Status)
  const [status, setStatus] = useState(data.Status); // Default status
 

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const navigate = useNavigate();
 
  function update()
  {
    navigate('/Edit',{state: {data: data}})
  }


  return (
    
    <tr>
       

      <td>
        <input type="text" placeholder="Activity" value={data.Activity} onChange={(e)=>console.log(e.target.value)} />
      </td>
      <td>
        <input type="number" placeholder="Hours" value={data.Hours} onChange={(e)=>console.log(e.target.value)} />
      </td>
      <td>
        <input type="date" placeholder="Date" value={shortDate} onChange={(e)=>console.log(e.target.value)} />
      </td>
      <td>
        <input type="text" placeholder="Remark" value={data.Remark} onChange={(e)=>console.log(e.target.value)} />
      </td>
      <td>
        <select value={status} onChange={handleStatusChange} >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Canceled">Canceled</option>
        </select>
      </td>
      <div style={{display:'flex', gap:'10px'  }} >
     
       <button>Delete</button>
      
      
       <button onClick={update} >Edit</button>
      
      </div>
     
    </tr>
  );
}



export default TableRow;
