import { TaskItem } from './TaskItem';

interface Props {
  tasks: {
    id: number;
    name: string;
    completed: boolean;
  }[];
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
    <div className="taskList">
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
