import React, { FormEvent, useState } from 'react';
import { Form, Input } from 'reactstrap';
import { Todo } from '../model';
import { FiDelete, FiEdit, FiCheck } from 'react-icons/fi';
import './TodoList.scss';
interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo = (props: SingleTodoProps) => {
  const { todo, todos, setTodos } = props;

  const [todoText, setTodoText] = useState<string>(todo.todo);
  const [edit, setEdit] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handleDone = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodos = todos.map((item) => {
      if (todo.id === item.id) {
        return { ...todo, todo: todoText };
      }

      return item;
    });
    setTodos(newTodos);
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
            className="todos__single-todo--icon p-2"
            onClick={() => handleDone(todo.id)}
          >
            <FiCheck />
          </div>
        </div>
      </div>
    </Form>
  );
};
