const Task = require('./task')

module.exports = class User {
  constructor(name) {
    //removed email parameter because we will use it for authentication
    this.name = name
    this.tasks = []
  }

  addTask(task) {
    //TODO change task parameter to an array later on
    this.tasks.push(task)
  }

  deleteTask(task) {
    this.tasks.filter(element => element.title !== task.title)
  }

  completeTask(task) {
    task.status = 'Completed'
  }

  createTask(title, description, deadline) {
    const newTask = new Task(title, description, deadline)
    this.tasks.push(newTask)
  }
}
