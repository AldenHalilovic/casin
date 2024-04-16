import { useRouter } from 'next/router';
import AccordionPage from '../pages/accordion/index';
import ExternalUrlPage from '../pages/externalurl/index';
import ContactPage from '../pages/contact/index';
import GridPage from '../pages/grid/index';
import SimplePage from '../pages/simple/index';
import data from '../api/data.json'; 

const ExpressPage = ({ pageData }: { pageData: any }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  switch (pageData.type) {
    case 'accordion':
      return <AccordionPage data={pageData} />;
    case 'externalUrl':
      return <ExternalUrlPage data={pageData} />;
    case 'contact':
      return <ContactPage data={pageData} />;
    case 'grid':
      return <GridPage data={pageData} />;
    case 'simple':
      return <SimplePage data={pageData} />;
    default:
      return <div>Unknown page type</div>;
  }
};

export async function getStaticPaths() {
  const paths = Object.keys(data).map((page) => ({
    params: { page },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { page: keyof typeof data } }) {
  const pageData = data[params.page];

  return { props: { pageData } };
}

export default ExpressPage;