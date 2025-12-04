// 1️⃣ Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {

    // 2️⃣ Select DOM Elements
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field for new tasks
    const taskList = document.getElementById('task-list');     // <ul> where tasks will appear

    // 3️⃣ Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the typed task and remove extra spaces

        // 3a. Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt user if empty
            return; // Stop function
        }

        // 3b. Task Creation
        const li = document.createElement('li'); // Create a new <li> element
        li.textContent = taskText;               // Set the text to the task entered

        // 3c. Create Remove Button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // 3d. Add functionality to remove task
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove this <li> from the <ul>
        };

        // 3e. Append Remove Button to the <li>
        li.appendChild(removeBtn);

        // 3f. Append <li> to the <ul>
        taskList.appendChild(li);

        // 3g. Clear the input field
        taskInput.value = "";
    }

    // 4️⃣ Attach Event Listeners

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed inside the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
