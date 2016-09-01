const db = require('../db');

module.exports = {
  createTask: (task) => {
    return new Promise((resolve, reject) => {

    });
  },
  getAllTasks: () => {
    db.cypher({
      query: 'MATCH (u:Person {name: {name}}) RETURN u',
      params: {
        name: 'Arthur',
      },
    }, (err, results) => {
      if (err) throw err;
      const result = results[0];
      if (!result) {
        console.log('No user found.');
      } else {
        const user = result['u'];
        console.log(JSON.stringify(user, null, 4));
      }
    });
  },
  getTaskById: (taskId) => {
     // taskId is string
    
  },
  updateTaskById: (taskId, newPropsObj) => {
    /* 
      newPropsObj = {
        stars: 4,
        dueDate: 31231 
      }
    */
  },
  getTasksByUserId: (userId) => {

  },
  deleteTaskById: (taskId) => {

  },
};
