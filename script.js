/**
 * To-Do List Application Script (with Local Storage Persistence)
 *
 * This script allows tasks to be saved to and loaded from Local Storage, 
 * ensuring data persists across browser sessions.
 */

// Global DOM references to be used across functions
let taskList;

// Helper function to update Local Storage after an add or remove operation
function saveTasksToLocalStorage() {
    // 1. Get all current task text from the DOM
    const tasks = [];
    const taskItems = taskList.querySelectorAll('li');

    taskItems.forEach(item => {
        // We take the text content of the list item (<li>) and remove the 
        // text content of the remove button to get just the task text.
        let taskText = item.textContent.replace('Remove', '').trim();
        tasks.push(taskText);
    });

    // 2. Serialize the array and save it to Local Storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to create task elements and append them to the DOM
function createTaskElement(taskText) {
    // Create a new <li> element for the task.
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a new button element for removing the task.
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Implement Task Removal with Local Storage Update:
    removeButton.onclick = function() {
        // Remove the <li> element from the DOM
        taskList.removeChild(this.parentNode);
        
        // Update Local Storage after removal
        saveTasksToLocalStorage();
    };

    // Append the remove button to the <li> element.
    listItem.appendChild(removeButton);

    return listItem;
}

// 4. Code for Loading Tasks from Local Storage:
function loadTasks() {
    // Retrieve tasks from Local Storage, defaulting to an empty array if none found.
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    
    // Create task elements in the DOM for each task found.
    storedTasks.forEach(taskText => {
        // Use the simplified addTask helper, passing false to avoid immediate re-saving.
        addTask(taskText, false); 
    });
}

// 3. Update Task Addition Functionality:
// The 'save' parameter controls whether the task is saved to Local Storage.
function addTask(taskText, save = true) {
    // If the function is called without a taskText argument (i.e., from the button click), 
    // retrieve and trim the value from the task input field.
    if (!taskText) {
        const taskInput = document.getElementById('task-input');
        taskText = taskInput.value.trim();
        taskInput.value = ""; // Clear input immediately after retrieval
    }

    // Check if taskText is empty.
    if (taskText === "") {
        alert("Please enter a task.");
        return; 
    }

    // 1. Create the new task element
    const listItem = createTaskElement(taskText);

    // 2. Append the <li> to the taskList.
    taskList.appendChild(listItem);

    // 3. Saving Tasks to Local Storage:
    // Only save to Local Storage if the 'save' flag is true 
    // (i.e., when a NEW task is added by the user, not when loading).
    if (save) {
        saveTasksToLocalStorage();
    }
}


// 1. Initialize and Load Tasks (DOM Content Loaded Event Listener):
document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM Elements (must be done first)
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    taskList = document.getElementById('task-list'); // Assign to the global variable

    // Invoke Load Function: Load tasks when the page loads
    loadTasks();
    
    // Attach Event Listeners:
    // Event listener for the "Add Task" button click.
    addButton.addEventListener('click', () => addTask());

    // Event listener for the 'keypress' event on the input field (for 'Enter').
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});