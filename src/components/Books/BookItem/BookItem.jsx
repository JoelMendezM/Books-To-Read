import { Button, Card, CardBody, Image } from "@chakra-ui/react";
import { useContext } from "react";
import SelectedBookContext from "../../../context/selected-book-context";

const BookItem = ({ cover }) => {
  const { addBook } = useContext(SelectedBookContext);

  const addBookHandler = () => {
    addBook();
  };

  return (
    <>
      <Card>
        <CardBody>
          <Image
            src={cover}
            alt="image cover book"
            borderRadius="lg"
            maxW="180px"
            maxH="250px"
          />
        </CardBody>
        <Button onClick={addBookHandler}> Add</Button>
      </Card>
    </>
  );
};

export default BookItem;
