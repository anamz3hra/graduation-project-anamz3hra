const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Task = require('./task');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true,
  passwordValidator: (password, cb) => {
    if (password.length < 8) {
      return cb('Password must be at least 8 characters');
    }
    return cb();
  },
});

//tasks: [Task.schema]
class User {
  addTask(task) {
    // TODO change task parameter to an array of tasks
    this.tasks.push(task);
  }

  addTasks(tasks) {
    this.tasks = [...this.tasks, ...tasks];
  }

  deleteTask(task) {
    this.task = this.tasks.filter(element => element.title !== task.title);
  }

  completeTask(task) {
    task.status = 'Completed';
  }

  updateTask(task, title, description, status) {
    task.title = title;
    task.description = description;
    if (status) task.status = status;
  }

  createTask(title, description, deadline) {
    const newTask = new Task(title, description, deadline);
    this.tasks.push(newTask);
  }

  addDeadline(task, deadline) {
    task.deadline = deadline;
  }

  // static list = []
}

userSchema.loadClass(User);
module.exports = mongoose.model('User', userSchema);

// const mongoose = require('mongoose')
