// TODO rename classes folder- better naming conventions e.g. models, views, etc.
const User = require('./models/user')
const Task = require('./models/task')

const anam = new User('anam', 'anamzehra@gmail.com')
//console.log(user);
const task1 = new Task('Daily kata', 'Do 1 kata in JS Fundamentals')
const task2 = new Task('Walk Shairru', 'Take Shairru to exercise for 1 hour')
const task3 = new Task('strawman Class Project', 'write down user stories as pseudocode in index.js', '19.08.2023')

anam.addTask(task1)
anam.addTask(task2)
anam.addTask(task3)

const newTask = anam.createTask('JS101', 'javascript basics', '16.08.2023')

//Create functionality to add deadlines to tasks

//title, description, status, deadline

//console.log(task1.deadline)
//expected output = date
//The deadline is displayed along with the task

//Goal: create a task management app for people with ADHD
//User stories:
//  users should be able to create task
//  user should be able to delete task
//  user should be able to mark task as completed
//  user should be able to update task
//  user should be able to add deadlines to task
//  user should be able to see all tasks
//  user should be able to see all tasks that are completed
//  user should be able to see all tasks that are in progress
//  user should be able to assign other users to tasks
//  user should be able to remove other users from tasks

//authentication:
// user should be able to create an account
// user should be able to login
// user should be able to logout
// user should be able to delete account

// user should be able to see all tasks assigned to them
// only users who are assigned tasks can see the tasks assigned to them

//user should be able to mark tasks as high priority
//user should be able to categorize tasks into "elephant tasks", "rabbit tasks", and projects
//user should be able to filter tasks by status, priority, and category
//user should be able to see all tasks that are high priority
