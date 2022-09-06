import { Dispatch } from '@reduxjs/toolkit';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addTodo } from '../redux/slices/todosSlice';

interface InputFieldProps {
  dispatch: Dispatch;
}

export const InputField = connect()((props: InputFieldProps) => {
  const { dispatch } = props;

  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('');

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleChangePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) {
      return;
    }

    setTodo('');
    setPriority('');
    dispatch(addTodo({ id: Date.now(), isDone: false, todo, priority }));
  };

  return (
    <Form className="mb-4" onSubmit={handleAdd}>
      <FormGroup>
        <Label>Task Name</Label>
        <Input
          type="text"
          value={todo}
          placeholder="Enter a task"
          onChange={handleChangeTodo}
        />
      </FormGroup>

      <FormGroup>
        <Label>Priority</Label>
        <Input type="select" value={priority} onChange={handleChangePriority}>
          <option disabled value="">
            Select Priority
          </option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Input>
      </FormGroup>

      <Button color="primary" type="submit">
        Add
      </Button>
    </Form>
  );
});
