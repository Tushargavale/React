import * as React from 'react'; 
import axios from 'axios'
import TableRow from './TableRow';
import { useEffect } from 'react';
import { useState } from 'react';
import todoState from './ToDo';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState
  } from 'recoil';

 function ShowToDo() {
    const [data,setData]=useRecoilState(todoState)


    useEffect(()=>{

        console.log('Data is Fetching From API')

       axios.get('http://localhost:3002/ShowAll').then((resp)=>{
       setData(resp.data)
       }).catch((err)=>{
        console.log('Error is  : ',err)
       })
      
    },[])
  return (
    <div>
        {data.map((entry)=>{
            return <TableRow todo={entry}  ></TableRow>
        })}
        
    </div>
  );
}

export default ShowToDo