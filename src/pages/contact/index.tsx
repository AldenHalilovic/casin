import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    address: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "#fff" }}
      >
        Contact Us
      </Typography>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "70%" }}
      >
        <Box marginBottom={2}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            value={form.name}
            onChange={handleChange}
            InputProps={{ style: { color: "#fff" } }}
            InputLabelProps={{ style: { color: "#fff" } }}
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            value={form.email}
            onChange={handleChange}
            InputProps={{ style: { color: "#fff" } }}
            InputLabelProps={{ style: { color: "#fff" } }}
            sx={{ width: "500px" }}
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            name="address"
            label="Address"
            variant="outlined"
            value={form.address}
            onChange={handleChange}
            InputProps={{ style: { color: "#fff" } }}
            InputLabelProps={{ style: { color: "#fff" } }}
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            value={form.message}
            onChange={handleChange}
            fullWidth
            multiline
            InputProps={{ style: { color: "#fff" } }}
            InputLabelProps={{ style: { color: "#fff" } }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ width: "500px" }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactPage;
