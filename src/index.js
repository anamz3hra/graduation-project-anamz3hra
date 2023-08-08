// TODO rename classes folder- better naming conventions e.g. models, views, etc.
const User = require('./classes/user')
const Task = require('./classes/task')

const anam = new User('anam', 'anamzehra@gmail.com')
//console.log(user);
const task1 = new Task('Daily kata', 'Do 1 kata in JS Fundamentals')
const task2 = new Task('Walk Shairru', 'Take Shairru to exercise for 1 hour')

anam.addTask(task1)
anam.addTask(task2)
anam.deleteTask(task1)

// task1.update('Shairru walk evening', 'take shairru for walk in the evening instead', 'In Progress')
//console.log(task1.status)
anam.completeTask(task2)
// console.log(task1.title, task1.description, task1.status)

const newTask = anam.createTask('JS101', 'javascript basics', '16.08.2023')

console.log(anam.tasks)
//When creating a task, users can add a deadline to it.
//anam.createTask(title, description, status, deadline)

//console.log(task1.deadline)
//expected output = date
//The deadline is displayed along with the task

//The deadline can be edited/updated
//The deadline can be removed
