// HeroSection.tsx
import { Box, Typography, LinearProgress } from "@mui/material";

export default function HeroSection({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      height="100%"
      padding="2rem"
      marginLeft={sidebarOpen ? "360px" : "0"} // Conditional margin
      ml={2} // Add some left margin
    >
      <Typography variant="h4" align="left" color="black" gutterBottom>
        Welcome back user
      </Typography>
      <Typography variant="body1" align="left" color="black">
        Your VIP Progress
      </Typography>
      <Box width="70%" mt={2}>
        <LinearProgress variant="determinate" value={77} />
      </Box>
    </Box>
  );
}
