import { useState } from 'react';
import { TaskList } from './TaskList';

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [listOfTasks, setListOfTasks] = useState<string[]>([]);

  const capitalizeFirstLetter = (letter: string) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const capitalizedLetter = capitalizeFirstLetter(newTask);
    setListOfTasks([...listOfTasks, capitalizedLetter]);
    setNewTask('');
  };

  // Use Enter to add the task
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (index: number) => {
    setListOfTasks((task) => task.filter((_, i) => i !== index));
  };

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
