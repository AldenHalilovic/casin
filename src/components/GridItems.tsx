// GridItems.tsx
import { Grid, Paper, Typography } from '@mui/material';

export default function GridItems() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5} sm={3}>
        <Paper elevation={3} style={{ padding: '1rem' }}>
          <Typography variant="h5" gutterBottom>
            Section 1
          </Typography>
          <Typography>
            This is some information or links for Section 1.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={5} sm={3}>
        <Paper elevation={3} style={{ padding: '1rem' }}>
          <Typography variant="h5" gutterBottom>
            Section 2
          </Typography>
          <Typography>
            This is some information or links for Section 2.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}