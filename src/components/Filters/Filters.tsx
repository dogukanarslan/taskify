import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

interface FiltersProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = (props: FiltersProps) => {
  const { title, setTitle } = props;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <FormGroup>
      <Label>Search Task</Label>
      <Input
        type="text"
        value={title}
        placeholder="Enter a task"
        onChange={handleSearch}
      />
    </FormGroup>
  );
};

export default Filters;
