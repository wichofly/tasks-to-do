import { Task } from './Task';

interface Props {
  tasksList: string[];
  updateTask: (index: number, updatedTask: string) => void;
  deleteTasks: (index: number) => void;
}

export const TaskList = ({ tasksList, updateTask, deleteTasks }: Props) => {
  return (
    <div className="taskList">
      {tasksList.map((task, index) => (
        <Task
          key={index}
          task={task}
          onUpdate={(updatedTask) => updateTask(index, updatedTask)}
          onDelete={() => deleteTasks(index)}
        />
      ))}
    </div>
  );
};
