import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

interface FiltersProps {
  title: string;
  priority: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
}

export const Filters = (props: FiltersProps) => {
  const { title, priority, setTitle, setPriority } = props;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };

  return (
    <>
      <FormGroup>
        <Label>Search Task</Label>
        <Input
          type="text"
          value={title}
          placeholder="Enter a task"
          onChange={handleSearch}
        />
      </FormGroup>
      <FormGroup>
        <Label>Priority</Label>
        <Input type="select" value={priority} onChange={handleChangePriority}>
          <option value="">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Input>
      </FormGroup>
    </>
  );
};
