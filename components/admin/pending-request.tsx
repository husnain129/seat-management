import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { FiAlertTriangle } from 'react-icons/fi';
const PendingRequest = () => {
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
              <Th>Request</Th>
              <Th>ID</Th>
              <Th>Requestor</Th>
              <Th>Dates</Th>
              <Th>Building</Th>
              <Th>Floor</Th>
              <Th>Seat</Th>
              <Th>Aler</Th>
              <Th>Approval</Th>
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
      <Td>00012</Td>
      <Td>976</Td>
      <Td>Isreal Isreali</Td>
      <Td>12/3/2023</Td>
      <Td>Gav Uan</Td>
      <Td>12</Td>
      <Td>1205 A</Td>
      <Td>
        <FiAlertTriangle />
      </Td>
      <Td>Deny</Td>
    </Tr>
  );
};

export default PendingRequest;
