// function Fun(){
//     // let id = [1, 2, 3, 4]
//     // let profit = [20, 1, 40, 30] 

//     id = [1, 2, 3, 4], deadline = [4, 1, 1, 1], profit = [20, 1, 40, 30]
//     for(let i=0;i<deadline.length;i++)
//     {
//       console.log('Welcoem ti bakkj')
//     }
//     let HashArr=Array.from(({length:maxID+1}),()=>-1)

//     Arr.sort((a,b)=>b[2]-a[2])
   
//    for(let i=0;i<Arr.length;i++)
//    {
    
//       let deadline=Arr[i][1]
//       let profit=Arr[i][2]  

//       if(HashArr[deadline]==-1)
//         HashArr[deadline]=profit 
//       else 
//       if(HashArr[deadline]!=-1)
//       {
//          for(let j=deadline-1;j>0;j--)
//             if(HashArr[j]==-1)
//                {
//                 HashArr[j]=profit
//                 break;
//                }
//       }
//     }
//     let count=0
//     let sum=0
//   for(let i=0;i<HashArr.length;i++)
//   {
//     if(HashArr[i]!=-1)
//        {
//         count++ 
//         sum=sum+HashArr[i]
//        }
//   }
//   console.log([count,sum])
// }

// Fun() 



// 47. Permutations II 


function Recursion(Arr,ds,current,ans){
  if(current.length>=Arr.length)
  {
    ans.push([...current])
    return;
  }
  let set=new Set()
  for(let i=0;i<Arr.length;i++)
  {
       if(set.has(Arr[i])) continue;
       
       if(ds[i]) continue 
       set.add(Arr[i])
       ds[i]=true 
       current.push(Arr[i])
       Recursion(Arr,ds,current,ans)
       current.pop()
       ds[i]=false
  }

  return ans

}




function Main(){
  let Arr=[1,1,2]

  let ds=[]
  for(let i=0;i<Arr.length;i++)
  {
    ds.push(false)
  }


  return Recursion(Arr,ds,[],[])

}

// Main()


