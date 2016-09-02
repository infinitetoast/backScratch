const db = require('../db');

module.exports = {
  createTask: (task) => (
    new Promise((resolve, reject) => {
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
        } else {
          const theTask = result.task;
          console.log(JSON.stringify(theTask, null, 4));
          resolve(theTask);
        }
      });
    })
  ),

  getAllTasks: () => {
    db.cypher({
      query: 'MATCH (task:Task) RETURN task',
    }, (err, results) => {
      if (err) throw err;
      const result = results[0];
      if (!result) {
        console.log('No task found.');
      } else {
        const task = result.task;
        console.log(JSON.stringify(task, null, 4));
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
