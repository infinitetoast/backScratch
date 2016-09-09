'use strict'; // strict mode

const db = require('../db');
const helpers = require('../helpers/test');

module.exports = {
  createTask: (task) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (u: User) 
        WHERE ID(u)={userID}
          CREATE (task:Task {
          address: {address},
          taskName:{taskName},
          desc: {desc},
          type: {type},
          status: {status}
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
          status: 'requested',
          difficulty: task.difficulty,
          creationDate: task.creationDate,
          deadlineDate: task.deadlineDate,
          userID: task.userID,
        },
      }, (err, results) => {
        console.log('creating task');
        if (err) {
          return reject(err);
        }
        if (!results.length) {
          console.log('no user found for this task', results);
          return resolve({ message: 'no user found for this task' });
        }
        return resolve(results);
      });
    })
  ),

  getAllTasks: () => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (task:Task) RETURN task',
      }, (err, results) => {
        if (err) {
          return reject(err);
        }
        if (!results.length) {
          console.log('No task found.');
          return resolve({ message: 'No tasks found on the server' });
        }
        console.log(`Sending ${results.length} tasks`);
        return resolve(results);
      });
    })
  ),
  assignTasks: (taskId, userId) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: '',
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
          return reject(err);
        }
        console.log(results);
        return resolve(results);
      });
    })
),
  updateTaskById: (taskId, newPropsObj) => (
    new Promise((resolve, reject) => {
      const paramsToSet = helpers.stringifyTask(newPropsObj);
      const ID = taskId;
      db.cypher({
        query: `MATCH (t:Task)
        WHERE ID(t)=${ID}
        SET ${paramsToSet}
        RETURN t`,
        params: newPropsObj,
      },
      (err, result) => {
        if (err) {
          return reject(err);
        }
        console.log(result);
        return resolve(result);
      });
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
          return reject(err);
        }
        console.log(result);
        return resolve(result);
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
          return reject(err);
        }
        console.log(results);
        return resolve(results);
      });
    })
  ),
};
