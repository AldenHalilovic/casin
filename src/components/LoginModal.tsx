import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

export default function LoginModal({ open, handleClose }: { open: boolean, handleClose: () => void }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" label="Email Address" type="email" fullWidth />
        <TextField margin="dense" label="Password" type="password" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Login</Button>
      </DialogActions>
    </Dialog>
  );
}