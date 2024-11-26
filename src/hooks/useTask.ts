import { useState, KeyboardEvent } from 'react';

export const useTask = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [listOfTasks, setListOfTasks] = useState<string[]>([]);

  const capitalizeFirstLetter = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setListOfTasks([...listOfTasks, capitalizeFirstLetter(newTask)]);
    setNewTask('');
  };
  
  const handleUpdateTask = (index: number, updatedTask: string) => {
    if (!updatedTask.trim()) return;
    setListOfTasks((tasks) =>
      tasks.map((task, i) =>
        i === index ? capitalizeFirstLetter(updatedTask) : task
      )
    );
  };

  const handleDeleteTask = (index: number) => {
    setListOfTasks((tasks) => tasks.filter((_, i) => i !== index));
  };


  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAddTask();
  };

  return {
    newTask,
    setNewTask,
    listOfTasks,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
    handleKeyDown,
  };
};
