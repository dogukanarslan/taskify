import React, { FormEvent, useState } from "react";
import { Todo } from "../model";
import { FiDelete, FiEdit, FiCheck } from "react-icons/fi";

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
    <form className="todos__single-todo" onSubmit={handleSubmit}>
      {edit ? (
        <input
          className="todos__single-todo--text"
          type="text"
          value={todoText}
          onChange={handleEdit}
        />
      ) : (
        <span
          className={`todos__single-todo--text ${
            todo.isDone ? "todos__single-todo--text-done" : ""
          }`}
        >
          {todo.todo}
        </span>
      )}
      <div>
        <span
          className="todos__single-todo--icon"
          onClick={() => handleDelete(todo.id)}
        >
          <FiDelete />
        </span>
        <span
          className="todos__single-todo--icon"
          onClick={() => setEdit(!edit)}
        >
          <FiEdit />
        </span>
        <span
          className="todos__single-todo--icon"
          onClick={() => handleDone(todo.id)}
        >
          <FiCheck />
        </span>
      </div>
    </form>
  );
};
