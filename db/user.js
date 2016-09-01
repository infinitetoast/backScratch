// Require the Neo4J module
const Neo4j = require('node-neo4j');

// Create a db object. We will using this object to work on the DB.
const db = new Neo4j('http://localhost:7474');

// Run raw cypher with params
db.cypherQuery(
  'CREATE (somebody:Person { name: {name}, from: {company}, age: {age} }) RETURN somebody',
  {
    name: 'Ghuffran',
    company: 'Modulus',
    age: ~~(Math.random() * 100), //generate random age
  }, function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log(result.data); // delivers an array of query results
    console.log(result.columns); // delivers an array of names of objects getting returned
  }
);
