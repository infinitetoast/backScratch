'use strict';

const express = require('express');
const Task = require('../../models/task');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res, next) => {
  Task.getAllTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const newTask = req.body;
  Task.createTask(newTask)
    .then((createdTask) => {
      res.json(createdTask);
    })
    .catch(next);
});

// router.get('/:userid?userid=id', (req, res, next) => {
//   const userId = req.query.userid;
//   res.send(userId);
// });

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  Task.getTaskById(id)
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

router.get('/requested_by/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  Task.getTasksByUserId(id)
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const newProps = req.body;
  Task.updateTaskById(id, newProps)
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  Task.deleteTaskById(id)
    .then(() => {
      res.send('task deleted');
    })
    .catch(next);
});

module.exports = router;
