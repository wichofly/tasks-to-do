import { useState } from 'react';
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { Task } from '../interface';

interface Props {
  task: Task;
  onDelete: () => void;
  onToggleCompletion: () => void;
  onUpdate: (updatedName: string) => void;
}

export const TaskItem = ({
  task,
  onDelete,
  onToggleCompletion,
  onUpdate,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);

  const handleSaveUpdate = () => {
    onUpdate(updatedName); // Trigger the update
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleCompletion}
      />
      {isEditing ? (
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
          onBlur={handleSaveUpdate} // Save when the input loses focus
          onKeyDown={(e) => e.key === 'Enter' && handleSaveUpdate()} // Save on Enter
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{task.name}</span> // Enable editing on click
      )}
      <button onClick={() => setIsEditing(true)}>
        <GrUpdate />
      </button>
      <button onClick={onDelete}>
        <MdDeleteForever />
      </button>
    </div>
  );
};
