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

export default function LoginModal({
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
        Sign in
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
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
            Login
          </Button>
        </DialogActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Link
            href="#"
            variant="body2"
            style={{ color: "#ffffff" }}
            underline="none"
          >
            Forgot password?
          </Link>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="body2"
              style={{ color: "#808080", marginRight: "10px" }}
            >
              Don't have an account?
            </Typography>
            <Link
              href="#"
              variant="body2"
              style={{ color: "#ffffff" }}
              underline="none"
            >
              Register here
            </Link>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
