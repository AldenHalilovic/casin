import { List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';

type SimplePageProps = {
  data: {
    id: string;
    title: string;
  }[];
};

const SimplePage: React.FC<SimplePageProps> = ({ data }) => {
  return (
    <div>
      <h1>Simple Pages</h1>
      <List>
        {data.map((item) => (
          <ListItem button component={Link} href={`/simple/${item.id}`} key={item.id}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SimplePage;