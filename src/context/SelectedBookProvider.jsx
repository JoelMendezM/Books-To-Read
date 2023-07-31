import { useContext, useState, createContext, useRef } from "react";
import { useEffect } from "react";
import { ADD, MOVIE_GENRE, REMOVE } from "./types";

const SelectedBookContext = createContext({ items: [] });

const SelectedBookProvider = ({ children }) => {
  const [availableBooks, setAvailableBooks] = useState([]);
  const [filteredBooksState, setFilteredBooksState] = useState([]);
  const [selectedBook, setSelectedBook] = useState(() => {
    const storedData = localStorage.getItem("booksSelected");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [genre, setGenre] = useState("");
  const [disabledBooksCount, setDisabledBooksCount] = useState(0);
  const [addedBooks, setAddedBooks] = useState({});

  const algoCRUD = useRef();

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        const arrayBooks = data.library;
        setAvailableBooks(arrayBooks);

        const _evaluation = MOVIE_GENRE.hasOwnProperty(genre);

        if (_evaluation) {
          const genreToFilter = MOVIE_GENRE[genre];
          const filteredBooks = arrayBooks.filter(
            (data) => data.book.genre === genreToFilter
          );
          setFilteredBooksState(filteredBooks);

          const countDisabledBooks = filteredBooks.reduce(
            (count, book) => (addedBooks[book.book.ISBN] ? count + 1 : count),
            0
          );

          setDisabledBooksCount(countDisabledBooks);

          localStorage.setItem("availableBooks", JSON.stringify(filteredBooks));
          localStorage.setItem("booksSelected", JSON.stringify(selectedBook));
        }
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
      }
    };
    localStorage.setItem("booksSelected", JSON.stringify(selectedBook));
    localStorage.setItem("genre", JSON.stringify(genre));
    fetchData("./books.json");

    window.addEventListener("storage", (event) => {
      if (event.key === "booksSelected" && event.newValue && genre === "") {
        const newAvailableBooks = JSON.parse(event.newValue);
        setSelectedBook(newAvailableBooks);
      }
    });

    return () => {
      window.removeEventListener("storage", () => {});
    };
  }, [genre, selectedBook, addedBooks]);

  const addBook = (ISBN) => {
    algoCRUD.current = ADD;
    const existingBook = availableBooks.find((book) => book.book.ISBN === ISBN);
    if (existingBook) {
      setSelectedBook((prevSelectedBook) => [
        ...prevSelectedBook,
        existingBook,
      ]);

      setAddedBooks((prevAddedBooks) => ({
        ...prevAddedBooks,
        [ISBN]: true,
      }));
    }
  };

  const removeBook = (ISBN) => {
    algoCRUD.current = REMOVE;
    const itemToRemove = selectedBook.filter((book) => book.book.ISBN !== ISBN);
    setSelectedBook(itemToRemove);
    setAddedBooks((prevAddedBooks) => ({
      ...prevAddedBooks,
      [ISBN]: false,
    }));
  };

  const store = {
    numberOfAvailableBooks: availableBooks.length,
    books: availableBooks,
    selectedBooks: selectedBook,
    addBook,
    removeBook,
    algoCRUD,
    genre,
    setGenre,
    setSelectedBook,
    filteredBooksState,
    disabledBooksCount,
  };

  return (
    <SelectedBookContext.Provider value={store}>
      {children}
    </SelectedBookContext.Provider>
  );
};

const useBooks = () => {
  const context = useContext(SelectedBookContext);
  if (context === undefined) {
    throw new Error("you dont have scope");
  }
  return context;
};

export { SelectedBookProvider, useBooks };
