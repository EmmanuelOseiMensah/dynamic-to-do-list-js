/**
 * To-Do List Application Script
 *
 * This script is designed for the provided HTML structure, handling the logic 
 * for adding, displaying, and removing tasks using DOM manipulation.
 */

// 1. Setup Event Listener for Page Load:
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Select DOM Elements (Updated IDs):
    const addButton = document.getElementById('add-task-btn'); // The "Add Task" button
    const taskInput = document.getElementById('task-input');   // The input field for new tasks
    const taskList = document.getElementById('task-list');     // The <ul> where tasks are displayed

    // 3. Define the addTask Function:
    function addTask() {
        
        // Retrieve and trim the value from the task input field.
        let taskText = taskInput.value.trim();

        // Check if taskText is not empty.
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if no task is entered
        }

        // 4. Task Creation and Removal:

        // Create a new <li> element for the task.
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a new button element for removing the task.
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn'; // Useful for styling

        // Assign the onclick event to the remove button.
        removeButton.onclick = function() {
            // Removes the parent <li> element from the <ul> (taskList).
            taskList.removeChild(this.parentNode);
        };

        // Append the remove button to the <li> element.
        listItem.appendChild(removeButton);

        // Append the <li> to the taskList.
        taskList.appendChild(listItem);

        // Clear the task input field.
        taskInput.value = "";
    }

    // 5. Attach Event Listeners:

    // Event listener for the "Add Task" button click.
    addButton.addEventListener('click', addTask);

    // Event listener for the 'keypress' event on the input field (to allow 'Enter').
    taskInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is the 'Enter' key.
        if (event.key === 'Enter') {
            addTask(); // Call the addTask function
        }
    });
});