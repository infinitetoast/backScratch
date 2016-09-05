'use strict';

const neo4jNode = require('neo4j');

// https://www.npmjs.com/package/neo4j
module.exports = new neo4jNode.GraphDatabase(process.env.NEO4J_URL);
