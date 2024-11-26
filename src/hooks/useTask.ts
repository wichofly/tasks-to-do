import { KeyboardEvent, useState } from 'react';

export const useTask = () => {
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
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  const handleDeleteTask = (index: number) => {
    setListOfTasks((task) => task.filter((_, i) => i !== index));
  };

  return {
    newTask,
    setNewTask,
    listOfTasks,
    handleAddTask,
    handleDeleteTask,
    handleKeyDown,
  };
};
