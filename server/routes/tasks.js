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

router.get('/', (req, res) => {
  const tasks = Task.getAllTasks();
  res.send([exampleTask]);
});

router.post('/', (req, res) => {
  const newTask = req.body;
  Task.createTask(newTask);
  res.json({ createdTask: newTask });
});

// router.get('/:userid?userid=id', (req, res) => {
//   const userId = req.query.userid;
//   res.send(userId);
// });

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('get', id);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.send(id);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Task.deleteTaskById(id);
  res.send(id);
});

module.exports = router;
