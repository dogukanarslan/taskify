import { useState } from "react";
import { InputField } from "./components/InputField";
import { Todo } from "./model";
import "./App.scss";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodos = [...todos, { id: Date.now(), todo, isDone: false }];

    if (todo) {
      setTodos(newTodos);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
