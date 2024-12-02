interface Props {
  task: {
    id: number;
    name: string;
    completed: boolean;
  };
  onDelete: () => void;
  onToggleCompletion: () => void;
}

export const TaskItem = ({ task, onDelete, onToggleCompletion }: Props) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleCompletion}
      />
      <span>{task.name}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
};
