import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './Component/Input'
import  DummyInput  from './Component/DummyInput'
import useCurrencyinfo from './Hooks/useCurrencyinfo'
function App() {

 const [from, setFrom] = useState("usd")
 const [to,setTo]=useState('inr')
 const [current,setCurrent]=useState(0)
 const [converted,setConverted]=useState(0)
 const [rate,setRate]=useState(0)

 const currencys=useCurrencyinfo(from)
const currency=Object.keys(currencys)

  const onAmountchange=(e)=>{
   
    setCurrent(Number(e))

  }

  const onCurrencychange=(e)=>{
  setFrom(e)
  }

  const toCurrencyChange=(e)=>{
    console.log('Currency is updayed')
    setTo(e)
  }

  const handleSubmit=(e)=>{
     e.preventDefault();

  }
//################################################################################################################
//################################################################################################################
//################################################################################################################
useEffect(()=>{
 // console.log(currencys[to])
  setRate(currencys[to])
 
},[currencys,to])

useEffect(()=>{
// console.log(rate)
 
},[rate])

useEffect(()=>{
  setConverted(rate*current)
  console.log(rate,current)
},[current,to,from])




//################################################################################################################
//################################################################################################################
//################################################################################################################

  const Convert=()=>{
   console.log(from,to,current,converted)
   
  }



  return (
    <>

 
    <form  onSubmit={handleSubmit} >
   <DummyInput onAmountchange={onAmountchange} onCurrencychange={onCurrencychange} currency={currency} setCurrency={from} label='From' ></DummyInput>
   <br />
   <DummyInput onAmountchange={onAmountchange}  onCurrencychange={toCurrencyChange} currency={currency} setCurrency={to} label='To' amount={converted} ></DummyInput>
    <br />
 

   </form>
    </>
  )
}

export default App

















const Keys=[ "aed",
  "aergo",
  "aero",
  "afn",
  "agix",
  "agld",
  "ai",
  "aioz",
  "akt",
  "alcx",
  "aleph",
  "alex",
  "algo",
  "alice",
  "all",
  "alph",
  "alt",
  "alusd",
  "amd",
  "amp",
  "ang",
  "ankr",
  "ant",
  "aoa",
  "ape",
  "apex",
  "api",
  "apl",
  "apt",
  "ar",
  "arb",
  "ark",
  "arkm",
  "arpa",
  "ars",
  "asm",
  "ast"
 ]


//  useEffect(()=>{
//   let T=currencys[to]
//   console.log(T)
//   setRate(T)
//  console.log('Rate is Updated to ', rate)
//  },[to])


//   useEffect(()=>{
//     let FinalalAmount=current *rate
//     console.log(current,rate)
//   //  setConverted(FinalalAmount)
   
//   },[current])


//   // useEffect(()=>{
//   //   setRate(currencys[to])
//   //   console.log('Rate UPDATED TO',to)
//   // },[])
