import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { ITodo } from '../model';
import { RootState } from '../redux/store';
import { SingleTodo } from './SingleTodo';

interface TodosProps {
  todos: ITodo[];
}

const mapStateToProps = (state: RootState) => {
  const { todos } = state;

  return { todos: todos.todos };
};

export const TodoList = connect(mapStateToProps)((props: TodosProps) => {
  const { todos } = props;

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          <SingleTodo todo={todo} todos={todos} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
});
