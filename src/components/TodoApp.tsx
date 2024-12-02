import { FormEvent, useState } from 'react';
import { useTask } from '../hooks/useTask';
import { TaskList } from './TaskList';

export const TodoApp = () => {
  const { tasks, addTask, deleteTask, toggleCompletion, setFilter, filter } =
    useTask();

  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask(taskInput);
    setTaskInput('');
  };

  return (
    <div>
      <h1>Todo App</h1>

      {/* Task Creation Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="New task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Filter Dropdown */}
      <div>
        <label htmlFor="filter">Filter:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as 'all' | 'completed' | 'incomplete')
          }
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>

      {/* Task List */}
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleCompletion={toggleCompletion}
      />
    </div>
  );
};
