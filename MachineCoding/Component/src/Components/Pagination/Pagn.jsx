import React from 'react'
import './Pagn.css'
function Pagn({currentPage,totalpage,setcurrentPage}) {
    

    const handler=(pageNo)=>{
          setcurrentPage(pageNo)
    }
  
    function PageNo(totalPage,currentPage){
        let Pages=[]
        for(let i=0;i<totalPage;i++)
        {
            Pages.push(
                <button 
                key={i}
                style={i+1==currentPage?{backgroundColor:'darkgray'}:null}
                className='PageNoBtn'
                onClick={()=>{handler(i+1)}}
                >
                    {i+1}
                </button>
            )
        }

        return Pages
    }   

    
  
   return (
  <>
  <div className="container1">

  <div className="prev">
        <button
        className='PageNoBtn'
        onClick={()=>handler(currentPage-1)}
        disabled={currentPage>1?false:true}
        >Prev</button>
</div>

<div className="Pages">
  {PageNo(totalpage,currentPage)}  
</div>

    <div className="next">
        <button
        className='PageNoBtn'
        onClick={()=>handler(currentPage+1)}
        disabled={currentPage<totalpage?false:true}
        >Next</button>
    </div>
  </div>
        
 </>
  )
}

export default Pagn


