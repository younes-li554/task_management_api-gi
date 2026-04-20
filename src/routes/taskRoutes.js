const express = require('express');
const router = express.Router();

const controller = require('../controllers/taskController');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validationMiddleware');
const { createTaskValidation } = require('../validations/taskValidation');

// Create Task
router.post(
    '/',
    authMiddleware,
    roleMiddleware('admin', 'member'),
    ...createTaskValidation, // <-- هنا نفكك المصفوفة إلى middleware فردية
    validate,
    controller.createTask
);

// Get Tasks
router.get('/', authMiddleware, controller.getTasks);

// Update Status
router.put('/:id/status', authMiddleware, controller.updateStatus);

// Delete Task
router.delete('/:id', authMiddleware, roleMiddleware('admin'), controller.deleteTask);

module.exports = router;