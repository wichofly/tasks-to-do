import { TaskItem } from './TaskItem';

interface Props {
  tasks: {
    id: number;
    name: string;
    completed: boolean;
  }[];
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

export const TaskList = ({ tasks, onDelete, onToggleCompletion }: Props) => {
  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggleCompletion={() => onToggleCompletion(task.id)}
        />
      ))}
    </div>
  );
};
