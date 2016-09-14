'use strict'; // strict mode
const db = require('../db');
const helpers = require('../helpers/test');

module.exports = {
  createTask: (task) => (
    new Promise((resolve, reject) => {
      const curDate = new Date();
      db.cypher({
        query: `MATCH (user: User) 
        WHERE ID(user)={userID}
          CREATE (task:Task {
          address: {address},
          taskName:{taskName},
          desc: {desc},
          type: {type},
          status: {status},
          assigneeCompleted: {assigneeCompleted},
          requestorCompleted: {requestorCompleted},
          difficulty:{difficulty},
          creationDate:{creationDate},
          deadlineDate:{deadlineDate},
          userID: {userID}
        })
        CREATE UNIQUE (task)-[:created_by]->(user) 
        RETURN task`,
        params: {
          address: task.address,
          taskName: task.taskName,
          desc: task.desc,
          type: task.type,
          status: 'requested',
          assigneeCompleted: false,
          requestorCompleted: false,
          difficulty: task.difficulty,
          creationDate: curDate,
          deadlineDate: task.deadlineDate,
          userID: task.userID,
        },
      }, (err, results) => {
        console.log('creating task');
        if (err) {
          console.log('err', err);
          return reject(err);
        }
        if (!results.length) {
          console.log('no user found for this task', results);
          return resolve({ message: 'no user found for this task' });
        }
        console.log('creating a task', results);
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
          console.log('error: ', err);
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
  getAllRequestedTasks: () => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (task:Task) Where task.status = "requested" RETURN task',
      }, (err, results) => {
        if (err) {
          console.log('error: ', err);
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

        query: `MATCH (task:Task),(user:User)
          WHERE ID(task)=${taskId} AND ID(user)=${userId}
          CREATE (task)-[a:assigned_to]->(user)
          SET task.status = "assigned"
          RETURN task ,user, a`,
      }, (err, results) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        if (!results.length) {
          console.log('No task found.');
          return resolve({ message: 'No tasks found on the server' });
        }
        console.log('Task assigned', results);
        return resolve(results);
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
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get task by Id: ', results);
        return resolve(results);
      });
    })
),
  updateTaskById: (taskId, newPropsObj) => (
    new Promise((resolve, reject) => {
      const paramsToSet = helpers.stringifyTask(newPropsObj);
      const ID = taskId;
      db.cypher({
        query: `MATCH (task:Task)
        WHERE ID(task)=${ID}
        SET ${paramsToSet}
        RETURN task`,
        params: newPropsObj,
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('updating task: ', result);
        return resolve(result);
      });
    })
  ),
  getTasksByUserId: (userId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (task:Task {userID: {userID}}) RETURN task',
        params: { userID: userId },
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get users by id', result);
        return resolve(result);
      });
    })
  ),
  getTasksAssignedByUserId: (userId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (user:User), (task:Task)
        WHERE ID(user)=${userId} AND (user)-[:assigned_to]-(task) AND task.status="assigned"
        RETURN task`,
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get task assigned to a userId: ', result);
        return resolve(result);
      });
    })
  ),
  getTasksCreatedByUserId: (userId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (user:User), (task:Task)
        WHERE ID(user)=${userId} AND (user)-[:created_by]-(task) AND task.status="assigned"
        RETURN task`,
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get task created by a user and status assigned', result);
        return resolve(result);
      });
    })
  ),
  getTasksCompletedByUserId: (userId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (user:User), (task:Task)
        WHERE ID(user)=${userId} AND (user)-[:assigned_to]-(task) AND task.status="completed"
        RETURN task`,
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get task a user compledted: ', result);
        return resolve(result);
      });
    })
  ),
  getTasksCompletedForUserByUserId: (userId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (user:User), (task:Task)
        WHERE ID(user)=${userId} AND (user)-[:created_by]-(task) AND task.status="completed"
        RETURN task`,
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get task completed for a user', result);
        return resolve(result);
      });
    })
  ),
  completeAssigneeTaskByTaskId: (taskId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (task:Task)
        WHERE ID(task)=${taskId}
        RETURN task`,
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('finding id', result);
        return resolve(result);
      });
    }).then(result => {
      if (result[0].task.properties.requestorCompleted) {
        db.cypher({
          query: `MATCH (task:Task)
          WHERE ID(task)=${taskId}
          SET task.assigneeCompleted=true , task.status='completed'
          RETURN task`,
        },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return (err);
        }
        console.log('changed assigneeCompleted to true, and status to completed', result);
        return (result);
      });
      } else {
        db.cypher({
          query: `MATCH (task:Task)
          WHERE ID(task)=${taskId}
          SET task.assigneeCompleted='true'
          RETURN task`,
        },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return (err);
        }
        console.log('changed assigneeCompleted to true', result);
        return (result);
      });
      }
    })
  ),

  completeRequestorTaskByTaskId: (taskId) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (task:Task)
        WHERE ID(task)=${taskId}
        CREATE UNIQUE (rating:Rating)-[:task_rating]-(task)
        Set rating.taskId=${taskId}
        RETURN task`,
      },
      (err, result) => {
        if (err) {
          return reject(err);
        }
        console.log('finding id', result);
        return resolve(result);
      });
    }).then(result => {
      if (result[0].task.properties.assigneeCompleted) {
        db.cypher({
          query: `MATCH (task:Task)
          WHERE ID(task)=${taskId}
          SET task.requestorCompleted=true , task.status='completed'
          RETURN task`,
        },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return (err);
        }
        console.log('changed requestorCompleted to true, and status to completed', result);
        return (result);
      });
      } else {
        db.cypher({
          query: `MATCH (task:Task)
          WHERE ID(task)=${taskId}
          SET task.requestorCompleted='true'
          RETURN task`,
        },
      (err, result) => {
        if (err) {
          return (err);
        }
        console.log('changed requestorCompleted to true', result);
        return (result);
      });
      }
    })
  ),

  ratingAssigneeTask: (taskId, newPropsObj) => (
    // Promise template
    new Promise((resolve, reject) => {
      const paramsToSet = helpers.stringifyAssigneeRating(newPropsObj);
      const ID = taskId;
      console.log('paramsToSet ', paramsToSet);
      console.log('newPropsObj ', newPropsObj);
      db.cypher({
        query: `MATCH (rating:Rating)
        WHERE rating.taskId=${ID}
        SET ${paramsToSet}
        RETURN rating`,
        params: newPropsObj,
      },

      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('updating rating node', result);
        return resolve(result);
      });
    })
  ),
  ratingRequestorTask: (taskId, newPropsObj) => (
    // Promise template
    new Promise((resolve, reject) => {
      const paramsToSet = helpers.stringifyRequestorRating(newPropsObj);
      const ID = taskId;
      console.log('paramsToSet ', paramsToSet);
      console.log('newPropsObj ', newPropsObj);
      db.cypher({
        query: `MATCH (rating:Rating)
        WHERE rating.taskId=${ID}
        SET ${paramsToSet}
        RETURN rating`,
        params: newPropsObj,
      },

      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('updating rating node', result);
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
          console.log('error: ', err);
          return reject(err);
        }
        console.log('delete a task: ', results);
        return resolve(results);
      });
    })
  ),
};
