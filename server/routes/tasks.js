const express = require('express');
const Task = require('../../models/task');

const router = express.Router(); // eslint-disable-line new-cap

const exampleTask = {
  name: 'cut my lawn',
  location: {
    address: '748 Camp',
    city: 'New Orleans',
    state: 'LA',
  },
};

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
    .then(task => {
      res.json(task);
    })
    .catch(next);
});

// router.get('/:userid?userid=id', (req, res, next) => {
//   const userId = req.query.userid;
//   res.send(userId);
// });

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  res.json({ id });
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  res.json({ id });
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Task.deleteTaskById(id);
  res.json({ id });
});

module.exports = router;
