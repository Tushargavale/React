

import React from 'react'
import { ProductList } from './Products'
import { Product } from './Component/Products'
function AllProducts() {
  return (
  <>
  
        <div style={styles.gridContainer}>
       {ProductList.map(({title,price,description,category,image,rating},key)=> <Product 
       key={key}
       title={title}
       price={price}
       description={description}
       category={category}
       images={image}
       rating={rating}
 
       ></Product> )}

</div> 
  
  </>
  )
}

const styles = {
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      margin: '20px auto',
      maxWidth: '1200px',
    }}

export default AllProducts