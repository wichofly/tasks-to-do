import { useState } from 'react';

interface Props {
  task: string;
  onDelete: () => void;
  onUpdate: (updatedTask: string) => void;
}

export const Task = ({ task, onDelete, onUpdate }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    onUpdate(updatedTask); // Call the onUpdate function with the updated task
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="task">
      {isEditing ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          onBlur={handleUpdate} // Save on loss of focus
          onKeyDown={(e) => e.key === 'Enter' && handleUpdate()} // Save on Enter press
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{task}</span> // Click to edit
      )}
      <div>
        <button onClick={() => setIsEditing(true)}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};
