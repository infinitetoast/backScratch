const db = require('../db');
const test = require('../helpers/test');

module.exports = {
  createTask: (task) => (
    new Promise((resolve, reject) => {
      let query = [];
      let params = {};
      db.cypher({
        query: `MATCH (u: User) 
        WHERE ID(u)={userID}
          CREATE (task:Task {
          address: {address},
          taskName:{taskName},
          desc: {desc},
          type: {type},
          difficulty:{difficulty},
          creationDate:{creationDate},
          deadlineDate:{deadlineDate},
          userID: {userID}
        })-[:created_by]->(u) RETURN task`,
        params: {
          address: task.address,
          taskName: task.taskName,
          desc: task.desc,
          type: task.type,
          difficulty: task.difficulty,
          creationDate: task.creationDate,
          deadlineDate: task.deadlineDate,
          userID: task.userID,
        },
      }, (err, results) => {
        console.log('creating task');
        if (err) reject(err);
        // const result = results[0];
        if (!results) {
          console.log('couldnt add task', results);
          resolve({});
        } else {
          // const theTask = result.task;
          // console.log(JSON.stringify(theTask, null, 4));
          console.log('i think it worked', results);
          resolve(results);
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
      db.cypher({
        query: 'MATCH (t:task) WHERE ID(t)={id} RETURN t',
        params: {
          id: taskId,
        },
      },
      (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
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

module.exports.createTask({
 address: ' 8008 Crazy Street',
 taskName: 'Buy me some bananas',
 desc: 'I need some bananas ASAP! Do not ask why.',
 type: 'Errands',
 difficulty: 1,
 creationDate: '2016-09-11T04:10:00.000Z',
 deadlineDate: '2016-09-11T05:15:00.000Z',
 userID: 214,
})