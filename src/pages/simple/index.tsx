import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';

type SimplePageProps = {
  data: {
    id: string;
    title: string;
  }[];
};

const SimplePage: React.FC<SimplePageProps> = ({ data }) => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Simple Pages
      </Typography>
      <List>
        {data && data.map((item) => (
          <ListItem button component={Link} href={`/simple/${item.id}`} key={item.id}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SimplePage;