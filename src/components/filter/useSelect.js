import { useBooks } from "../../context/SelectedBookProvider";

export const useSelect = () => {
  const { setGenre } = useBooks();

  const handleGenre = (elm) => {
    setGenre(elm.target.value);
  };

  const options = [
    {
      id: "",
      text: "Select a movie genre",
    },
    {
      id: "Terror",
      text: "Terror",
    },
    {
      id: "Ciencia ficción",
      text: "SCI-FI",
    },
    {
      id: "Zombies",
      text: "Zombie",
    },
    {
      id: "Fantasía",
      text: "Fantasy",
    },
  ];

  return { options, handleGenre };
};
