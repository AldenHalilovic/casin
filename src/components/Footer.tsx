// Footer.tsx
import { Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 0',
  borderTop: '1px solid #ddd',
});

export default function Footer() {
  return (
    <FooterContainer>
      <Typography variant="body1">© 2022 My Website</Typography>
      <div>
        <Link href="/about" color="inherit" underline="hover">
          About
        </Link>
        <Link href="/contact" color="inherit" underline="hover" style={{ marginLeft: '1rem' }}>
          Contact
        </Link>
        <Link href="/privacy-policy" color="inherit" underline="hover" style={{ marginLeft: '1rem' }}>
          Privacy Policy
        </Link>
      </div>
    </FooterContainer>
  );
}