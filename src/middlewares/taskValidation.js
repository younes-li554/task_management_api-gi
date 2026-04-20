const { body } = require('express-validator');

const createTaskValidation = [
    body('title')
        .notEmpty()
        .withMessage('Title is required'),
    body('status')
        .optional()
        .isIn(['todo', 'in_progress', 'done'])
        .withMessage('Invalid status'),
    body('priority')
        .optional()
        .isIn(['low', 'medium', 'high'])
        .withMessage('Invalid priority')
];

module.exports = { createTaskValidation };