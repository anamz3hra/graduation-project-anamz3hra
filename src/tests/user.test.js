const User = require('../models/user')
const Task = require('../models/task')

//tests:
//write test to check if user is able to create a task
console.log(`Anam just created the following task: ${task1.title}`)

//write test to check if user is able to delete a task
anam.deleteTask(task3)
console.log(`Task ${task3.title} has been deleted`)

//write test to check if user is able to mark a task as completed
anam.completeTask(task1)
console.log(`Task ${task1.title} has been completed`)
//expected output = [Task { title: 'Daily kata', description: 'Do 1 kata in JS Fundamentals', status: 'Completed' }

//write test to check if user is able to update a task
anam.updateTask(task2, 'Shairru walk evening', 'take shairru for walk in the evening instead')
console.log(`${anam.task[1].title} has been updated`) //acess the task through the task array

//write test to check if user is able to add a deadline to a task
anam.addDeadline(task3, '16.08.2023')
console.log(`${anam.task[2].title} has been updated with a deadline of ${anam.task[2].deadline}`)

//TODO check how to replace anam.name with any user name in the console.log
//write test to check if user is able to see all tasks
console.log(`${anam.name} has the following tasks: ${anam.tasks}`)

//write a test to check if user is able to see all tasks that are completed
const completedTasks = anam.tasks.filter(element => element.status === 'Completed')
console.log(`${anam.name} has the following completed tasks: ${completedTasks}`)
