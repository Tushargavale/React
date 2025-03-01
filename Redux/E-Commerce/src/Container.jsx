import React from 'react';

const Container = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

const styles = {
  container: {
    marginTop: '80px', // Adjust this based on your NavBar's height
    padding: '20px',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  },
};

export default Container;