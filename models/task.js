const db = require('../db');

module.exports = {
  createTask: (task) => {
    db.cypher({
      query: `CREATE (t:Task {
        address: {address},
        taskName:{taskName},
        desc: {desc},
        type: {type},
        difficulty:{difficulty},
        creationDate:{creationDate},
        deadlineDate:{deadlineDate} 
      }) RETURN t`,
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
      if (err) throw err;
      const result = results[0];
      if (!result) {
        console.log('No user found.');
      } else {
        const theTask = result['t'];
        console.log(JSON.stringify(theTask, null, 4));
      }
    });
  },

  getAllTasks: () => {
    db.cypher({
      query: 'MATCH (t:Task) RETURN t',
    }, (err, results) => {
      if (err) throw err;
      const result = results[0];
      if (!result) {
        console.log('No task found.');
      } else {
        const task = result['t'];
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

const test = {
  address: ' 8008 Crazy Street',
  taskName: 'Buy me some bananas',
  desc: 'I need some bananas ASAP! Do not ask why.',
  type: 'Errands',
  difficulty: 1,
  creationDate: '2016-09-11T04:10:00.000Z',
  deadlineDate: '2016-09-11T05:15:00.000Z',
};

module.exports.getAllTasks();
