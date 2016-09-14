'use strict';

const express = require('express');
const Task = require('../../models/task');

const router = express.Router(); // eslint-disable-line new-cap
const sendEmail = require('../email/email');

router.get('/', (req, res, next) => {
  Task.getAllTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.get('/requested', (req, res, next) => {
  Task.getAllRequestedTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.get('/requested/:user_Id', (req, res, next) => {
  const id = parseInt(req.params.user_Id, 10);
  Task.getTasksCreatedByUserId(id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.get('/assigned/:user_Id', (req, res, next) => {
  const id = parseInt(req.params.user_Id, 10);
  console.log('route side id: ', id);
  Task.getTasksAssignedByUserId(id)
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

router.post('/completed/assignee/:task_Id', (req, res, next) => {
  const id = parseInt(req.params.task_Id, 10);
  Task.completeAssigneeTaskByTaskId(id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.post('/completed/requestor/:task_Id', (req, res, next) => {
  const id = parseInt(req.params.task_Id, 10);
  Task.completeRequestorTaskByTaskId(id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.put('/rating/requestor/:task_Id', (req, res, next) => {
  const id = parseInt(req.params.task_Id, 10);
  const newProps = req.body;
  Task.collectiveTaskRatingByUserId(id);
  Task.ratingRequestorTask(id, newProps)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.put('/rating/assignee/:task_Id', (req, res, next) => {
  const id = parseInt(req.params.task_Id, 10);
  const newProps = req.body;
  Task.ratingAssigneeTask(id, newProps)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(next);
});

router.get('/:task_id', (req, res, next) => {
  const id = parseInt(req.params.task_id, 10);
  Task.getTaskById(id)
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

router.get('/requested_by/:user_id', (req, res, next) => {
  const id = parseInt(req.params.user_id, 10);
  Task.getTasksByUserId(id)
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

router.get('/add/to/db', (req, res, next) => {

  require('../../helpers/populateTask');
  res.send({ message: 'seeding db' });
});

router.get('/assign/to/db', (req, res, next) => {

  require('../../helpers/assignTask');
  res.send({ message: 'seeding db' });
});

router.post('/assign', (req, res, next) => {
  const taskId = req.body.taskId;
  const assigneeId = req.body.userId;
  console.log(req.body);
  sendEmail(taskId, assigneeId);
  Task.assignTasks(taskId, assigneeId)
   .then(result => {
     res.json(result);
   })
   .catch(next);
});

router.get('/completed_by/:user_id', (req, res, next) => {
  const id = parseInt(req.params.user_id, 10);
  Task.getTasksCompletedByUserId(id)
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

router.get('/completed_for/:user_id', (req, res, next) => {
  const id = parseInt(req.params.user_id, 10);
  Task.getTasksCompletedForUserByUserId(id)
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

router.put('/:task_id', (req, res, next) => {
  const id = parseInt(req.params.task_id, 10);
  const newProps = req.body;
  Task.updateTaskById(id, newProps)
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

router.delete('/:task_id', (req, res, next) => {
  const id = parseInt(req.params.task_id, 10);
  Task.deleteTaskById(id)
    .then(() => {
      res.send('task deleted');
    })
    .catch(next);
});

module.exports = router;
