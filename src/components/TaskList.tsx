import { Task } from '../interface';
import { TaskItem } from './TaskItem';

interface Props {
  tasks: Task[];
  onUpdate: (id: number, updatedName: string) => void;
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

export const TaskList = ({
  tasks,
  onUpdate,
  onDelete,
  onToggleCompletion,
}: Props) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={(updatedName) => onUpdate(task.id, updatedName)}
          onDelete={() => onDelete(task.id)}
          onToggleCompletion={() => onToggleCompletion(task.id)}
        />
      ))}
    </div>
  );
};
