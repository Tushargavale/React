import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Paper, Link } from "@mui/material";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, width: "100%" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Full Name" variant="outlined" name="name" value={formData.name} onChange={handleChange} fullWidth required />
          <TextField label="Email" variant="outlined" type="email" name="email" value={formData.email} onChange={handleChange} fullWidth required />
          <TextField label="Password" variant="outlined" type="password" name="password" value={formData.password} onChange={handleChange} fullWidth required />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Already have an account? <Link href="/login" underline="hover">Log in</Link>
        </Typography>
      </Paper>
    </Container>
  );
}