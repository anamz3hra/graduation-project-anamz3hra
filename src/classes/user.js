module.exports = class User {
  constructor(name) {
    //removed email parameter because we will use it for authentication
    this.name = name
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  deleteTask(task) {
    this.tasks.filter(element => element.title !== task.title)
  }
}
