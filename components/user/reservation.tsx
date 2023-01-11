import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
const BookSeat = () => {
  return (
    <VStack
      w="full"
      h="100vh"
      alignItems={'center'}
      justifyContent="flex-start"
      pt="5em"
    >
      <TableContainer minW={'85%'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Dates</Th>
              <Th>Building</Th>
              <Th>Floor</Th>
              <Th>Seat</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </Tbody>
        </Table>
        <Flex w="full" alignItems={'center'} mt="2em" justifyContent="flex-end">
          <Button colorScheme={'blackAlpha'}>Save Changes</Button>
        </Flex>
      </TableContainer>
    </VStack>
  );
};

const TableRow = () => {
  return (
    <Tr>
      <Td>
        <VStack alignItems={'flex-start'}>
          <Text>12/3/2023</Text>
          <Box h="1px" w="2em" bg="black" />
          <Text>12/3/2023</Text>
        </VStack>
      </Td>
      <Td>Gav Uan</Td>
      <Td>12</Td>
      <Td>1205 A</Td>
      <Td>Confirm</Td>
    </Tr>
  );
};

export default BookSeat;
