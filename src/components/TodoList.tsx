import React from "react";
import { Todo } from "../model";
import { SingleTodo } from "./SingleTodo";
import "./TodoList.scss";

interface TodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = (props: TodosProps) => {
  const { todos, setTodos } = props;

  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
