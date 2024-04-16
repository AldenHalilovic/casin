// accordion/index.tsx
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionPage = ({ data }: { data: any }) => (
    <div>
        {data.content.map((section: any, index: number) => (
            <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{section.body}</Typography>
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
);
export default AccordionPage;