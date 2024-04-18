import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const GridPage = () => {
  return (
    <>
      <Typography variant="h4" align="center">
        Promotion
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4.5}>
          <Paper elevation={3}>
            <Grid container>
              <Grid item xs={15}>
                <img src="Nature.jpg" alt="Nature" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Nature</Typography>
                <Typography variant="body2" align="left">
                  Nature is Good
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Paper elevation={3}>
            <Grid container>
              <Grid item xs={15}>
                <img
                  src="Flowers.jpg"
                  alt="Flowers"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Flowers</Typography>
                <Typography variant="body2" align="left">
                  i'm allergic to it
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default GridPage;
