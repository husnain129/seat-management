import Layout from 'layout';
import { useRouter } from 'next/router';

// import PendingRequest from '@/components/admin/pending-request';
import dynamic from 'next/dynamic';

const PendingRequest = dynamic(
  () => import('@/components/admin/pending-request'),
  { ssr: false }
);

const SeatStatus = dynamic(() => import('@/components/admin/seat-status'), {
  ssr: false,
});
const Employee = dynamic(() => import('@/components/admin/employee'), {
  ssr: false,
});
const Report = dynamic(() => import('@/components/admin/report'), {
  ssr: false,
});

const Components = (route: string) => {
  switch (route) {
    case 'seat-status':
      return <SeatStatus />;
    case 'employees':
      return <Employee />;
    case 'report':
      return <Report />;
    default:
      return <PendingRequest />;
  }
};

const Admin = () => {
  const router = useRouter();
  const { slug } = router.query;
  const page = slug ? slug[0] : 'pending-request';

  const RenderComponents = {
    [page]: Components(page),
  };

  return <Layout>{RenderComponents[page]}</Layout>;
};

export default Admin;
