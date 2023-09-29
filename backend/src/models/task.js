const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
  priority: { type: String, enum: ['low', 'high'] },
  category: { type: String, enum: ['work', 'health', 'pleasure'] },
  effort: { type: String, enum: ['elephant', 'rabbit'] },
  //check mongodb schema documentation for adding data/datetime
  deadline: Date,
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdOn: { type: Date, default: Date.now },
});

class Task {
  complete() {
    this.status = 'Completed';
  }
}

taskSchema.loadClass(Task);
module.exports = mongoose.model('Task', taskSchema);
