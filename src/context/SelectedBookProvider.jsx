import { useContext, useState, createContext, useRef } from "react";
import { useEffect } from "react";
import { ADD, MOVIE_GENRE, REMOVE } from "./types";

const SelectedBookContext = createContext({ items: [] });

const SelectedBookProvider = ({ children }) => {
  const [availableBooks, setAvailableBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(() => {
    const storedData = localStorage.getItem("booksSelected");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [genre, setGenre] = useState("");

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
          setAvailableBooks(filteredBooks);
        }
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
      }
      localStorage.setItem("booksSelected", JSON.stringify(selectedBook));
    };

    fetchData("./books.json");
  }, [genre, selectedBook]);

  const addBook = (ISBN) => {
    algoCRUD.current = ADD;
    const existingBook = availableBooks.find((book) => book.book.ISBN === ISBN);
    if (existingBook) {
      setSelectedBook((prevSelectedBook) => [
        ...prevSelectedBook,
        existingBook,
      ]);
    }
  };

  const removeBook = (ISBN) => {
    algoCRUD.current = REMOVE;
    const itemToRemove = selectedBook.filter((book) => book.book.ISBN !== ISBN);
    setSelectedBook(itemToRemove);
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
