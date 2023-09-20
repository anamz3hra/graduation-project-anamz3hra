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
// version 0.1.0
//epic description:
//Users can create tasks
//acceptance criteria: Given that I am a user, when I go to the `/tasks/create` page, then I have a form where I can submit a title, description (optional), deadline for a new task
//edge cases: if user does not enter a title, then the task is not created and the user is redirected to the `/tasks/create` page with an error message

//backend:
//the backend should have an endpoint to /tasks which accepts POST requests and which takes the following arguments: title, description (optional), deadline
// create tasks class and connect it to MongoDB

//users can set deadlines for tasks
//users can delete tasks
//acceptance criteria:
//Users can see all tasks
//acceptance criteria 1 : Given that I am a user, when I go to the tasks page, then I can see all the tasks that I have created with title, description, status

//as a user, I want to be able to delete a task, so that I can remove tasks that are no longer relevant

//as a user, I want to be able to see all my tasks, so that I can see what tasks I have to do

//update tasks, set deadlines, and mark tasks as completed
//Users should be able to create an account, login, and logout
//Users should be able to delete their account
//Users should be able to see all tasks assigned to them
//Only users who are assigned tasks can see the tasks assigned to them
//users can add other users to tasks, as well as assign other users to those tasks. Users can also remove other users from tasks.
// users can see all tasks that are completed, all tasks that are in progress. all tasks that are pending, and all tasks that are high priority.
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
