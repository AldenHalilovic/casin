import React from 'react';
import { Grid, Paper } from '@mui/material';


const data = require('../../api/data.json');

const GridPage = () => {
    return (
        <Grid container spacing={2}>
            {data.grid.items.map((item: any, index: number) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper elevation={3} style={{ padding: '1em' }}>
                        <h2>{item.name}</h2>
                        <p>{item.value}</p>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default GridPage;