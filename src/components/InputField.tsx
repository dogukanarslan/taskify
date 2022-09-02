import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const InputField = (props: InputFieldProps) => {
  const { todo, setTodo, handleAdd } = props;

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <Form className="mb-4" onSubmit={handleAdd}>
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
