import { Select } from "@chakra-ui/react";
import { Children } from "react";
import { useSelect } from "./useSelect";

export const Filter = () => {
  const { options, handleGenre } = useSelect();

  return (
    <Select placeholder="Select a movie genre" onChange={handleGenre} m={5}>
      {/*Children.toArray to create unique children and about to put the key */}
      {Children.toArray(
        options.map((option) => {
          return <option value={option.id}>{option.text}</option>;
        })
      )}
    </Select>
  );
};
