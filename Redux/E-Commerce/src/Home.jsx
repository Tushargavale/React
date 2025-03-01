import React ,{useEffect} from 'react';
import axios from 'axios';
// Home Component
export const Home = () => {


console.log('HOME')

  useEffect(()=>{
    async function Fun() {
     
      axios
      .post('https://fakestoreapi.com/auth/login', {
        username: "mor_2314",
        password: "83r5^_",
      })
      .then((response) => {
        console.log(response.data); // Logs the response data
      })
      .catch((error) => {
        console.error(error); // Handles any errors
      });



    }

    console.log('App Co oie')
    Fun()
  },[])









  return (
    <div style={styles.container}>
      {/* Hero Banner */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to ShopEase</h1>
          <p style={styles.heroSubtitle}>
            Discover the best deals on premium products. Shop now and save big!
          </p>
          <button style={styles.shopButton}>Shop Now</button>
        </div>
      </section>

      {/* Categories Section */}
      <section style={styles.categoriesSection}>
        <h2 style={styles.sectionTitle}>Shop by Category</h2>
        <div style={styles.categories}>
          <div style={styles.categoryCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Men's Clothing"
              style={styles.categoryImage}
            />
            <p style={styles.categoryName}>Men's Clothing</p>
          </div>
          <div style={styles.categoryCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Women's Clothing"
              style={styles.categoryImage}
            />
            <p style={styles.categoryName}>Women's Clothing</p>
          </div>
          <div style={styles.categoryCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Electronics"
              style={styles.categoryImage}
            />
            <p style={styles.categoryName}>Electronics</p>
          </div>
          <div style={styles.categoryCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Accessories"
              style={styles.categoryImage}
            />
            <p style={styles.categoryName}>Accessories</p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productGrid}>
          {[1, 2, 3, 4].map((product, index) => (
            <div key={index} style={styles.productCard}>
              <img
                src="https://via.placeholder.com/150"
                alt={`Product ${product}`}
                style={styles.productImage}
              />
              <p style={styles.productName}>Product {product}</p>
              <p style={styles.productPrice}>$99.99</p>
              <button style={styles.addToCartButton}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '0 20px',
  },
  heroSection: {
    backgroundColor: '#f4f4f4',
    padding: '50px 20px',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#555',
  },
  shopButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  categoriesSection: {
    padding: '40px 0',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  categories: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
  },
  categoryCard: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  categoryImage: {
    width: '100%',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  categoryName: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  featuredSection: {
    padding: '40px 0',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  productCard: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  productPrice: {
    fontSize: '1rem',
    color: '#27ae60',
    marginBottom: '10px',
  },
  addToCartButton: {
    padding: '8px 12px',
    fontSize: '0.9rem',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

// export default Home;
