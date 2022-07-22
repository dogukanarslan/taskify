import "./InputField.scss";

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
    <form className="form" onSubmit={handleAdd}>
      <input
        className="form__input"
        type="input"
        value={todo}
        placeholder="Enter a task"
        onChange={handleChangeTodo}
      />
      <button className="form__button" type="submit">
        Add
      </button>
    </form>
  );
};
