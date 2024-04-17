import { Typography, Link, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "3rem 0",
  backgroundColor: "#172731",
  color: "#fff",
  width: "100%",
  position: "relative",
  bottom: 0,
});
export default function Footer() {
  return (
    <FooterContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={5}>
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body2">
              This is a short description about us. We provide high quality
              services.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Dynamic Pages
            </Typography>
            <Link
              display="block"
              href="/contact"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Contact
            </Link>
            <Link
              display="block"
              href="/externalurl"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              External Page
            </Link>
            <Link
              display="block"
              href="/simple"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Simple
            </Link>
            <Link
              display="block"
              href="/accordion"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              FAQ
            </Link>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Community
            </Typography>
            <Link
              display="block"
              href="/blog"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Blog
            </Link>
            <Link
              display="block"
              href="/forum"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Forum
            </Link>
            <Link
              display="block"
              href="/facebook"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Facebook
            </Link>
            <Link
              display="block"
              href="/twitter"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Twitter
            </Link>
            <Link
              display="block"
              href="/forum"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Instagram
            </Link>
            <Link
              display="block"
              href="/facebook"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Youtube
            </Link>
            <Link
              display="block"
              href="/twitter"
              color="inherit"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              Shop
            </Link>
          </Box>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}
