import { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  ButtonGroup,
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from 'reactstrap';
import { RootState } from '../redux/store';
import { SingleTodo } from './SingleTodo';
import { Filters } from './Filters/Filters';

const mapStateToProps = (state: RootState) => {
  const { todos } = state;

  return { todos: todos.todos };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface TodosProps extends PropsFromRedux {}

export const TodoList = connect(mapStateToProps)((props: TodosProps) => {
  const { todos } = props;

  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('all');

  const handleClick = (status: string) => {
    setStatus(status);
  };

  let currentTodos = [...todos];

  if (!!title) {
    currentTodos = currentTodos.filter((todo) =>
      todo.todo.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (status === 'completed') {
    currentTodos = currentTodos.filter((todo) => todo.isDone);
  }

  if (status === 'uncompleted') {
    currentTodos = currentTodos.filter((todo) => !todo.isDone);
  }

  return (
    <>
      {todos.length > 0 && (
        <Row className="align-items-end">
          <Col xs={{ size: 4 }}>
            <ButtonGroup className="mb-3">
              <Button
                active={status === 'all'}
                color="primary"
                onClick={() => handleClick('all')}
              >
                All
              </Button>
              <Button
                active={status === 'completed'}
                color="primary"
                onClick={() => handleClick('completed')}
              >
                Completed
              </Button>
              <Button
                active={status === 'uncompleted'}
                color="primary"
                onClick={() => handleClick('uncompleted')}
              >
                Uncompleted
              </Button>
            </ButtonGroup>
          </Col>
          <Col xs={{ size: 4, offset: 4 }}>
            <Filters title={title} setTitle={setTitle} />
          </Col>
        </Row>
      )}
      {todos.length > 0 && (
        <p>
          Total tasks: <b>{todos.length}</b>
        </p>
      )}
      {currentTodos.length === 0 && (
        <Container className="text-center">
          <h4>There are no tasks yet.</h4>
        </Container>
      )}
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
