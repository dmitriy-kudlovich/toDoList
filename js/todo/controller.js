import Model from "./model.js";
import View from "./view.js";

let model = new Model();
let view = new View(model.tasks);

view.elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (view.elements.inputAdd.value === "") {
    alert("Please, write the task");
    return false;
  } else {
    let newTask = model.addTask(view.elements.inputAdd.value);
    view.renderTask(newTask);
    view.clearInput();
  }
});

view.elements.list.addEventListener("click", (e) => {
  if (e.target.getAttribute("type", "checkbox")) {
    model.switchDoneStatus(+e.target.parentNode.parentNode.id);
    view.toggleDoneStatus(e.target.nextElementSibling);
  } else if (e.target.classList.contains("btn-sm")) {
    model.removeTask(+e.target.parentNode.parentNode.id);
    view.removeTask(e.target.parentNode.parentNode);
    view.setIdAttr(model.tasks);
  }
});
