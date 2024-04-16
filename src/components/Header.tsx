// Header.tsx
import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './Sidebar';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

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
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <SideBar toggleDrawer={toggleDrawer} open={open} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Z|eta
        </Typography>
        <Button color="inherit" onClick={handleLoginOpen}>Login</Button>
        <Button color="inherit" onClick={handleRegisterOpen}>Register</Button>
        <LoginModal open={loginOpen} handleClose={handleLoginClose} />
        <RegisterModal open={registerOpen} handleClose={handleRegisterClose} />
      </Toolbar>
    </AppBar>
  );
}
