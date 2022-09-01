import { useState } from 'react';
import { Container } from 'reactstrap';
import { InputField } from './components/InputField';
import { Todo } from './model';
import { TodoList } from './components/TodoList';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodos = [...todos, { id: Date.now(), todo, isDone: false }];

    if (todo) {
      setTodos(newTodos);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <Container>
        <h1>Taskify</h1>
        <InputField
          className="mb-5"
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </div>
  );
};

export default App;
