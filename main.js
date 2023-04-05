const input = document.querySelector('input');
const addBtn = document.querySelector('.addBtn');
const list = document.createElement('ul');
const clearBtn = document.querySelector('.clearBtn');

function addItem() {
  const text = input.value.trim();
  if (!text) return;
  const item = document.createElement('li');
  const itemText = document.createElement('span');
  itemText.innerText = text;
  const togri = document.createElement('button');
  togri.innerText = '✅';
  togri.addEventListener('click', () => {
     
  });
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.addEventListener('click', () => item.remove());
  const editBtn = document.createElement('button');
  editBtn.innerText = '📝';
  let isEditing = false;
  editBtn.addEventListener('click', () => {
    if (isEditing) {
      itemText.contentEditable = false;
      editBtn.innerText = '📝';
      isEditing = false;
    } else {
      itemText.contentEditable = true;
      itemText.focus();
      editBtn.innerText = '🗳️';
      isEditing = true;
    }
  });
  item.appendChild(itemText);
  item.appendChild(togri);
  item.appendChild(deleteBtn);
  item.appendChild(editBtn);
  list.appendChild(item);
  input.value = '';
}

function clearItems() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

addBtn.addEventListener('click', addItem);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') addItem();
});
clearBtn.addEventListener('click', clearItems);

const box = document.querySelector('.box');
box.appendChild(list); 