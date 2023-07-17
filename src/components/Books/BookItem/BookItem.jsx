import { Card, CardBody, Image } from "@chakra-ui/react";

const BookItem = ({ cover }) => {
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
      </Card>
    </>
  );
};

export default BookItem;
