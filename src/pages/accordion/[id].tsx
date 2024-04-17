import { Accordion, AccordionSummary, AccordionDetails, Typography, Paper, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';

export default function AccordionPage() {
  const router = useRouter();
  const { id } = router.query;

  const data = {
    content: [
      { title: `Item 1 for page ${id}`, body: 'This is the body for item 1.' },
      { title: `Item 2 for page ${id}`, body: 'This is the body for item 2.' },
    ],
  };

  return (
    <Box margin={2}>
      <Paper elevation={3}>
        {data.content.map((section, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{section.body}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
}