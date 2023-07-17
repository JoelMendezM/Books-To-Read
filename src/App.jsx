import "./App.css";
import Books from "./components/Books/Books";
import Header from "./components/Header/Header";
import SelectedBookProvider from "./context/SelectedBookProvider";

function App() {
  return (
    <SelectedBookProvider>
      <Header />
      <Books />
    </SelectedBookProvider>
  );
}

export default App;
