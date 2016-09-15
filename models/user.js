const helper = require('../helpers/test');
const db = require('../db');

module.exports = {
  // constraints must be set before you any data is added.
  // query: 'CREATE CONSTRAINT ON (user:User) ASSERT user.username IS UNIQUE',
  createUser: (user) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: `
          CREATE (user:User {
          username: {username},
          bio: {bio},
          email: {email},
          firstName: {firstName},
          lastName: {lastName},
          coins: {coins},
          rating: {rating},
          profileImgSrc: {profileImgSrc},
          city: {city},
          state: {state}})
          RETURN user`,
        params: {
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          coins: 1,
          rating: 3,
          profileImgSrc: user.profileImgSrc,
          bio: '',
          city: user.city,
          state: user.state,
        },
      },
      (err, result) => {
        console.log('creating user');
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('creating a user: ', result);
        return resolve(result);
      });
    })
  ),
  getAllUsers: () => (
    new Promise((resolve, reject) => {
      db.cypher(
        'Match (user:User) RETURN user',
        (err, result) => {
          if (err) {
            console.log('error: ', err);
            return reject(err);
          }
          if (!result) {
            return resolve([]);
          }
          console.log('get all users: ', result);
          return resolve(result);
        }
      );
    })
  ),
  getUserById: (userId) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (user),(rating:Rating)  
        WHERE ID(user)={id} AND rating.requestorRating={id} 
        WITH avg(rating.requestorRating) AS total 
        match (user:User) 
        WHERE ID(user)={id}
        SET user.rating=total 
        RETURN user,total`,
        params: {
          id: userId,
        },
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get user by Id: ', result);
        return resolve(result);
      });
    })
  ),


  getUserByTaskId: (taskId) => (
    new Promise((resolve, reject) => {
      db.cypher({
        query: `MATCH (task:Task),(user:User) 
        WHERE ID(task)=${taskId} AND ID(user)=task.requestorId 
        RETURN user`,
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get user by Id: ', result);
        return resolve(result);
      });
    })
  ),

  getUserByEmail: (userEmail) => (
    // Promise template
    new Promise((resolve, reject) => {
      db.cypher({
        query: 'MATCH (user:User) WHERE user.email={email} RETURN user',
        params: {
          email: userEmail,
        },
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('get user email: ', result);
        return resolve(result);
      });
    })
  ),

  updateUser: (userId, newPropsObj) => (
    new Promise((resolve, reject) => {
      const paramsToSet = helper.stringifyUser(newPropsObj);
      const ID = userId;
      db.cypher({
        query: `MATCH (user:User)
        WHERE ID(user)=${ID}
        SET ${paramsToSet}
        RETURN user`,
        params: newPropsObj,
      },
      (err, result) => {
        if (err) {
          console.log('error: ', err);
          return reject(err);
        }
        console.log('user Update: ', result);
        return resolve(result);
      });
    })
  ),

};
