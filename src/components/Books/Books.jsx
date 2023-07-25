import { Children } from "react";
import BookItem from "./BookItem/BookItem";
import { Grid, GridItem } from "@chakra-ui/react";
import { useBooks } from "../../context/SelectedBookProvider";

const Books = () => {
  const { books } = useBooks();

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      rowGap={1}
      columnGap={5}
      bgColor="#3a3a3a"
      p={10}
      borderRadius={10}
      ml={10}
    >
      {/*Children.toArray to create unique children and about to put the key */}
      {Children.toArray(
        books.map((book) => {
          return (
            <GridItem m={2}>
              <BookItem
                id={book.book.ISBN}
                cover={book.book.cover}
                idx={"availableBooks"}
              />
            </GridItem>
          );
        })
      )}
    </Grid>
  );
};

export default Books;
