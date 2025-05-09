import React from 'react'
import './Card.css'
const Card = () => {
  return (
  <div className="card-container card-item">
   <a className='card-image-container' href='#' >
    <img src="#" alt="card image"   
    /></a> 
    <div className="card-title-container">
      <a href="#">
        <h2 className='card-title' >New Gadget relese</h2>
      </a>
      <p className='card-desc' >
        Lorem ipsum dong elito architecto aliquid enim unde, quam esse deserunt praesentium consequuntur quaerat 

      </p>
    </div>
    <div className="card-footer-container">
      <div className="authod-container">
          <div className="authod-avtar-container">
            <img src="" alt="AVTAR" />
          </div>
      </div>
      <div className="card-tagcontainer">

      </div>
    </div>

</div> 
  )
}

export default Card