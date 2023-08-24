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

//Goal: create a task management app for people with ADHD

//User stories:
//Users should be able to create an account, login, and logout
//Users should be able to delete their account
//Users should be able to see all tasks assigned to them
//Only users who are assigned tasks can see the tasks assigned to them
//Users can create tasks, delete tasks, update tasks, set deadlines, and mark tasks as completed
//users can add other users to tasks, as well as assign other users to those tasks. Users can also remove other users from tasks.
//Users can see all tasks, all tasks that are completed, all tasks that are in progress. all tasks that are pending, and all tasks that are high priority.
//Users can categorize tasks into "elephant tasks"(tasks that are large in both time required and complexity), "rabbit tasks"(tasks that are smaller in time required and complexity), and projects.
//Users can filter tasks by status, priority, and category.
//

//I need two objects: User and Tasks, and a way to connect them.
//User object:
//  properties: name, email, tasks
//  methods: addTask, deleteTask, completeTask, updateTask, addDeadline, seeAllTasks, seeCompletedTasks, seeInProgressTasks, seePendingTasks, assignUserToTask, removeUserFromTask
//Task object:
//  properties: title, description, status, deadline, assignedUsers
//  methods: updateStatus, updateDeadline, addAssignedUser, removeAssignedUser
//  status: completed, in progress, pending
//  priority: high, medium, low
//  category: elephant task, rabbit task, project
//  filter by status, priority, category, deadline, assigned user, title, description
//  sort by status, priority, category, deadline, assigned user, title, description
//  search by title, description, assigned user

//later on:
//  add subtasks to task
//  add tags to task
//  add comments to task
//  add files to task
//  add links to task
//  add reminders to task
//  add recurring tasks
//  add pomodoro timer to task
//  add time tracking to task
// add time blocking to task
// add calendar to task
