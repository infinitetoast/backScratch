const { session, driver } = require('../db');

module.exports = {
  createUser: (user) => {

  },
  getAllUsers: () => {
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
    //     session.close();
    //     driver.close();
    //   }).catch(err => {
    //     console.error('error with neo4j', err);
    //   });
  },
  getUserById: (userId) => {
    
  },
  updateUser: (userId, newPropsObj) => {
    
  },
};
