import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleDeleteTask = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="tasks">
      {taskList.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;