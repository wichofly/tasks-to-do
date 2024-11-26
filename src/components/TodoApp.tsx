import { useTask } from '../hooks/useTask';
import { TaskList } from './TaskList';

export const TodoApp = () => {
  const {
    newTask,
    setNewTask,
    listOfTasks,
    handleAddTask,
    handleDeleteTask,
    handleKeyDown,
  } = useTask();

  return (
    <div>
      <h1>List of Tasks</h1>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="New task"
        />
        <button onClick={handleAddTask}>Add task</button>
      </div>
      <TaskList tasksList={listOfTasks} deleteTasks={handleDeleteTask} />
    </div>
  );
};
