import { Container } from 'reactstrap';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';

const App = () => (
  <div className="App">
    <Container>
      <h1 className="text-center">Taskify</h1>
      <InputField />
      <TodoList />
    </Container>
  </div>
);
export default App;
