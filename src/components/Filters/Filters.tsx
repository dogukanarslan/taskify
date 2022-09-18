import React from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

interface FiltersProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const Filters = (props: FiltersProps) => {
  const { title, setTitle } = props;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Row>
      <Col xs={{ size: 4, offset: 8 }}>
        <FormGroup>
          <Label>Search Task</Label>
          <Input
            type="text"
            value={title}
            placeholder="Enter a task"
            onChange={handleSearch}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};
