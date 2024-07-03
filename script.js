document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('taskInput');

    const addTaskButton = document.getElementById('addTaskButton');

    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {

        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Por favor, adicione uma tarefa.');
            return;
        }

        const listItem = document.createElement('li');

        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');

        deleteButton.textContent = 'Excluir';

        deleteButton.className = 'delete';

        deleteButton.addEventListener('click', () => {

            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
        
        taskInput.value = '';
    }
});
