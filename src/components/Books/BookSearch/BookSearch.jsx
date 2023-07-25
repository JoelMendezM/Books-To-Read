import { useState } from "react";
import booksData from "../../../../public/books.json";
import { useBooks } from "../../../context/SelectedBookProvider";

const BookSearchApp = () => {
  const { books } = useBooks();
  console.log(books, "test");

  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = booksData.library.filter((book) =>
    book.book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar libro por título"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredBooks.length === 0 ? (
        <p>No se encontraron resultados.</p>
      ) : (
        filteredBooks.map((book) => (
          <div key={book.book.ISBN}>
            <h2>{book.book.title}</h2>
            <p>Author: {book.book.author.name}</p>
            {/* Add other book details as needed */}
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default BookSearchApp;
