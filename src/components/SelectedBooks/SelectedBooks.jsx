import { Center, Container, Flex, Text } from "@chakra-ui/react";
import BookItem from "../Books/BookItem/BookItem";
import { useBooks } from "../../context/SelectedBookProvider";

const SelectedBooks = () => {
  const { selectedBooks } = useBooks();

  return (
    <Container bgColor="#3a3a3a" p={10} borderRadius={10} ml={10} mr={20}>
      {selectedBooks.length === 0 && (
        <Center>
          <Text color="white" fontSize={20}>
            There is no pending books to read
          </Text>
        </Center>
      )}
      <Flex flexWrap="wrap" gap={1} justifyContent="center">
        {selectedBooks.map((book) => (
          <BookItem
            key={book.book.ISBN}
            id={book.book.ISBN}
            cover={book.book.cover}
            idx={"selectedBooks"}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default SelectedBooks;
