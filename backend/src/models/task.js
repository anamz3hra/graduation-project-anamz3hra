const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: String,
    deadline: Date,
    createdby: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

class Task {
  complete() {
    this.status = 'Completed';
  }

  update(title, description, status) {
    this.title = title;
    this.description = description;
    if (status) this.status = status;
  }
  // add task deletion functionatlity
}

taskSchema.loadClass(Task);
module.exports = mongoose.model('Task', taskSchema);
