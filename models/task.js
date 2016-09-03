const db = require('../db');
const test = require('../helpers/test');

module.exports = {
  createTask: (task) => (
    new Promise((resolve, reject) => {
      let query = [];
      let params = {};
      db.cypher({
        query: `CREATE (task:Task {
          address: {address},
          taskName:{taskName},
          desc: {desc},
          type: {type},
          difficulty:{difficulty},
          creationDate:{creationDate},
          deadlineDate:{deadlineDate} 
        }) RETURN task`,
        params: {
          address: task.address,
          taskName: task.taskName,
          desc: task.desc,
          type: task.type,
          difficulty: task.difficulty,
          creationDate: task.creationDate,
          deadlineDate: task.deadlineDate,
        },
      }, (err, results) => {
        console.log('creating task');
        if (err) reject(err);
        const result = results[0];
        if (!result) {
          console.log('No user found.');
          resolve({});
        } else {
          const theTask = result.task;
          console.log(JSON.stringify(theTask, null, 4));
          resolve(theTask);
        }
      });
    })
  ),

  getAllTasks: () => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (task:Task) RETURN task',
      }, (err, results) => {
        if (err) reject(err);
        if (!results.length) {
          console.log('No task found.');
          resolve([]);
        } else {
          const task = results;
          console.log(JSON.stringify(task, null, 4));
          resolve(task);
        }
      });
    })
  ),
  getTaskById: (taskId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher(
        'MATCH (t:task) WHERE ID(t)= RETURN t'
        );
      // if (err) {
      //   reject(err);
      // }
      resolve(test.placeholderResponse);
    })
  ),
  updateTaskById: (taskId, newPropsObj) => (
     // Promise template
    new Promise((resolve, reject) => {

      // if (err) {
      //   reject(err);
      // }
      resolve(test.placeholderResponse);
    })
  ),
  getTasksByUserId: (userId) => (
    // Promise template
    new Promise((resolve, reject) => {
      // if (err) {
      //   reject(err);
      // }
      resolve(test.placeholderResponse);
    })
  ),
  deleteTaskById: (taskId) => (
    // Promise template
    new Promise((resolve, reject) => {
      // if (err) {
      //   reject(err);
      // }
      resolve(test.placeholderResponse);
    })
  ),
};
