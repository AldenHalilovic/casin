import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

export default function RegisterModal({ open, handleClose }: { open: boolean, handleClose: () => void }) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin="dense" label="Email Address" type="email" fullWidth />
                <TextField margin="dense" label="Password" type="password" fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Register</Button>
            </DialogActions>
        </Dialog>
    );
}