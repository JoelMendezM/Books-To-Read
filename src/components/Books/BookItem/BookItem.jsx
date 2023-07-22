import { useEffect, useState } from "react";
import { Button, Card, CardBody, Image } from "@chakra-ui/react";
import { useBooks } from "../../../context/SelectedBookProvider";
import { ADD, REMOVE } from "../../../context/types";

const BookItem = ({ cover, id, idx }) => {
  const { addBook, removeBook, selectedBooks } = useBooks();

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(selectedBooks.some((book) => book.book.ISBN === id));
  }, [selectedBooks, id]);

  const handleBookState = () => {
    if (idx === "availableBooks") {
      addBook(id);
    } else {
      removeBook(id);
    }
  };

  return (
    <>
      <Card opacity={isAdded && idx === "availableBooks" ? 0.5 : 1}>
        <CardBody>
          <Image
            src={cover}
            alt="image cover book"
            borderRadius="lg"
            maxW="180px"
            maxH="250px"
          />
        </CardBody>
        <Button
          isDisabled={isAdded && idx === "availableBooks"}
          onClick={handleBookState}
          opacity={isAdded && idx === "availableBooks" ? 0.3 : 1}
        >
          {idx === "availableBooks" ? ADD : REMOVE}
        </Button>
      </Card>
    </>
  );
};

export default BookItem;
