import "./App.css";
import Books from "./components/Books/Books";
import Header from "./components/Header/Header";
import SelectedBooks from "./components/SelectedBooks/SelectedBooks";
import SelectedBookProvider from "./context/SelectedBookProvider";

function App() {
  return (
    <SelectedBookProvider>
      <Header />
      <Books />
      <section>
        <p>LIBROS SELECCIONADOS</p>
        <SelectedBooks />
      </section>
    </SelectedBookProvider>
  );
}

export default App;
