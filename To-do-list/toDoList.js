class Task {
  constructor(taskName) {
    this.taskName = taskName;
    this.completed = false;
    this.next = null;
  }
}
class ToDoList {
  constructor() {
    this.head = null;
  }

  addTask(taskName) {
    let newTask = new Task(taskName);
    if (this.head === null) {
      this.head = newTask;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newTask;
    }
    console.log(`Task added: ${taskName}`);
  }
  completeTask(index) {
    let curr = this.head;
    if (this.head === null) {
      console.log("Task not found");
    }
    let count = 1;
    while (count < index && curr !== null) {
      curr = curr.next;
      count++;
    }
    curr.completed = true;
  }
  deleteTasks(index) {
    let curr = this.head;
    let count = 0;
    if (index === 0) {
      this.head = this.head.next;
    }
    if (curr === null || curr.next === null) {
      return;
    }
    while (curr !== null && count < index - 1) {
      curr = curr.next;
      count++;
    }
    curr.next = curr.next.next;
  }
  viewTasks() {
    if (this.head === null) {
      console.log("No task found");
    }
    let index = 1;
    let curr = this.head;
    while (curr !== null) {
      let status = curr.completed ? "[✔]" : "[ ]";
      console.log(`${index}. ${status} ${curr.taskName}`);
      curr = curr.next;
      index++;
    }
  }
}

let list = new ToDoList();
list.addTask("complete record");
list.addTask("complete DSA");
list.addTask("complete OOPs");
list.completeTask(0);
list.deleteTasks(1);
list.viewTasks();
