import { useRef } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

interface InputFieldProps extends React.HTMLAttributes<HTMLFormElement> {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const InputField = (props: InputFieldProps) => {
  const { todo, setTodo, handleAdd } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <Form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <FormGroup>
        <Label>Task Name</Label>
        <Input
          type="text"
          value={todo}
          placeholder="Enter a task"
          onChange={handleChangeTodo}
        />
      </FormGroup>

      <Button color="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};
