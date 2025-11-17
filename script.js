const form =document.getElementById('form');
const jsinput =document.getElementById('input');
const jslist =document.getElementById('list');

let tasks = JSON.parse(localStorage.getItem("task")) || [];

function renderTasks() {
  jslist.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
    <span>${task.text}</span>
    <div>
      <button onclick="toggleComplete(${index})">✔</button> 
      <button onclick="deleteTask(${index})">🗑</button>
    </div>
    `;
    jslist.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  tasks.push({ text: jsinput.value, completed: false});
  jsinput.value = '';
  saveAndRender();
});
function toggleComplete(index){
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

function deleteTask(index){
  tasks.splice(index, 1);
  saveAndRender();
}
function saveAndRender(){
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();