import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';

const SidebarData = {
  admin: [
    {
      text: 'Pending Request',
      url: '/admin',
    },

    {
      text: 'Seat Status',
      url: '/admin/seat-status',
    },
    {
      text: 'Employees',
      url: '/admin/employees',
    },
    {
      text: 'Report',
      url: '/admin/report',
    },
  ],
  user: [
    {
      text: 'My Reservation',
      url: '/',
    },

    {
      text: 'Book a Seat',
      url: '/book-seat',
    },
    {
      text: 'Contact Us',
      url: '/contact',
    },
  ],
};
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  const currentUser =
    router.pathname.split('/')[1] === 'admin' ? 'admin' : 'user';
  console.log(currentUser, selected, router.query);

  useLayoutEffect(() => {
    const { slug } = router.query;
    console.log(' ---- ' + slug);
    if (slug === undefined) {
      setSelected(0);
    } else if (slug[0] === 'seat-status' || slug[0] === 'book-seat') {
      setSelected(1);
    } else if (slug[0] === 'employees' || slug[0] === 'contact') {
      setSelected(2);
    } else if (slug[0] === 'report') {
      setSelected(3);
    }
  }, [router]);
  return (
    <VStack
      minW={'20vw'}
      gap=".5em"
      borderRight={'1px solid #323232'}
      maxH="80vh"
      pt={'2em'}
    >
      {SidebarData[currentUser].map((s, idx) => (
        <Flex
          mx="1em"
          h="2.5em"
          pl={'1em'}
          alignItems="center"
          w={'90%'}
          key={idx}
          border={`1px solid ${selected === idx ? 'transparent' : '#323232'}`}
          bg={selected === idx ? '#323232' : 'transparent'}
          gap="1.5em"
          borderRadius={'5px'}
          cursor="pointer"
          onClick={() => {
            setSelected(idx);
            console.log(s.url);
            router.push(s.url);
          }}
        >
          <Box w="2px" h="40%" bg={selected === idx ? 'white' : '#323232'} />
          <Text color={selected === idx ? 'white' : '#323232'}>{s.text}</Text>
        </Flex>
      ))}
    </VStack>
  );
};

export default Sidebar;
