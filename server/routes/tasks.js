const express = require('express');

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
  res.json([exampleTask]);
});

module.exports = router;
