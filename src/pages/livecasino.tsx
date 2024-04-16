import { Container, Typography, Box } from '@mui/material';

export default function LiveCasino() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h2" align="center" gutterBottom >
          Live Casino Page Coming Soon
        </Typography>
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            borderLeft: '2px solid', 
            borderRight: '2px solid', 
            paddingLeft: '1rem', 
            paddingRight: '1rem' 
          }}
        >
          Stay tuned, we are working on it
        </Typography>
      </Box>
    </Container>
  );
}