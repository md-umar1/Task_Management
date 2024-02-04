import React from 'react';

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <span className="task-title">{task.title}</span>
      <div className="task-actions">
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default Task;
