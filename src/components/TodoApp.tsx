import { FormEvent } from 'react';
import { useTask } from '../hooks/useTask';
import { TaskList } from './TaskList';

export const TodoApp = () => {
  const {
    tasks,
    taskInput,
    setTaskInput,
    addTask,
    updateTask,
    deleteTask,
    toggleCompletion,
    setFilter,
    filter,
  } = useTask();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTask(taskInput);
    setTaskInput('');
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Tasks To Do</h1>

      <div className="header-row">
        <form onSubmit={handleSubmit} className="task-form">
          <input
            className="task-input"
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="New task"
          />
          <button className="add-task-button" type="submit">
            Add Task
          </button>
        </form>

        <div className="filter-container">
          <label className="filter-label" htmlFor="filter">
            Filter:
          </label>
          <select
            className="filter-dropdown"
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
      </div>

      <TaskList
        tasks={tasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onToggleCompletion={toggleCompletion}
      />
    </div>
  );
};
