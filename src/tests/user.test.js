const User = require('../models/user')
const Task = require('../models/task')

//tests:
//write test to check if user is able to create a task
console.log(anam.tasks)
//expected output = [Task { title: 'Daily kata', description: 'Do 1 kata in JS Fundamentals', status: 'Completed' }
//Task { title: 'Walk Shairru', description: 'Take Shairru to exercise for 1 hour', status: 'In Progress' }
//Task { title: 'strawman Class Project', description: 'write down user stories as pseudocode in index.js', status: 'Pending' }
//]

//write test to check if user is able to delete a task
anam.deleteTask(task3)
console.log(anam.tasks)
//expected output = [Task { title: 'Daily kata', description: 'Do 1 kata in JS Fundamentals', status: 'Completed' }
//Task { title: 'Shairru walk evening', description: 'take shairru for walk in the evening instead', status: 'In Progress' }
//Task { title: 'JS101', description: 'javascript basics', status: 'Pending' }
//]

//write test to check if user is able to mark a task as completed
anam.completeTask(task1)
console.log(anam.task[0])
//expected output = [Task { title: 'Daily kata', description: 'Do 1 kata in JS Fundamentals', status: 'Completed' }

//write test to check if user is able to update a task
anam.updateTask(task2, 'Shairru walk evening', 'take shairru for walk in the evening instead')
console.log(anam.task[1]) //acess the task through the task array
//expected output = [Task { title:  'Shairru walk evening', description: 'take shairru for walk in the evening instead', status: 'In Progress' }

//write test to check if user is able to add a deadline to a task
anam.addDeadline(task3, '16.08.2023')
console.log(anam.task[2])

//write test to check if user is able to see all tasks
console.log(anam.tasks)

//write a test to check if user is able to see all tasks that are completed
const completedTasks = anam.tasks.filter(element => element.status === 'Completed')
console.log(completedTasks)
