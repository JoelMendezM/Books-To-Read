import { useContext } from "react";
import SelectedBookContext from "../../context/selected-book-context";
import { Grid, GridItem } from "@chakra-ui/react";
import BookItem from "../Books/BookItem/BookItem";

const SelectedBooks = () => {
  const { selectedBooks } = useContext(SelectedBookContext);

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      rowGap={1}
      columnGap={5}
    >
      {selectedBooks.map((book) => (
        <GridItem key={book.book.ISBN}>
          <BookItem
            key={book.book.ISBN}
            id={book.book.ISBN}
            cover={book.book.cover}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default SelectedBooks;
