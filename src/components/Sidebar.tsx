// Sidebar.tsx
import { IconButton, List, ListItem, ListItemText, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import Link from 'next/link';

const StyledDrawer = styled(Drawer)({
  width: 360,
});

export default function Sidebar({ toggleDrawer, open }: { toggleDrawer: any, open: any }) {
  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={open}
    >
      <IconButton onClick={toggleDrawer}>
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Promotion" />
        </ListItem>
        <ListItem button component={Link} href="/casino">
          <ListItemText primary="Casino" />
        </ListItem>
        <ListItem button component={Link} href="/livecasino">
          <ListItemText primary="Live Casino" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
}