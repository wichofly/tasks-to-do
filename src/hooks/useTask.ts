import { useState } from 'react';

// Define the task structure
interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all'
  );

  const handleAddTask = (taskName: string) => {
    if (!taskName.trim()) return;

    const newTask: Task = {
      id: Date.now(), // Unique identifier
      name: taskName.trim(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
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
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    toggleCompletion: handleToggleCompletion,
    setFilter, // Set the filter type
    filter, // Current filter type
  };
};
