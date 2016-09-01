const neo4j = require('neo4j-driver').v1;

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

module.exports = {
  session,
  Cypher,
  driver,
};
