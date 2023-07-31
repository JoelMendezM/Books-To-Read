import { useBooks } from "../../context/SelectedBookProvider";

const Header = () => {
  const {
    books,
    selectedBooks,
    disabledBooksCount,
    filteredBooksState,
    genre,
  } = useBooks();

  return (
    <section>
      <p>
        Available books to read {} {books.length - selectedBooks.length}
      </p>
      {genre !== "" && (
        <p>
          Available books to read by category{" "}
          {filteredBooksState.length - disabledBooksCount}
        </p>
      )}

      <p>Pending books to read: {selectedBooks.length}</p>
    </section>
  );
};

export default Header;
