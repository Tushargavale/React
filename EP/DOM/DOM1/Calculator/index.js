let buttons=document.querySelectorAll('.val')
let display=document.querySelector('#displayBox')
let clearButton=document.querySelector('.clearBoxButton')
clearButton.addEventListener('click',function(e){
    display.value=''
})

let result=0
//console.log
console.log(eval('1+2+3+4+5*5*6.5-10-10'))

function displayBox(arg){
    let value=display.value

   if(!value.length)
    display.value=arg
   else{
    console.log(value)
    if(Number(value.charAt(value.length-1)) || Number(arg) )
    {
        value=value+arg 
        display.value=value
    }else
    {
        let vl=value.slice(0,value.length-1)
        display.value=vl+arg
        result=arg
        console.log(result)
    }
   }
  






}

buttons.forEach((value)=>{
    value.addEventListener('click',function(e){
       let k=e.target.innerHTML
       if(k!=='=')
       {
        displayBox(k)
       }
      
       if(k=='=')
       {
        let res=eval(display.value)
        display.value=res
       }
    })
})


