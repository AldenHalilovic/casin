// casino.tsx
import { Container, Typography, Box } from "@mui/material";

export default function Casino() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ color: "#ffffff" }}
        >
          {" "}
          Casino Page Coming Soon
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            borderLeft: "2px solid",
            borderRight: "2px solid",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            color: "#ffffff",
          }}
        >
          Stay tuned, we are working on it
        </Typography>
      </Box>
    </Container>
  );
}
