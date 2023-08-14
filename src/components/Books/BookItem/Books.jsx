import BookItem from "./BookItem";
import { Flex } from "@chakra-ui/react";
import { useBooks } from "../../../context/SelectedBookProvider";

const Books = () => {
  const { books, filteredBooksState, genre } = useBooks();

  return (
    <Flex flexWrap="wrap" justifyContent="center" gap={4}>
      {/*Children.toArray to create unique children and about to put the key */}
      {(genre === "" ? books : filteredBooksState).map((book) => {
        return (
          <BookItem
            key={book.book.ISBN}
            id={book.book.ISBN}
            cover={book.book.cover}
            idx={"availableBooks"}
          />
        );
      })}
    </Flex>
  );
};

export default Books;
