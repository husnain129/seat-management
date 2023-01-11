/* eslint-disable react/no-children-prop */
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from '@chakra-ui/react';

const SeatStatus = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      alignItems={'flex-start'}
      justifyContent="flex-start"
      p="5em"
      flexDir={'column'}
      gap="1em"
    >
      <HStack alignItems={'center'}>
        <Text minW={'5em'} fontSize={'1.5em'} fontWeight="semibold">
          Dates
        </Text>
        <InputGroup>
          <InputLeftAddon children="Start Date" />
          <Input type="date" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="End Date" />
          <Input type="date" />
        </InputGroup>
      </HStack>
      <HStack alignItems={'center'}>
        <Text minW={'5em'} fontSize={'1.5em'} fontWeight="semibold">
          Building
        </Text>
        <Input type="text" placeholder="Building number" />
      </HStack>
      <HStack alignItems={'center'}>
        <Text minW={'5em'} fontSize={'1.5em'} fontWeight="semibold">
          Floor
        </Text>
        <Input type="text" placeholder="Floor number" />
      </HStack>
    </Flex>
  );
};

export default SeatStatus;
