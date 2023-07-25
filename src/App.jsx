import { Flex } from "@chakra-ui/react";
import "./App.css";
import Books from "./components/Books/Books";
import Header from "./components/Header/Header";
import SelectedBooks from "./components/SelectedBooks/SelectedBooks";
import { Filter } from "./components/filter/Filter";
import { SelectedBookProvider } from "./context/SelectedBookProvider";

function App() {
  return (
    <SelectedBookProvider>
      <Header />
      <Filter />
      <Flex flexDirection="row">
        <section>
          <Books />
        </section>
        <section>
          <SelectedBooks />
        </section>
      </Flex>
    </SelectedBookProvider>
  );
}

export default App;
