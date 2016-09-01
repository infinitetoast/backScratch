const express = require('express');
const User = require('../../models/user');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
  res.json(User.getAllUsers());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json(User.getUserById(id));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const newProps = req.body;
  res.json(User.updateUser(id, newProps));
});

module.exports = router;
