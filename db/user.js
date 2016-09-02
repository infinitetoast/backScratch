// // Require the Neo4J module
// const Neo4j = require('node-neo4j');

// // Create a db object. We will using this object to work on the DB.
// const db = new Neo4j('http://neo4j:neo@localhost:7474');

// // Run raw cypher with params
// db.cypherQuery(
//   'CREATE (user:User { name: {username}, from: {company}, age: {age} }) RETURN somebody',
//   {
//     username: 'Ghuffran',
//     company: 'Modulus',
//   }, (err, result) => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(result.data); // delivers an array of query results
//     console.log(result.columns); // delivers an array of names of objects getting returned
//   }
// );
