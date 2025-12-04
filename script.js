// Wait for the HTML to load
document.addEventListener('DOMContentLoaded', function () {

    // Select the input, button, and ul list
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // get typed text

        if (taskText === "") {
            alert("Please enter a task."); // prevent empty tasks
            return;
        }

        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Optional: add a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);        // attach remove button to <li>
        taskList.appendChild(li);         // append <li> to <ul>

        taskInput.value = "";             // clear input box
    }

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

});
