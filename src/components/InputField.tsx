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
  const [errors, setErrors] = useState({
    todo: '',
    priority: '',
  });

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleChangePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };

  const validate = () => {
    let todoError = '',
      priorityError = '';

    if (!todo) {
      todoError = 'Task name is required.';
    }

    if (!priority) {
      priorityError = 'Priority is required.';
    }

    setErrors({ todo: todoError, priority: priorityError });
    if (todoError || priorityError) {
      return false;
    } else {
      return true;
    }
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setTodo('');
      setPriority('');
      dispatch(addTodo({ id: Date.now(), isDone: false, todo, priority }));
    }
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
        {errors.todo && <p className="text-danger">{errors.todo}</p>}
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
        {errors.priority && <p className="text-danger">{errors.priority}</p>}
      </FormGroup>

      <Button color="primary" type="submit">
        Add
      </Button>
    </Form>
  );
});
