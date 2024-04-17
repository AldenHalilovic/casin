import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import { useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Sidebar from "./Sidebar";

const HeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#203645",
  padding: theme.spacing(2),
}));

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  return (
    <HeaderContainer>
      <IconButton
        onClick={() => setSidebarOpen(true)}
        sx={{ color: "#ffffff" }}
      >
        <MenuIcon />
      </IconButton>
      <Sidebar
        open={sidebarOpen}
        handleDrawerToggle={() => setSidebarOpen(!sidebarOpen)}
        toggleDrawer={() => {}}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button
          onClick={handleLoginOpen}
          sx={{ color: "#ffffff", mr: 2, width: "70px" }}
          disableRipple
          variant="contained"
        >
          Login
        </Button>
        <LoginModal open={loginOpen} handleClose={handleLoginClose} />
        <Button
          onClick={handleRegisterOpen}
          sx={{
            backgroundColor: "#707476",
            color: "#ffffff",
            width: "100px",
            "&:hover": {
              backgroundColor: "#4c4f50",
            },
          }}
          disableRipple
        >
          Register
        </Button>
        <RegisterModal open={registerOpen} handleClose={handleRegisterClose} />
      </Box>
    </HeaderContainer>
  );
}
