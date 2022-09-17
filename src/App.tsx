import { useState } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { Toast } from './components/Toast';
import { RootState } from './redux/store';
import { IToast } from './model';
import Filters from './components/Filters/Filters';

interface AppProps {
  toasts: IToast[];
}

const App = (props: AppProps) => {
  const { toasts } = props;

  const [title, setTitle] = useState('');

  return (
    <div className="App">
      <Container>
        <h1 className="text-center">Taskify</h1>
        <InputField />
        <Filters title={title} setTitle={setTitle} />
        <TodoList title={title} />
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
