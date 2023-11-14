document.addEventListener('DOMContentLoaded', function () {
    // Function to create a new project
    function addProject() {
        var projectName = prompt('Enter project name:');
        if (projectName) {
            var projectList = document.getElementById('project-list');
            var newProject = document.createElement('li');
            newProject.textContent = projectName;
            projectList.appendChild(newProject);
        }
    }

    // Function to create a new task
    function addTask() {
        var taskName = prompt('Enter task name:');
        if (taskName) {
            var taskList = document.getElementById('task-list');
            var newTask = document.createElement('li');
            newTask.textContent = taskName;
            taskList.appendChild(newTask);
        }
    }

    // Event listener for the "Add Project" button
    var addProjectButton = document.getElementById('add-project');
    addProjectButton.addEventListener('click', addProject);

    // Event listener for the "Add Task" button
    var addTaskButton = document.getElementById('add-task');
    addTaskButton.addEventListener('click', addTask);
});
