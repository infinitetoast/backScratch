const db = require('../db');

module.exports = {
  // createTask: (task) => {
  //   db.cypher({
  //     query: `CREATE (t:Task {
  //       address: {address}
  //     }) RETURN t`,
  //     params: {
  //       address: ' 8008 Crazy Street',
  //     },
  //   }, (err, results) => {
  //     if (err) throw err;
  //     const result = results[0];
  //     if (!result) {
  //       console.log('No user found.');
  //     } else {
  //       const task = result['t'];
  //       console.log(JSON.stringify(task, null, 4));
  //     }
  //   });
  // },

  // getAllTasks: () => {
  //   db.cypher({
  //     query: 'MATCH (t:Task) RETURN t',
  //   }, (err, results) => {
  //     if (err) throw err;
  //     const result = results[0];
  //     if (!result) {
  //       console.log('No user found.');
  //     } else {
  //       const task = result['t'];
  //       console.log(JSON.stringify(task, null, 4));
  //     }
  //   });
  // },
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
