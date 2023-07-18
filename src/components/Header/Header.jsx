import { useContext } from "react";
import SelectedBookContext from "../../context/selected-book-context";

const Header = () => {
  const { updatedAmount, selectedBooks } = useContext(SelectedBookContext);

  return (
    <section>
      <p>{updatedAmount} - Libros disponibles</p>
      <p>Libros por leer: {selectedBooks.length}</p>
    </section>
  );
};

export default Header;
