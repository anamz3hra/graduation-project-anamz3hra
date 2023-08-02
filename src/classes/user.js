module.exports = class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getTasks() {
    return this.tasks
  }
}
