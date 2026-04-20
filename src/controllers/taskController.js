const taskService = require('../services/taskService');

const createTask = async (req, res) => {
    try {
        if (!req.body.assignedTo) req.body.assignedTo = req.user.id;
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks(req.user.id, req.user.role);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateStatus = async (req, res) => {
    try {
        const task = await taskService.updateStatus(req.params.id, req.body.status);
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        await taskService.deleteTask(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateStatus,
    deleteTask
};