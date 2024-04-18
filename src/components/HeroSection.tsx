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
      marginLeft={sidebarOpen ? "360px" : "0"}
      ml={10}
    >
      <Typography variant="h5" align="left" color="white" gutterBottom>
        Welcome back user
      </Typography>
      <Typography variant="body1" align="left" color="white">
        Your VIP Progress
      </Typography>
      <Box width="70%" mt={2}>
        <LinearProgress variant="determinate" value={77} />
      </Box>
    </Box>
  );
}
