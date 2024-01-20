const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
function addTask() {

  if (inputBox == '') {
    alert("You must write something");
  }else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveDataa();
}

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveDataa();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveDataa();
  }
}, false);

function saveDataa() {
    localStorage.setItem('data',listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem('data');
}

showData();