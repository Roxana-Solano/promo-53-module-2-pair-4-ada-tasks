"use strict";

const list = document.querySelector(".task-list");
const tachado = document.querySelector(".tachado"); //llamamos la clase
const GITHUB_USER = "<https://github.com/Roxana-Solano/promo-53-module-2-pair-4-ada-tasks>";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

/*const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: "task1" },
  { name: "Comprar pilas", completed: true, id: "task2" },
  { name: "Poner una lavadora de blancos", completed: true, id: "task3" },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: "task4",
  },
];*/

for (const task of tasks) {
  list.insertAdjacentHTML(
    "beforeend",
    `<li id="${task.id}"><input type= "checkbox"/>${task.name}</li>`
  ); // beforeend donde queremos posicionar el texto (agregar + tareas)
  const check = document.querySelector(`#${task.id}`);
  check.addEventListener("change", eventClick);
}

function eventClick(e) {
  if (e.target.checked) {
    e.currentTarget.classList.add("tachado");
  } else {
    e.currentTarget.classList.remove("tachado");
  }
} //target el que hace click, el de dentro // el currentTarget el de fuera al que se le agrega la clase


fetch(SERVER_URL, 
  {
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify(newInformation)

}
)
.then(res => res.json())
.then(dataResponseSave => {
  console.log (dataResponsave);

});




//Completa el código;
//Guarda la respuesta obtenida enla variable para el listado de tareas: `tasks`
