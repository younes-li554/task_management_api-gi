const express = require('express');
const router = express.Router();

const controller = require('../controllers/projectController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, controller.createProject);
router.get('/', authMiddleware, controller.getProjects);

module.exports = router;