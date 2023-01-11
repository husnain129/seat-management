import { Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const currentUser =
    router.pathname.split('/')[1] === 'admin' ? 'Admin' : 'User';
  return (
    <VStack
      pr="2em"
      justifyContent={'flex-end'}
      alignItems="flex-end"
      minW={'full'}
      h="10vh"
    >
      <HStack>
        <Flex
          flexDir={'column'}
          alignItems={'flex-start'}
          justifyContent="flex-start"
        >
          <Text color={'#323232'} fontWeight="bold">
            Hi, {currentUser}
          </Text>
          <Button fontWeight={'light'} fontSize="sm" variant={'link'}>
            Logout
          </Button>
        </Flex>
        <Image
          src="https://www.refinery29.com/images/8829157.jpg"
          alt="Mr. Robot"
          borderRadius={'full'}
          objectFit="cover"
          boxSize="50px"
          cursor={'pointer'}
          onClick={() =>
            router.push(`${currentUser === 'Admin' ? '/' : '/admin'}`)
          }
        />
      </HStack>
    </VStack>
  );
};

export default Navbar;
