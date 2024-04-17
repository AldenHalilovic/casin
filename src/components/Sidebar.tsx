import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import CasinoIcon from "@mui/icons-material/Casino";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CloseIcon from "@mui/icons-material/Close";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    boxSizing: "border-box",
    backgroundColor: "#172731",
    color: "#fff",
  },
  [theme.breakpoints.up("sm")]: {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      backgroundColor: "#172731",
      color: "#fff",
    },
  },
}));

export default function Sidebar({
  open,
  handleDrawerToggle,
  toggleDrawer,
}: {
  open: any;
  handleDrawerToggle: any;
  toggleDrawer: () => void;
}) {
  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ marginRight: 1, color: "#ffffff" }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
            Z|ETA
          </Link>
        </Typography>
      </Box>
      <List>
        <ListItem
          button
          component={Link}
          href="/promotion"
          onClick={handleDrawerToggle}
        >
          <ListItemIcon sx={{ color: "#ffffff" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Promotion" />
        </ListItem>
        <ListItem
          button
          component={Link}
          href="/casino"
          onClick={handleDrawerToggle}
        >
          <ListItemIcon sx={{ color: "#ffffff" }}>
            <CasinoIcon />
          </ListItemIcon>
          <ListItemText primary="Casino" />
        </ListItem>
        <ListItem
          button
          component={Link}
          href="/livecasino"
          onClick={handleDrawerToggle}
        >
          <ListItemIcon sx={{ color: "#ffffff" }}>
            <LiveTvIcon />
          </ListItemIcon>
          <ListItemText primary="Live Casino" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
}
