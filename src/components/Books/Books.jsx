import BookItem from "./BookItem/BookItem";
import { Grid, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import SelectedBookContext from "../../context/selected-book-context";

const Books = () => {
  const { books, buttonIsClicked } = useContext(SelectedBookContext);

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      rowGap={1}
      columnGap={5}
    >
      {books.map((book) => (
        <GridItem key={book.book.ISBN}>
          <BookItem
            key={book.book.ISBN}
            id={book.book.ISBN}
            cover={book.book.cover}
            isClicked={buttonIsClicked}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Books;
