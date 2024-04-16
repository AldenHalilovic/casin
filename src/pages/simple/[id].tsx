import { Box } from '@mui/material';
import { useRouter } from 'next/router';

export default function SimplePage() {
  const router = useRouter();
  const { id } = router.query;

  const data = { html: `<p>This is the content for page ${id}</p>` };

  return <Box dangerouslySetInnerHTML={{ __html: data.html }} />;
}