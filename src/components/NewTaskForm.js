import React, { useState } from "react";

function NewTaskForm({ categories }) {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new task object with text and category from the form
    const newTask = {
      id: Date.now(),
      text: taskText,
      category: selectedCategory,
    };
    // Call the onTaskFormSubmit callback prop to add the new task
    // to the list of tasks in the App component
    // (This prop will be provided when using the NewTaskForm in App)
    // For example: onTaskFormSubmit(newTask);
    // You need to implement this callback in App.js
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          {/* Render <option> elements for each category */}
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;