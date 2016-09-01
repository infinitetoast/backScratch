const { session, driver } = require('../db');

module.exports = {
  createTask: (task) => {
    return new Promise((resolve, reject) => {

    });
  },
  getAllTasks: () => {
    // session
    //   .run(`
    //     CREATE (a:Person 
    //       {
    //         name:'Arthur',
    //         title:'King'
    //       }
    //     )
    //   `)
    //   .then(() => session.run(`
    //     MATCH (a:Person)
    //     WHERE a.name = 'Arthur'
    //     RETURN a.name AS name, a.title AS title`
    //   ))
    //   .then(result => {
    //     console.log('neo4j result');
    //     console.log(`${result.records[0].get('title')} ${result.records[0].get('name')}`);
    //     res.send('neo4j');
    //     session.close();
    //     driver.close();
    //   }).catch(err => {
    //     console.error('error with neo4j', err);
    //   });
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
