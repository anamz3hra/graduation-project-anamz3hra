module.exports = class Task {
  constructor(title, description, deadline) {
    this.title = title
    this.description = description
    this.status = 'Pending'
    this.deadline = deadline
  }

  complete() {
    this.status = 'Completed'
  }

  update(title, description, status) {
    this.title = title
    this.description = description
    if (status) this.status = status
  }
}

//add task deletion functionatlity
