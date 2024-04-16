import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={form.name}
                    onChange={handleChange}
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
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                />
            </Box>
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default ContactPage;