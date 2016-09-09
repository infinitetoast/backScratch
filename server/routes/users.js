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

router.get('/add/to/db', (req, res, next) => {

  require('../../helpers/populateDb');
  res.send({ message: 'seeding db' });
});

router.get('/login/:email', (req, res, next) => {
  const userEmail = decodeURIComponent(req.params.email);
  User.getUserByEmail(userEmail)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

router.get('/:user_id', (req, res, next) => {
  const id = parseInt(req.params.user_id, 10);
  User.getUserById(id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

router.put('/:user_id', (req, res, next) => {
  const id = parseInt(req.params.user_id, 10);
  const newProps = req.body;
  User.updateUser(id, newProps)
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch(next);
});

module.exports = router;
