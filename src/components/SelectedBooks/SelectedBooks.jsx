import { Grid, GridItem } from '@chakra-ui/react';
import BookItem from '../Books/BookItem/BookItem';
import { useBooks } from '../../context/SelectedBookProvider';
import { REMOVE } from '../../context/types';

const SelectedBooks = () => {
  const { selectedBooks } = useBooks();

  return (
    <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)' rowGap={1} columnGap={5}>
      {selectedBooks.map((book) => (
        <GridItem key={book.book.ISBN}>
          <BookItem key={book.book.ISBN} id={book.book.ISBN} cover={book.book.cover} idx={'selectedBooks'} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default SelectedBooks;
