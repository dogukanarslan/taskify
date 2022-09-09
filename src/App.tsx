import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { Toast } from './components/Toast';
import { RootState } from './redux/store';
import { IToast } from './model';

interface AppProps {
  toasts: IToast[];
}

const App = (props: AppProps) => {
  const { toasts } = props;

  return (
    <div className="App">
      <Container>
        <h1 className="text-center">Taskify</h1>
        <InputField />
        <TodoList />
      </Container>
      {toasts.length > 0 && <Toast toasts={toasts} />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const { toasts } = state;

  return { toasts };
};

export default connect(mapStateToProps)(App);
