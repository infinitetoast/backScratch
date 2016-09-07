'use strict';

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
        if (!results.length) {
          console.log('no user found for this task', results);
          resolve({ message: 'no user found for this task' });
        } else {
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
          resolve({ message: 'No tasks found on the server' });
        } else {
          console.log(`Sending ${results.length} tasks`);
          resolve(results);
        }
      });
    })
  ),
  getTaskById: (taskId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (task) WHERE ID(task)={id} RETURN task',
        params: {
          id: taskId,
        },
      },
      (err, results) => {
        if (err) {
          reject(err);
        }
        console.log(results);
        resolve(results);
      });
    })
),
  updateTaskById: (taskId, newPropsObj) => (
     // Promise template
    new Promise((resolve, reject) => {
//todo
      // if (err) {
      //   reject(err);
      // }
      resolve(test.placeholderResponse);
    })
  ),
  getTasksByUserId: (userId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (t:Task {userID: {userID}}) RETURN t',
        params: { userID: userId },
      },
      (err, result) => {
        if (err) {
          reject(err);
        }
        console.log(result);
        resolve(result);
      });
    })
  ),
  deleteTaskById: (taskId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'START n=node({id}) MATCH (n)-[r]-() DELETE r, n',
        params: {
          id: taskId,
        },
      },
      (err, results) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.log(results);
        resolve(results);
      });
    })
  ),
};
