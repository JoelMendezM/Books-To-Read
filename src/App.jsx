import { Flex } from "@chakra-ui/react";
import "./App.css";
// import BookSearch from "./components/Books/BookSearch/BookSearch";
import Books from "./components/Books/BookItem/Books";
import Header from "./components/Header/Header";
import SelectedBooks from "./components/SelectedBooks/SelectedBooks";
import { Filter } from "./components/filter/Filter";
import { SelectedBookProvider } from "./context/SelectedBookProvider";
// import Hero from "./components/Hero/Hero";

function App() {
  return (
    <SelectedBookProvider>
      {/* <Hero /> */}
      <Header />
      <Filter />
      <Flex mb={20}>
        <Books />
        <SelectedBooks />
      </Flex>
      {/* <BookSearch /> */}
    </SelectedBookProvider>
  );
}
export default App;
