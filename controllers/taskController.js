const Task = require('../models/task');  // Import the Task model

// Create Task
exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
    });
    await newTask.save();  // Save the task to MongoDB
    res.status(201).json(newTask);  // Send the newly created task as response
  } catch (error) {
    res.status(400).json({ message: 'Error creating task', error });
  }
};

// Get All Tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();  // Get all tasks from MongoDB
    res.status(200).json(tasks);  // Return all tasks as the response
  } catch (error) {
    res.status(400).json({ message: 'Error fetching tasks', error });
  }
};

// Get Task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);  // Find task by ID
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);  // Return the found task
  } catch (error) {
    res.status(400).json({ message: 'Error fetching task', error });
  }
};

// Update Task Status
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    task.status = req.body.status;  // Update task status
    await task.save();  // Save the updated task to MongoDB
    res.status(200).json(task);  // Return the updated task
  } catch (error) {
    res.status(400).json({ message: 'Error updating task', error });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);  // Delete task by ID
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(204).send();  // Send no content response
  } catch (error) {
    res.status(400).json({ message: 'Error deleting task', error });
  }
};
