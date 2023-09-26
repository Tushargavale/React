import useTodos from "./useTodos"
function Component1()
{
    const todos=useTodos()
    return (
     <div>
       <h1>Welcome</h1>
         {todos.map((entry)=>{
           return <div>
            <Showdata data={entry} ></Showdata>
         </div>
         })}
     </div>
   )
}

function Showdata(props)
{
  let {Name,ID,Company,Location}=props.data
  console.log('==========================')
  console.log(Name,ID,Company,Location)
  return <div>
    Name={Name} ID={ID} Company={Company} Location ={Location}
  </div>
}


export default Component1