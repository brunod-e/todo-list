import { ChangeEvent, FormEvent, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

import { TaskType } from "../Task";

import styles from "./styles.module.css";

interface TaskFormProps {
  onSubmit: (task: TaskType) => void;
}

const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [newInputText, setNewInputText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      content: newInputText,
      isChecked: false,
    };
    onSubmit(newTask);
    setNewInputText("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewInputText(event.target.value);
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={newInputText}
        name="input"
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type="submit">
        Criar <MdOutlineAddCircleOutline size={18} />
      </button>
    </form>
  );
};

export { TaskForm };
