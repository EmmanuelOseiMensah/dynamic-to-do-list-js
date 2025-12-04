// Run JavaScript only after the full HTML is loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements for manipulation
    const addButton = document.getElementById('add-task-btn');   // Add Task button
    const taskInput = document.getElementById('task-input');     // Input field for new tasks
    const taskList = document.getElementById('task-list');       // <ul> where tasks will appear

    // Function that adds a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input text + remove excess spaces

        // If input is empty, alert user and stop function
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create <li> to store the task text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for deleting tasks
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // When remove button is clicked, delete the <li> element
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Attach remove button to task item
        li.appendChild(removeBtn);

        // Add <li> to <ul> list
        taskList.appendChild(li);

        // Clear input field after adding task
        taskInput.value = "";
    }

    // Add Task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add Task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
