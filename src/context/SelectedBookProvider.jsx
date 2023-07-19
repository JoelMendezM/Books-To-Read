import { useState } from "react";
import SelectedBookContext from "./selected-book-context";
import { useEffect } from "react";

const SelectedBookProvider = ({ children }) => {
  const [availableBooks, setAvailableBooks] = useState([]);
  const [updatedAmount, setUpdatedAmount] = useState(availableBooks.length);
  const [selectedBook, setSelectedBook] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        const arrayBooks = data.library;
        setUpdatedAmount(arrayBooks.length);

        return setAvailableBooks(arrayBooks);
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
      }
    };

    fetchData("../../books.json");
  }, []);

  const addBook = (ISBN) => {
    setUpdatedAmount((updatedAmount) => updatedAmount - 1);
    const existingBook = availableBooks.find((book) => book.book.ISBN === ISBN);

    if (existingBook) {
      setSelectedBook((prevSelectedBook) => [
        ...prevSelectedBook,
        existingBook,
      ]);
    }
  };

  const removeBook = () => {};

  return (
    <SelectedBookContext.Provider
      value={{
        numberOfAvailableBooks: availableBooks.length,
        books: availableBooks,
        selectedBooks: selectedBook,
        addBook,
        removeBook,
        updatedAmount: updatedAmount,
      }}
    >
      {children}
    </SelectedBookContext.Provider>
  );
};

export default SelectedBookProvider;
