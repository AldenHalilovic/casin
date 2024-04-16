import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';
import HeroSection from '../components/HeroSection';
import GridItems from '../components/GridItems';

export default function HomePage() {
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

  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ marginLeft: sidebarOpen ? 240 : 0 }}>
      <Sidebar toggleDrawer={toggleDrawer} open={sidebarOpen} />
      <HeroSection sidebarOpen={sidebarOpen} />
      <GridItems />
      <LoginModal open={loginOpen} handleClose={handleLoginClose} />
      <RegisterModal open={registerOpen} handleClose={handleRegisterClose} />
    </div>
  );
}