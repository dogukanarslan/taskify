import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { ITodo } from '../model';
import { RootState } from '../redux/store';
import { SingleTodo } from './SingleTodo';
import { Filters } from './Filters/Filters';

interface TodosProps {
  todos: ITodo[];
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const mapStateToProps = (state: RootState) => {
  const { todos } = state;

  return { todos: todos.todos };
};

export const TodoList = connect(mapStateToProps)((props: TodosProps) => {
  const { todos, title, setTitle } = props;

  let currentTodos = [...todos];

  if (!!title) {
    currentTodos = currentTodos.filter((todo) =>
      todo.todo.toLowerCase().includes(title.toLowerCase())
    );
  }

  return (
    <>
      {todos.length > 0 && <Filters title={title} setTitle={setTitle} />}
      <ListGroup>
        {currentTodos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <SingleTodo todo={todo} todos={todos} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
});
