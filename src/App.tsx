import { useState } from "react";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { Task, TaskType } from "./components/Task";
import { TbClipboardText } from "react-icons/tb";

import styles from "./App.module.css";
import "./global.css";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const hasTasks = tasks.length > 0;
  const checkedTasks = tasks.filter((task) => task.isChecked).length;

  const handleNewTask = (newTask: TaskType) => {
    setTasks((state) => [...state, newTask]);
  };

  const handleCheckTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <TaskForm onSubmit={handleNewTask} />

          <div className={styles.taskList}>
            <div className={styles.taskListHeader}>
              <span>
                Tarefas criadas <strong>{tasks.length}</strong>
              </span>
              <span>
                Concluídas{" "}
                <strong>
                  {checkedTasks} de {tasks.length}
                </strong>
              </span>
            </div>
            <div>
              {hasTasks ? (
                <div>
                  {tasks.map((task) => (
                    <Task
                      key={task.id}
                      task={task}
                      onDelete={handleRemoveTask}
                      onCheckTask={handleCheckTask}
                    />
                  ))}
                </div>
              ) : (
                <div className={styles.taskListEmpty}>
                  <TbClipboardText size={60} color={"var(--gray-400)"} />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
