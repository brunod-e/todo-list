import { FaCheck, FaRegTrashAlt } from "react-icons/fa";

import styles from "./styles.module.css";

interface TaskType {
  id: string;
  content: string;
  isChecked: boolean;
}

interface TaskProps {
  task: TaskType;
  onDelete: (taskId: string) => void;
  onCheckTask: (taskId: string) => void;
}

const Task = ({ task, onDelete, onCheckTask }: TaskProps) => {
  const handleCheck = () => {
    onCheckTask(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className={styles.container}>
      {task.isChecked ? (
        <label>
          <div className={styles.customCheckboxChecked} onClick={handleCheck}>
            <FaCheck size={9} color={"white"} />
          </div>
        </label>
      ) : (
        <label>
          <div
            className={styles.customCheckboxUnchecked}
            onClick={handleCheck}
          />
        </label>
      )}
      <span
        className={
          task.isChecked ? styles.checkedContent : styles.uncheckedContent
        }
      >
        {task.content}
      </span>
      <button onClick={handleDelete}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export { Task };
export type { TaskType };
