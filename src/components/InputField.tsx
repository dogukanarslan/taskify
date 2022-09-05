import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

interface InputFieldProps {
  todo: string;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const InputField = (props: InputFieldProps) => {
  const { todo, setTodo, priority, setPriority, handleAdd } = props;

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleChangePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
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

      <FormGroup>
        <Label>Priority</Label>
        <Input type="select" value={priority} onChange={handleChangePriority}>
          <option disabled value="">
            Select Priority
          </option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Input>
      </FormGroup>

      <Button color="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};
