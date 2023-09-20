const Task = require('./task')

module.exports = class User {
  constructor(name) {
    //removed email parameter because we will use it for authentication
    this.name = name
    this.tasks = []
  }

  addTask(task) {
    //TODO change task parameter to an array of tasks
    this.tasks.push(task)
  }

  deleteTask(task) {
    this.task = this.tasks.filter(element => element.title !== task.title)
  }

  completeTask(task) {
    task.status = 'Completed'
  }

  updateTask(task, title, description, status) {
    task.title = title
    task.description = description
    if (status) task.status = status
  }

  createTask(title, description, deadline) {
    const newTask = new Task(title, description, deadline)
    this.tasks.push(newTask)
  }

  addDeadline(task, deadline) {
    task.deadline = deadline
  }
}

//Create functionality to add deadlines to tasks
