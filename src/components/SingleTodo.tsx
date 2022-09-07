import React, { FormEvent, useState } from 'react';
import { Badge, Form, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { ITodo } from '../model';
import { FiDelete, FiEdit, FiCheck } from 'react-icons/fi';
import './TodoList.scss';
import { deleteTodo, editTodo, toggleDone } from '../redux/slices/todosSlice';
interface SingleTodoProps {
  todo: ITodo;
  todos: ITodo[];
  dispatch: Dispatch;
}

export const SingleTodo = connect()((props: SingleTodoProps) => {
  const { dispatch, todo } = props;

  const [todoText, setTodoText] = useState<string>(todo.todo);
  const [edit, setEdit] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleDone = (id: number) => {
    dispatch(toggleDone(id));
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo({ id: todo.id, text: todoText }));

    setEdit(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between align-items-center">
        {edit ? (
          <Input
            className="w-50"
            type="text"
            value={todoText}
            onChange={handleEdit}
          />
        ) : (
          <div
            className={`d-flex align-items-center ${
              todo.isDone ? 'line-through' : ''
            }`}
          >
            {todo.todo}
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
        )}
        <div className="d-flex">
          <div
            className="todos__single-todo--icon p-2 mr-1 cursor-pointer"
            onClick={() => handleDelete(todo.id)}
          >
            <FiDelete />
          </div>
          <div
            className="todos__single-todo--icon p-2 mr-1 cursor-pointer"
            onClick={() => setEdit(!edit)}
          >
            <FiEdit />
          </div>
          <div
            className="todos__single-todo--icon p-2 cursor-pointer"
            onClick={() => handleDone(todo.id)}
          >
            <FiCheck />
          </div>
        </div>
      </div>
    </Form>
  );
});
