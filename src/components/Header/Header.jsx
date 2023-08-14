import { Center, Text } from "@chakra-ui/react";
import { useBooks } from "../../context/SelectedBookProvider";

const Header = () => {
  const {
    books,
    selectedBooks,
    disabledBooksCount,
    filteredBooksState,
    genre,
  } = useBooks();

  return (
    <section>
      <Center>
        <Text
          textAlign="center"
          maxW={500}
          fontSize={20}
          fontWeight={700}
          border="2px solid black"
          borderColor="rgba(0,0,0,0.3)"
          borderRadius={10}
          p={10}
        >
          Available books to read {} {books.length - selectedBooks.length}
        </Text>
      </Center>
      {genre !== "" && (
        <Center>
          <Text
            border="2px solid black"
            borderColor="rgba(0,0,0,0.3)"
            borderRadius={10}
            fontSize={15}
            fontWeight={500}
            p={5}
          >
            Available books to read by category{" "}
            {filteredBooksState.length - disabledBooksCount}
          </Text>
        </Center>
      )}
      <Center>
        <Text
          border="2px solid black"
          borderColor="rgba(0,0,0,0.3)"
          borderRadius={10}
          fontSize={15}
          fontWeight={500}
          p={5}
        >
          Pending books to read: {selectedBooks.length}
        </Text>
      </Center>
    </section>
  );
};

export default Header;
