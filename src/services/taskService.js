const Task = require('../models/Task');

// Create Task
const createTask = async (data) => {
    return await Task.create(data);
};

// Get tasks (per user or all)
const getTasks = async (userId, role) => {
    if(role === 'admin') {
        return await Task.find().populate('assignedTo project');
    }
    return await Task.find({ assignedTo: userId });
};

// Update status (workflow logic)
const updateStatus = async (id, status) => {
    const validFlow = ['todo', 'in_progress', 'done'];
    if(!validFlow.includes(status)) throw new Error('Invalid status');

    return await Task.findByIdAndUpdate(id, { status }, { new: true });
};

// Delete task
const deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
};

// Assign task
const assignTask = async (taskId, userId) => {
    return await Task.findByIdAndUpdate(
        taskId,
        { assignedTo: userId },
        { new: true }
    );
};

module.exports = {
    createTask,
    getTasks,
    updateStatus,
    deleteTask,
    assignTask
};