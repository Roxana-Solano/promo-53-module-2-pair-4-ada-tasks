"use strict";

const list = document.querySelector(".task-list");
const tachado = document.querySelector(".tachado"); //llamamos la clase
const GITHUB_USER = "roxana-solano";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

function eventClick(e) {
  if (e.target.checked) {
    e.currentTarget.classList.add("tachado");
  } else {
    e.currentTarget.classList.remove("tachado");
  }
} //target el que hace click, el de dentro // el currentTarget el de fuera al que se le agrega la clase
function renderTasks() {
  list.innerHTML = "";
  for (const task of tasks) {
    list.insertAdjacentHTML(
      "beforeend",
      `<li id="id-${task.id}"><input type= "checkbox"/>${task.name}</li>`
    );
    const check = document.querySelector(`#id-${task.id}`);
    check.addEventListener("change", eventClick);
  }
}

function request() {
  /* {
      method: "GET", 
      }  */
  fetch(SERVER_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      tasks = data.results;
      renderTasks();
      console.log(data);
    });
}

request();

//Completa el código;
//Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`
