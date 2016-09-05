'use strict';

const express = require('express');
const User = require('../../models/user');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res, next) => {
  User.getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const newUser = req.body;

  User.createUser(newUser)
    .then((createdUser) => {
      res.json(createdUser);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.getUserById(id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const newProps = req.body;
  User.updateUser(id, newProps)
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch(next);
});

module.exports = router;
