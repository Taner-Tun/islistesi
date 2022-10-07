const addButton = document.getElementById('addToDo');
const toDoContainer= document.getElementById('toDoContainer');
const inputText= document.getElementById('inputText');
const deleteToDo = document.getElementById('deleteToDo');

addButton.addEventListener('click', function () {
  let paragraf = document.createElement('p');
  toDoContainer.appendChild(paragraf);
  paragraf.innerHTML = inputText.value;
  inputText.value = "";

  paragraf.addEventListener('click', function () {
     paragraf.style.textDecoration = 'line-through';
  })
  paragraf.addEventListener('dblclick', function () {
    toDoContainer.removeChild(paragraf);
  })

  deleteToDo.addEventListener('click', function () {
     paragraf.remove();
  })
})