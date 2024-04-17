import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Box,
  Link,
  Typography,
} from "@mui/material";

export default function RegisterModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ style: { backgroundColor: "#172731" } }}
    >
      <DialogTitle sx={{ textAlign: "center", color: "#ffffff" }}>
        Register
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="First Name"
          type="text"
          fullWidth
          variant="outlined"
          InputProps={{ style: { backgroundColor: "#172731" } }}
          InputLabelProps={{ style: { color: "#ffffff" } }}
          color="primary"
        />
        <TextField
          margin="dense"
          label="Last Name"
          type="text"
          fullWidth
          variant="outlined"
          InputProps={{ style: { backgroundColor: "#172731" } }}
          InputLabelProps={{ style: { color: "#ffffff" } }}
          color="primary"
        />
        <TextField
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          InputProps={{ style: { backgroundColor: "#172731" } }}
          InputLabelProps={{ style: { color: "#ffffff" } }}
          color="primary"
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          InputProps={{ style: { backgroundColor: "#172731" } }}
          InputLabelProps={{ style: { color: "#ffffff" } }}
          color="primary"
        />
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ width: "100%" }}
            variant="contained"
            style={{ backgroundColor: "#203645", color: "#ffffff" }}
          >
            Register
          </Button>
        </DialogActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography
            variant="body2"
            style={{ color: "#808080", marginRight: "10px" }}
          >
            Already signed in?
          </Typography>
          <Link
            href="#"
            variant="body2"
            style={{ color: "#ffffff" }}
            underline="none"
            onClick={handleClose}
          >
            Sign in
          </Link>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
