import { Button, Flex, HStack, Input, Select, Text } from '@chakra-ui/react';

const Employee = () => {
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
      <HStack>
        <Text minW={'8em'} fontSize={'1.5em'} fontWeight="semibold">
          Employee ID
        </Text>
        <Input placeholder="Employee Id" />
      </HStack>
      <HStack>
        <Text minW={'8em'} fontSize={'1.5em'} fontWeight="semibold">
          Employee Name
        </Text>
        <Input placeholder="Employee Name" />
      </HStack>
      <HStack>
        <Text minW={'8em'} fontSize={'1.5em'} fontWeight="semibold">
          Eligible Seat
        </Text>
        <Select placeholder="Select option">
          <option value="option2">Permanent</option>
          <option value="option3">Flex</option>
        </Select>
      </HStack>
      <Flex mt="2em" w="full" alignItems={'center'} justifyContent="flex-end">
        <Button colorScheme={'blackAlpha'}>Save</Button>
      </Flex>
    </Flex>
  );
};

export default Employee;
