import { Select } from '@chakra-ui/react';
import React, { Children } from 'react';
import { useSelect } from './useSelect';

export const Filter = () => {
  const { options, handleGenre } = useSelect();

  return (
    <Select placeholder='Movie genre' onChange={handleGenre} m={5}>
      {Children.toArray(
        options.map((option) => {
          return <option value={option.id}>{option.text}</option>;
        })
      )}
    </Select>
  );
};
