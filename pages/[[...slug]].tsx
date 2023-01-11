import Layout from 'layout';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Reservation = dynamic(() => import('@/components/user/reservation'), {
  ssr: false,
});

const BookSeat = dynamic(() => import('@/components/user/book-seat'), {
  ssr: false,
});

const Contact = dynamic(() => import('@/components/user/contact'), {
  ssr: false,
});

const Components = (route: string) => {
  switch (route) {
    case 'reservation':
      return <Reservation />;
    case 'book-seat':
      return <BookSeat />;
    case 'contact':
      return <Contact />;
    default:
      return <Reservation />;
  }
};

const Home: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const page = slug ? slug[0] : 'reservation';

  const RenderComponents = {
    [page]: Components(page),
  };

  return <Layout>{RenderComponents[page]}</Layout>;
};

export default Home;
