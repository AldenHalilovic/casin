import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ContactPage = ({ data }: { data: any }) => {
const [form, setForm] = useState({});

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

};

  return (
    <form onSubmit={handleSubmit}>
    {data.fields.map((field: string) => (
        <Box key={field} marginBottom={2}>
            <TextField
                fullWidth
                name={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="outlined"
                onChange={handleChange}
            />
        </Box>
    ))}
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ContactPage;

function setForm(arg0: any) {
    throw new Error('Function not implemented.');
}