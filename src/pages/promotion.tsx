import React from "react";
import { Grid, Paper } from "@mui/material";
import data from "../api/data.json";

const GridPage = () => {
  const gridData = data.pages.find((page: any) => page.id === "3")?.items || [];

  return (
    <Grid container spacing={2}>
      {gridData.map((item: any, index: number) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3}>
            <div>
              {item.name}: {item.value}
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridPage;
