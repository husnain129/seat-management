/* eslint-disable react/no-children-prop */
import {
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
} from '@chakra-ui/react';

const Report = () => {
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
          Type of Report
        </Text>
        <Select placeholder="Select option">
          <option value="option2">Permanent</option>
          <option value="option3">Flex</option>
        </Select>
      </HStack>
      <Flex w="full" alignItems={'center'} justifyContent="flex-end">
        <Button colorScheme={'blackAlpha'}>Export</Button>
      </Flex>
    </Flex>
  );
};

export default Report;
