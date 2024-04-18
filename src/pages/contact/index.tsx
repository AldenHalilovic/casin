import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { pages } from "../../api/data";

interface FormState {
  name: string;
  email: string;
  message: string;
  address: string;
  [key: string]: string;
}

interface Field {
  name: keyof FormState;
  label: string;
}

const contactPage = pages.find((page) => page.type === "contact");

const ContactPage = () => {
  const [form, setForm] = useState<FormState>({
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
        {contactPage &&
          contactPage.fields?.map((field, index) => (
            <Box marginBottom={2} key={index}>
              <TextField
                fullWidth
                name={field.name}
                label={field.label}
                variant="outlined"
                value={form[field.name]}
                multiline={field.multiline}
                rows={field.rows}
                onChange={handleChange}
                InputProps={{
                  style: { color: "#fff" },
                  sx: {
                    borderColor: "white",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderRadius: "10px",
                  },
                }}
                InputLabelProps={{ style: { color: "#fff" } }}
              />
            </Box>
          ))}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactPage;
