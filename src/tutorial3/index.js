const btn = document.getElementById('btn');
const input = document.getElementById('input');
const list = document.getElementById('list');
let tasks = [];

const handleClickAdd = () => {
  const value = input.value.trim();
  tasks.push(value);
  input.value = '';
  render();
};

const handleClickRemove = (index) => {
  tasks = tasks.filter((item, inx) => inx !== index);
  console.log(tasks);
  render();
};

const render = () => {
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const todo = document.createElement('li');
    todo.innerText = task;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'x';
    deleteBtn.addEventListener('click', () => {
      handleClickRemove(index);
    });
    todo.appendChild(deleteBtn);
    list.appendChild(todo);
  });
};
btn.addEventListener('click', handleClickAdd);

render();
