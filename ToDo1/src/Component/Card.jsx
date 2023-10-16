import React from 'react';
import '../App.css'
import { colors } from '@mui/material';
import { useLocation } from "react-router-dom";
import { save, Replace,Delete } from './Fun';
import { useState } from 'react';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import todoState from './ToDo';




function Card() {



 const [datas,setDatas]=useRecoilState(todoState)
  console.log(datas)


  const location = useLocation();
  let D=location.state.data

  let [activity,setActivity]=useState(D.Activity)
  let [hours,setHours]=useState(D.Hours)
  let [Date,setDate]=useState(D.Date.substring(0, 10))
  let [remark,setReamrk]=useState(D.Remark)
  let [status ,setStatus] =useState(D.Status)



  function saves(a,b)
  {
      save('1031055',datas)
  }









  return (
    <div className="card"  >
      {JSON.stringify(datas)}
     <input type="text" placeholder="Activity" value={activity}  onChange={(e)=>setActivity(e.target.value)} />
     <input type="number" placeholder="Activity" value={hours} onChange={(e)=>setHours(e.target.value)}/>
     <input type="date" placeholder="Activity" value={Date}onChange={(e)=>setDate(e.target.value)}/>
     <input type="text" placeholder="Activity" value={remark}  onChange={(e)=>setReamrk(e.target.value)}/>

     <select value={status} onChange={(e)=>setStatus(e.target.value)} >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Canceled">Canceled</option>
        </select>

        <input type="button" value="save" onClick={()=>saves('10310550',{activity,hours,Date,remark,status})} />
    </div>
    
  );
}



export default Card;
