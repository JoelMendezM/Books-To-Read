import { useState } from "react";
import SelectedBookContext from "./selected-book-context";
import { useEffect } from "react";

const SelectedBookProvider = ({ children }) => {
  const [availableBooks, setAvailableBooks] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await response.json();
        const arrayBooks = data.library;

        return setAvailableBooks(arrayBooks);
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error:", error);
      }
    };

    fetchData("../../books.json");
  }, []);

  return (
    <SelectedBookContext.Provider
      value={{
        books: availableBooks,
      }}
    >
      {children}
    </SelectedBookContext.Provider>
  );
};

export default SelectedBookProvider;
