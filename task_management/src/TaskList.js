import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;
