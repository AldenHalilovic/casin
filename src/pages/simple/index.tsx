import { Box, Typography } from "@mui/material";
import { pages } from "../../api/data";

export default function SimplePage({ html }: { html: string }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Typography variant="h4" gutterBottom>
        Simple
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="100%"
      >
        <Box display="flex" flexDirection="column" alignItems="baseline">
          <Typography variant="h6" gutterBottom>
            Heading
          </Typography>
          {html && <Box dangerouslySetInnerHTML={{ __html: html }} />}
        </Box>
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const page = pages.find((page) => page.id === "3");
  const html = page ? page.html : null;

  return {
    props: { html },
  };
}
