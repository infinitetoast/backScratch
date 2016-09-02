const db = require('../db');

module.exports = {
  createUser: (user) => {

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
      if (err) {
        return console.log(err);
      }
      console.log(result.data); // delivers an array of query results
      console.log(result.columns); // delivers an array of names of objects getting returned
      return console.log('casue i was told to');
    });
  },
//   getAllUsers: () => {
//     db.cypher(
//       'Match (u:User) RETURN u',
//        (err,result) => {
//         if (err){
//           return console.log(err);
//         }
//       }
//       );
//   },
  getUserById: (userId) => {
  },

  updateUser: (userId, newPropsObj) => {
  },
};

let test = {
 username: 'nealtaylorjs',
 email: 'nealtyalor@gmail.com',
 firstName: 'Neal',
 lastName: 'Taylor',
 coins: 4,
 stars: 3.5,
 profileImage: '12k3jhd.jpg',
 bio: 'Hello I am Neal Taylor and I am very young!',
 city: 'New Orleans',
 state: 'LA',
};

module.exports.createUser(test);
