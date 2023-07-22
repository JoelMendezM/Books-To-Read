import { useBooks } from '../../context/SelectedBookProvider';

const Header = () => {
  const { books, selectedBooks } = useBooks();
  return (
    <section>
      <p>{books.length - selectedBooks.length} - Libros disponibles</p>
      <p>Libros por leer: {selectedBooks.length}</p>
    </section>
  );
};

export default Header;
