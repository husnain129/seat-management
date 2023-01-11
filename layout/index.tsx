import { Divider, Flex, Text } from '@chakra-ui/react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex
      minW={'100vw'}
      flexDir="column"
      minH="100vh"
      maxH={'100vh'}
      overflow={'hidden'}
    >
      <Navbar />
      <Text pl={'.5em'} fontSize={'2em'} mb="1em" fontWeight="bold">
        Seating Management System
      </Text>
      <Divider />
      <Flex minW={'100vw'} minH="80vh">
        <Sidebar />
        <Flex w="full" h="full" overflow={'auto'}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
