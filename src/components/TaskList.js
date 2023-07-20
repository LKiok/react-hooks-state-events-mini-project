import React from "react";

function TaskList({tasks}) {
  return (
    <div className="tasks">
       {tasks.map((task) => (
        <task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
