import { Task } from './Task';

interface Props {
  tasksList: string[];
  deleteTasks: (index: number) => void;
}

export const TaskList = ({ tasksList, deleteTasks }: Props) => {
  return (
    <div className="taskList">
      {tasksList.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => deleteTasks(index)} />
      ))}
    </div>
  );
};
