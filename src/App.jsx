import "./App.css";
// import BookSearch from "./components/Books/BookSearch/BookSearch";
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
      {/* <BookSearch /> */}
      <Books />
      <section>
        <p>LIBROS SELECCIONADOS</p>
        <SelectedBooks />
      </section>
    </SelectedBookProvider>
  );
}

export default App;
