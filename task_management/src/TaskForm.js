import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleInputChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskTitle}
        onChange={handleInputChange}
      />
      <button type="submit" class='sub'>Add Task</button>
    </form>
  );
};

export default TaskForm;
