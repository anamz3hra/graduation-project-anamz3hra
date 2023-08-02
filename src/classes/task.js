module.exports = class Task {
  constructor(title, description) {
    this.title = title
    this.description = description
    this.status = 'Pending'
  }

  complete() {
    this.status = 'Completed'
  }
}
