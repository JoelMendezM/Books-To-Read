import { useEffect, useState } from "react";
import { Button, Card, CardBody, Center, Image } from "@chakra-ui/react";
import { useBooks } from "../../../context/SelectedBookProvider";
import { ADD, REMOVE } from "../../../context/types";

const BookItem = ({ cover, id, idx }) => {
  const { addBook, removeBook, selectedBooks } = useBooks();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(selectedBooks.some((book) => book.book.ISBN === id));
  }, [selectedBooks, id, isAdded]);

  const handleBookState = () => {
    if (idx === "availableBooks") {
      addBook(id);
      setIsAdded(true);
    } else {
      removeBook(id);
      setIsAdded(false);
    }
  };

  return (
    <>
      <Card
        opacity={isAdded && idx === "availableBooks" ? 0.5 : 1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={10}
        border="1mm ridge #474747aa;"
        p={3}
        maxH={260}
      >
        <CardBody alignItems="center" minH={120} m={2}>
          <Image
            src={cover}
            maxW="150px"
            maxH="220px"
            alt="image cover book"
            w="100%"
            h="auto"
            objectFit="cover"
          />
        </CardBody>
        <Center>
          <Button
            w={80}
            h={30}
            isDisabled={isAdded && idx === "availableBooks"}
            onClick={handleBookState}
            opacity={isAdded && idx === "availableBooks" ? 0.3 : 1}
          >
            {idx === "availableBooks" ? ADD : REMOVE}
          </Button>
        </Center>
      </Card>
    </>
  );
};

export default BookItem;
