import { Button, Card, CardBody, Image } from "@chakra-ui/react";
import { useContext, useState } from "react";
import SelectedBookContext from "../../../context/selected-book-context";

const BookItem = ({ cover, id }) => {
  const { addBook } = useContext(SelectedBookContext);
  const [isClicked, setIsClicked] = useState(false);

  const addBookHandler = () => {
    addBook(id);
    setIsClicked(true);
  };

  return (
    <>
      <Card opacity={isClicked ? 0.5 : 1}>
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
          isDisabled={isClicked ? true : false}
          onClick={addBookHandler}
          opacity={isClicked ? 0.3 : 1}
        >
          Add
        </Button>
      </Card>
    </>
  );
};

export default BookItem;
