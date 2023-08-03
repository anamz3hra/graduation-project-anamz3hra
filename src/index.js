// TODO rename classes folder- better naming conventions e.g. models, views, etc.
const User = require('./classes/user')
const Task = require('./classes/task')

const user = new User('anam', 'anamzehra@gmail.com')
//console.log(user);
const task1 = new Task('Daily kata', 'Do 1 kata in JS Fundamentals')
const task2 = new Task('Walk Shairru', 'Take Shairru to exercise for 1 hour')
user.addTask(task1)
user.addTask(task2)

task1.update('Shairru walk evening', 'take shairru for walk in the evening instead', 'In Progress')
//console.log(task1.status)
console.log(user.getTasks())
console.log(task1.title, task1.description, task1.status)
