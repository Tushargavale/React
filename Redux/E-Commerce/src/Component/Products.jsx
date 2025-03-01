export const Product=({title,price,description,category,images,rating})=>{
   
   
   
    return (
        <>
        
        <div  style={styles.card}>
          {/* Product Image */}
          <img src={images} alt={title} style={styles.image} />

          {/* Product Info */}
          <div style={styles.content}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.price}>${price}</p>
            <p style={styles.rating}>
              ⭐ {rating.rate} ({rating.count} reviews)
            </p>
          </div>
           <div style={styles.buttonContainer}>
            <button style={styles.addToCartButton}>Add to Cart</button>
            <button style={styles.buyNowButton}>Buy Now</button>
          </div>



        </div>
        
        
        
        
        </>
      

    );
  }


  const styles = {
      card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: '150px',
      objectFit: 'contain',
      marginBottom: '10px',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },
    title: {
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    price: {
      fontSize: '1rem',
      color: '#27ae60',
      fontWeight: 'bold',
    },
    rating: {
      fontSize: '0.9rem',
      color: '#f39c12',
    },

    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
      },
      addToCartButton: {
        padding: '8px 12px',
        fontSize: '0.9rem',
        color: '#fff',
        backgroundColor: '#3498db',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      },
      buyNowButton: {
        padding: '8px 12px',
        fontSize: '0.9rem',
        color: '#fff',
        backgroundColor: '#e74c3c',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      },



  };