//import React from 'react'



import * as React from 'react';
import { useState } from 'react';

import { TextField, Button, Grid, Container,Box, Typography } from '@mui/material';

export default function Login(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 5,
          boxShadow: 3,
          borderRadius: 2,
          mt: 5,
          marginTop:'5rem'

        }}
      >
        <Typography variant="h5" align="center">
          Sign Up
        </Typography>

        <TextField
          id="name"
          label="Full Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}