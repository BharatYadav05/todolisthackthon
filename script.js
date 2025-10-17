function addTask() {
    const inputBox = document.querySelector('.input-area input[type="text"]');
    const taskText = inputBox.value;
    const taskList = document.getElementById('addTask');

    if (taskText === '') {
        alert ("Please enter a Task !");
        return;
    }

    const li = document.createElement('li');

    li.textContent = taskText;

    taskList.appendChild(li);  

    inputBox.value = '';
}
