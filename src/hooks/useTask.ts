import { useEffect, useState } from 'react';
import { Task } from '../interface';

export const useTask = () => {
  const initialTask = (): Task[] => {
    const localStorageTask = localStorage.getItem('tasks');
    return localStorageTask ? JSON.parse(localStorageTask) : [];
  };

  const [tasks, setTasks] = useState(initialTask);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all'
  );
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskName: string) => {
    if (!taskName.trim()) return;

    const newTask: Task = {
      id: Date.now(), // Unique identifier
      name: taskName.trim(),
      completed: false,
    };

    console.log(newTask);

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleUpdateTask = (id: number, updatedName: string) => {
    if (!updatedName.trim()) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, name: updatedName.trim() } : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; // 'all'
  });

  return {
    tasks: filteredTasks,
    taskInput,
    setTaskInput,
    addTask: handleAddTask,
    updateTask: handleUpdateTask,
    deleteTask: handleDeleteTask,
    toggleCompletion: handleToggleCompletion,
    setFilter, // Set the filter type
    filter, // Current filter type
  };
};
