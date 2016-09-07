'use strict';

const db = require('../db');

module.exports = {
  // constraints must be set before you any data is added.
  // query: 'CREATE CONSTRAINT ON (u:User) ASSERT u.username IS UNIQUE',
  createUser: (user) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: `
          CREATE (u:User {
          username: {username},
          bio: {bio},
          email: {email},
          firstName: {firstName},
          lastName: {lastName},
          coins: {coins},
          stars: {stars},
          profileImgSrc: {profileImgSrc},
          city: {city},
          state: {state}
          })
          RETURN u`,
        params: {
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          coins: user.coins,
          stars: user.stars,
          profileImgSrc: user.profileImgSrc,
          bio: user.bio,
          city: user.city,
          state: user.state,
        },
      },
      (err, result) => {
        console.log('creating user');
        if (err) reject(err);
        console.log('err', err);
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
          if (!result) {
            resolve([]);
          }
          if (err) reject(err);
          console.log(result);
          resolve(result);
        }
      );
    })
  ),
  getUserById: (userId) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (user) WHERE ID(user)={id} RETURN user',
        params: {
          id: userId,
        },
      },
      (err, result) => {
        if (err) {
          reject(err);
        }
        console.log(result);
        resolve(result);
      });
    })
  ),

  updateUser: (userId, newPropsObj) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (user) WHERE ID(user)={id} RETURN user',
        params: {
          id: userId,
        },
      },
      (err, result) => {
        if (err) {
          reject(err);
        }
        console.log(result);
        resolve({ message: 'Service not yet functional' });
      });
    })
  ),

};
