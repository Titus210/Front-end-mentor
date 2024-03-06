// Define a function to add a new task
function addTask(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;
    
    // Create a checkbox for marking task as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.style.textDecoration = this.checked ? 'line-through' : 'none';
    });
    
    // Create a button for deleting the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    
    // Append checkbox and delete button to the list item
    li.appendChild(checkbox);
    li.appendChild(deleteButton);
    
    // Append the list item to the task list
    taskList.appendChild(li);
}

// Event listener for the form submission
document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    if (task !== '') {
        addTask(task);
        taskInput.value = '';
    }
});
