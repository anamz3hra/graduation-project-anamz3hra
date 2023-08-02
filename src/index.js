const User = require('./classes/user')
const Task = require('./classes/task')

const user = new User('anam', 'anamzehra@gmail.com')
//console.log(user);
const task1 = new Task('Daily kata', 'Do 1 kata in JS Fundamentals')
const task2 = new Task('Walk Shairru', 'Take Shairru to exercise for 1 hour')
user.addTask(task1)
user.addTask(task2)

//console.log(task1.status)
console.log(user.getTasks())
