import { Center, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import BookItem from "../Books/BookItem/BookItem";
import { useBooks } from "../../context/SelectedBookProvider";

const SelectedBooks = () => {
  const { selectedBooks } = useBooks();

  return (
    <Container bgColor="#3a3a3a" p={10} borderRadius={10} ml={10}>
      {selectedBooks.length === 0 && (
        <Center>
          <Text color="white" fontSize={20}>
            There is no pending books to read
          </Text>
        </Center>
      )}
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        rowGap={1}
        columnGap={5}
      >
        {selectedBooks.map((book) => (
          <GridItem key={book.book.ISBN} m={2}>
            <BookItem
              key={book.book.ISBN}
              id={book.book.ISBN}
              cover={book.book.cover}
              idx={"selectedBooks"}
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default SelectedBooks;
