// TODO rename classes folder- better naming conventions e.g. models, views, etc.
const User = require('./classes/user')
const Task = require('./classes/task')

const user = new User('anam', 'anamzehra@gmail.com')
//console.log(user);
const task1 = new Task('Daily kata', 'Do 1 kata in JS Fundamentals')
const task2 = new Task('Walk Shairru', 'Take Shairru to exercise for 1 hour')
user.addTask(task1)
user.addTask(task2)
user.deleteTask(task1)

task1.update('Shairru walk evening', 'take shairru for walk in the evening instead', 'In Progress')
//console.log(task1.status)
console.log(user.tasks)
console.log(task1.title, task1.description, task1.status)

//When creating a task, users can add a deadline to it.
//console.log(task1.deadline)
//expected output = date
//The deadline is displayed along with the task

//The deadline can be edited/updated
//The deadline can be removed
