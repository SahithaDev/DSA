// Node for Linked List
class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.next = null;
  }
}

class ToDoList {
  constructor() {
    this.head = null;
  }

  // Add task at end
  addTask(description) {
    let newTask = new Task(description);
    if (this.head === null) {
      this.head = newTask;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newTask;
    }
    console.log(`Task added: ${description}`);
  }

  // Mark task as completed
  completeTask(index) {
    let temp = this.head;
    let count = 1;
    while (temp !== null && count < index) {
      temp = temp.next;
      count++;
    }
    if (temp === null) {
      console.log("Task not found!");
      return;
    }
    temp.completed = true;
    console.log(`Task marked completed: ${temp.description}`);
  }

  // Delete task by index
  deleteTask(index) {
    if (this.head === null) {
      console.log("No tasks to delete.");
      return;
    }
    if (index === 1) {
      console.log(`Task deleted: ${this.head.description}`);
      this.head = this.head.next;
      return;
    }
    let temp = this.head;
    let count = 1;
    while (temp !== null && count < index - 1) {
      temp = temp.next;
      count++;
    }
    if (temp === null || temp.next === null) {
      console.log("Task not found!");
      return;
    }
    console.log(`Task deleted: ${temp.next.description}`);
    temp.next = temp.next.next;
  }

  // View all tasks
  viewTasks() {
    if (this.head === null) {
      console.log("No tasks in the list.");
      return;
    }
    let temp = this.head;
    let index = 1;
    while (temp !== null) {
      let status = temp.completed ? "[✔]" : "[ ]";
      console.log(`${index}. ${status} ${temp.description}`);
      temp = temp.next;
      index++;
    }
  }
}

// Example usage
let list = new ToDoList();
list.addTask("Finish DSA homework");
list.addTask("Read JavaScript basics");
list.addTask("Practice coding problems");

console.log("\n--- Current Tasks ---");
list.viewTasks();

list.completeTask(2);

console.log("\n--- After Completing Task 2 ---");
list.viewTasks();

list.deleteTask(1);

console.log("\n--- After Deleting Task 1 ---");
list.viewTasks();
