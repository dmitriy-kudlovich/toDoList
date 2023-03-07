export default class View {
  constructor(tasks) {
    tasks.forEach((element) => {
      this.renderTask(element);
    });
  }

  elements = {
    form: document.querySelector("#form"),
    inputAdd: document.querySelector("#inputAdd"),
    btnAdd: document.querySelector("#btnAdd"),
    list: document.querySelector("#list"),
  };

  renderTask(taskObj) {
    let classCompleted = taskObj.status == "done" ? "completed" : "";
    let taskChecked = taskObj.status == "done" ? "checked" : "";

    let task = `<li class="todo-item" id=${taskObj.id}>
                  <label class="todo-item-label">
                    <input class="checkbox" type="checkbox" ${taskChecked} />
                    <span class=${classCompleted}>${taskObj.text}</span>
                    <button class="btn btn-secondary btn-sm">Удалить</button>
                  </label>
                </li>`;
    this.elements.list.insertAdjacentHTML("beforeend", task);
  }

  removeTask(taskObj) {
    taskObj.remove();
  }

  toggleDoneStatus(task) {
    task.classList.toggle("completed");
  }

  clearInput() {
    inputAdd.value = "";
  }

  setIdAttr(taskObj) {
    let tasks = document.querySelectorAll(".todo-item");
    tasks.forEach((elem, index) => {
      elem.setAttribute("id", taskObj[index].id);
    });
  }

  renderModalWindow() {}
}
