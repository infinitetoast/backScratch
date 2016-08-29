const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
  res.json({ users: ['some guy', 'another guy'] });
});

module.exports = router;
