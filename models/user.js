const db = require('../db');
const test = require('../helpers/test');

module.exports = {
  createUser: (user) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: `CREATE (u:User {
          username: {username},
          bio: {bio}, 
          email: {email}, 
          firstName: {firstName},
          lastName: {lastName}, 
          coins: {coins},
          stars:{stars},
          profileImage: {profileImage},
          city: {city},
          state: {state}
        }) RETURN u`,
        params: {
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          coins: user.coins,
          stars: user.stars,
          profileImage: user.profileImage,
          bio: user.bio,
          city: user.city,
          state: user.state,
        },
      },
      (err, result) => {
        if (err) reject(err);
        // console.log(result.data); // delivers an array of query results
        // console.log(result.columns); // delivers an array of names of objects getting returned
        resolve(result);
      });
    })
  ),
  getAllUsers: () => (
    new Promise((resolve, reject) => {
      db.cypher(
        'Match (u:User) RETURN u',
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    })
  ),
  getUserById: (userId) => (
    // Promise template
    new Promise((resolve, reject) => {
      // if (err) {
      //   reject(err);
      // }
      resolve(test.placeholderResponse);
    })
  ),

  updateUser: (userId, newPropsObj) => (
    // Promise template
    new Promise((resolve, reject) => {
      // if (err) {
      //   reject(err);
      // }
      resolve(test.placeholderResponse);
    })
  ),
};
