const express = require('express');
const taskRoutes = require('./tasks');
const userRoutes = require('./users');

const router = express.Router(); // eslint-disable-line new-cap

router.use('/tasks', taskRoutes);
router.use('/users', userRoutes);

module.exports = router;
