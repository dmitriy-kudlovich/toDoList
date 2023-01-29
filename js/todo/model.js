export default class Model {
  constructor() {
    this.tasks = [];
    this.setId();
    this.loadFromLocalStorage();
  }

  addTask(taskText) {
    let task = {
      text: taskText,
      status: "active",
    };

    this.tasks.push(task);
    this.setId();
    this.setToLocalStorage();

    return task;
  }

  setId() {
    let counter = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].id = counter;
      counter++;
    }
  }

  switchDoneStatus(taskId) {
    let index = this.tasks.map((e) => e.id).indexOf(taskId);

    if (this.tasks[index].status == "done") {
      this.tasks[index].status = "active";
    } else {
      this.tasks[index].status = "done";
    }

    this.setToLocalStorage();
  }

  removeTask(taskId) {
    let index = this.tasks.map((e) => e.id).indexOf(taskId);

    this.tasks.splice(index, 1);
    this.setId();
    this.setToLocalStorage();
  }

  setToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks) {
      this.tasks = tasks;
    }
  }
}
