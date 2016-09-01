const neo4j = require('neo4j-driver').v1;
const debugLog = require('debug')('db:index');

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);
const session = driver.session();

const Cypher = (queryFn, resultsFn, resultsOptions) => {
  return (params, options, callback) => {
    queryFn(params, options, (err, query, cypherParams) => {
      if (err) {
        // return callback(err, formatResponse(options, null, query, cypherParams, null, err));
        return callback(err);
      }
      let myResult = [];
      return session.run(query, cypherParams)
        .then(result => {
          result.records.forEach(record => {
            myResult.push(resultsFn(record));
            if (resultsOptions && resultsOptions.single) {
              myResult = myResult[0];
            }
          }); // Completed!
          session.close();
          return callback(err, {
            results: myResult,
          });
        }).catch(error => {
          console.error(error);
        });
    });
  };
};

// session
//   .run("CREATE (a:Person {name:'Arthur', title:'King'})")
//   .then(() => session.run(`
//     MATCH (a:Person)
//     WHERE a.name = 'Arthur'
//     RETURN a.name AS name, a.title AS title`
//   ))
//   .then(result => {
//     console.log('neo4j result');
//     console.log(`${result.records[0].get('title')} ${result.records[0].get('name')}`);
//     debugLog(`${result.records[0].get('title')} ${result.records[0].get('name')}`);
//     session.close();
//     driver.close();
//   }).catch(err => {
//     console.error('error with neo4j', err);
//   });
