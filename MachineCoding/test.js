

let state={
    count:1
}

// we are changing ref of obj
// Reducer
// This will return new value 

function reducer(state,action){
    console.log(action)
    if(action.type=='count/increseCount')
    return {...state,count:state.count+1}
    else 
    if(action.type==='count/decreseCount')
    return {...state,count:state.count-1} 
    else 
    if(action.type=='count/increseBy')
    return {...state,count:state.count+action.payload}

    return state
}



// What redux will do  ,call reducer  reducer 



// but in redux we pass one more thing with in reducer with  state , its a action 
// Action is plane JS object 

let incrementAction={
    type:"count/increseCount",
    payload:null
}

let decrementAction={
    type:"count/decreseCount",
    payload:null
}




// now perform operation using reducer 
//
state=reducer(state,incrementAction)
console.log(state)
// state=reducer(state,incrementAction)
// console.log(state)
// state=reducer(state,decrementAction )
// console.log(state)


function ActionCreator(type,payload)
{
    return {
        type:type,
        payload:payload
    }
}

state=reducer(state,ActionCreator('count/increseBy',50))
console.log(state)


console.log('***************');

function Fun(data,child){
    console.log(data,child)
}


let data={
    datas:[1,2,3,4,5,6,7],
    user:null
}


// Fun(data && data.datas,"child") 


// Arr to num 

const ArrToNum=()=>{
  
    let Arr=[9,9,9]
    let num=0 
    for(let i=Arr.length-1;i>=0;i--)
    {
        num=num+(Arr[i]*Math.pow(10,Arr.length-i-1))
        
    }

    num=num*2 
   
    let ans=[]
    while(num>0)
    {
        let e=num%10 
        ans.push(e) 
        num=Math.floor(num/10)
    }
    let i=0
    let j=ans.length-1 
    console.log(ans)
    while(i<=j)
    {
        let t=ans[i]
        ans[i]=ans[j]
        ans[j]=t
        i++
        j--
    }

    console.log(ans)
    return ans

}

ArrToNum()