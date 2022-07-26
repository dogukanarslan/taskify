import React, { FormEvent, useState } from 'react';
import { Badge, Button, Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { ITodo } from '../model';
import {
  FiDelete,
  FiEdit,
  FiCheck,
  FiMinus,
  FiSave,
  FiX,
} from 'react-icons/fi';
import { deleteTodo, editTodo, toggleDone } from '../redux/slices/todosSlice';
import { addToast } from '../redux/slices/toastsSlice';

interface SingleTodoProps {
  todo: ITodo;
  todos: ITodo[];
  dispatch: Dispatch;
}

export const SingleTodo = connect()((props: SingleTodoProps) => {
  const { dispatch, todo } = props;

  const [todoText, setTodoText] = useState<string>(todo.todo);
  const [priority, setPriority] = useState<string>(todo.priority);
  const [edit, setEdit] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
    dispatch(
      addToast({
        header: 'Delete Task',
        body: 'Task deleted!',
        type: 'danger',
      })
    );
  };

  const handleDone = (id: number) => {
    dispatch(toggleDone(id));
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo({ id: todo.id, text: todoText, priority }));

    setEdit(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between align-items-center">
        {edit ? (
          <>
            <Input
              className="w-50 mx-2"
              type="text"
              value={todoText}
              onChange={handleEdit}
            />

            <div className="d-flex">
              <div className="d-flex flex-column align-items-center">
                <Badge
                  href="#"
                  color="danger"
                  onClick={() => setPriority('high')}
                >
                  High
                </Badge>
                {priority === 'high' && <FiMinus />}
              </div>
              <div className="d-flex flex-column align-items-center">
                <Badge
                  className="ml-2"
                  href="#"
                  color="warning"
                  onClick={() => setPriority('medium')}
                >
                  Medium
                </Badge>
                {priority === 'medium' && <FiMinus />}
              </div>
              <div className="d-flex flex-column align-items-center">
                <Badge
                  className="ml-2"
                  href="#"
                  color="success"
                  onClick={() => setPriority('low')}
                >
                  Low
                </Badge>
                {priority === 'low' && <FiMinus />}
              </div>
            </div>
            <div className="d-flex">
              <Button color="link" type="submit">
                <FiSave />
              </Button>
              <Button color="link" onClick={() => setEdit(false)}>
                <FiX />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <span className={todo.isDone ? 'line-through' : ''}>
                {todo.todo}
              </span>
              <Badge
                className="ml-2"
                color={
                  todo.priority === 'high'
                    ? 'danger'
                    : todo.priority === 'medium'
                    ? 'warning'
                    : 'success'
                }
              >
                {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
              </Badge>
            </div>
            <div className="d-flex">
              <Button color="link" onClick={() => handleDelete(todo.id)}>
                <FiDelete />
              </Button>
              <Button color="link" onClick={() => setEdit(!edit)}>
                <FiEdit />
              </Button>
              <Button color="link" onClick={() => handleDone(todo.id)}>
                <FiCheck />
              </Button>
            </div>
          </>
        )}
      </div>
    </Form>
  );
});
