import React, { useEffect, useState } from 'react'



const CheckBoxComp=({item,handleChange})=>{
    
    return(<>
    <input type="checkbox" name={item.name}  onChange={()=>handleChange(item)} /> <label>{item.name}</label> <br />
    {item?.child?.length?<>
        {item.child.map((value,key)=>{
            return <CheckBoxComp item={value} handleChange={handleChange} key={key} />
        })}
    </>:null}
    </>)
}

const Select = () => {

const Item=[{
    name:'All',
    value:false,
    child:[
        {
            name:'A',
            value:false,
            child:[]
        },
        {
            name:'B',
            value:false,
            child:[]
        },
        {
            name:'C',
            value:false,
            child:[]
        }
    ]
}]

const [checkbox,setCheckbox]=useState(Item)

function checkChildValue(){

}

function setValue(temp,item){
   for(let i=0;i<temp.length;i++)
    {
        if(temp[i].name==item.name)
        {
            let v=!item.value
            temp[i].value=v
            break;
        }
        if(temp[i].child?.length)
            setValue(temp[i].child,item)
    }
}

useEffect(()=>{console.log(checkbox)},[checkbox])

function handleChange(item){
    let temp=structuredClone(checkbox)
    setValue(temp,item)
    setCheckbox(temp)
       
}


  return (
    <> {Item.map((value,index)=>{
        return <CheckBoxComp item={value} key={index} handleChange={handleChange}  />
    })}    
     
  </>
  )
}






export default Select