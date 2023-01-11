/* eslint-disable react/no-children-prop */
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const BookSeat = () => {
  const Components = {
    Dates: <Dates />,
    Building: <Building />,
    Floor: <Floor />,
    Seat: <Floor />,
  };
  const [selected, setSelected] = useState(0);
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
      <VStack alignItems={'flex-start'} justifyContent="flex-start">
        {Object.keys(Components).map((key, idx) => (
          <HStack alignItems={'center'} justifyContent="flex-start" key={idx}>
            <Text
              cursor={'pointer'}
              textDecoration={selected === idx ? 'underline' : 'none'}
              minW={'8em'}
              fontSize={'1.5em'}
              onClick={() => setSelected(idx)}
            >
              {key}
            </Text>
            {selected === idx && Components[key as keyof typeof Components]}
          </HStack>
        ))}
      </VStack>
    </Flex>
  );
};

const Dates = () => {
  return (
    <HStack>
      <InputGroup>
        <InputLeftAddon children="Start Date" />
        <Input type="date" />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="End Date" />
        <Input type="date" />
      </InputGroup>
    </HStack>
  );
};

const Building = () => {
  return (
    <VStack alignItems={'flex-start'} gap="1em">
      <HStack>
        <Text minW={'8em'} fontSize={'1.5em'} fontWeight="semibold">
          Employee ID
        </Text>
        <Input placeholder="Employee Name" />
      </HStack>
      <HStack>
        <InputGroup>
          <InputLeftAddon children="Start Date" />
          <Input type="date" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="End Date" />
          <Input type="date" />
        </InputGroup>
      </HStack>
    </VStack>
  );
};

const Floor = () => {
  return (
    <VStack alignItems={'flex-start'} gap="1em">
      <HStack>
        <Text minW={'8em'} fontSize={'1.5em'} fontWeight="semibold">
          Employee ID
        </Text>
        <Input placeholder="Employee Name" />
      </HStack>
      <HStack>
        <Text minW={'8em'} fontSize={'1.5em'} fontWeight="semibold">
          Floor Number
        </Text>
        <Input placeholder="Employee Name" />
      </HStack>
      <HStack>
        <InputGroup>
          <InputLeftAddon children="Start Date" />
          <Input type="date" />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="End Date" />
          <Input type="date" />
        </InputGroup>
      </HStack>
    </VStack>
  );
};

export default BookSeat;
