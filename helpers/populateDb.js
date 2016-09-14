const db = require('../db');
const user = require('../models/user');
console.log('we are in the right place');

const satima = {
  username: 'OnePunch',
  email: 'onePunch@gmail.com',
  firstName: 'satima',
  lastName: 'puncher',
  profileImgSrc: '12k3jhd.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const chramer = {
  username: 'sideKicker',
  email: 'porkSauaasge@gmail.com',
  firstName: 'K3one',
  lastName: 'L--t',
  profileImgSrc: 'as3485.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const world = {
  username: 'MWP',
  email: 'ronArtest@gmail.com',
  firstName: 'Metta',
  lastName: 'WorldPeace',
  profileImgSrc: 'fg4234.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const faker = {
  username: 'fakejake ',
  email: 'sdhslsd@gmail.com',
  firstName: 'uwish',
  lastName: 'dontya',
  profileImgSrc: 'wrhd8344.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const joe = {
  username: 'SCARjoe',
  email: 'therealscarjoe@gmail.com',
  firstName: 'Scars',
  lastName: 'joesph',
  profileImgSrc: 'wrhd834.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const flash = {
  username: 'theFlash',
  email: 'speedforce@gmail.com',
  firstName: 'Adam',
  lastName: 'West',
  profileImgSrc: 'oehdh834.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const ramsey = {
  username: 'murdershewrote',
  email: 'feeddahounds@gmail.com',
  firstName: 'Ramsey',
  lastName: 'Bolton',
  profileImgSrc: 'frwd34.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const tiffany = {
  username: 'datBecky',
  email: 'blu@gmail.com',
  firstName: 'Tiffany',
  lastName: 'lucas',
  profileImgSrc: '56tfg.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const richard = {
  username: 'vanDike',
  email: 'PI@gmail.com',
  firstName: 'Richard',
  lastName: 'VanDyke',
  profileImgSrc: '6654gf.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const susan = {
  username: 'ormanshow',
  email: 'theshow@gmail.com',
  firstName: 'Susan',
  lastName: 'Ormon',
  profileImgSrc: 'y6rh6d.jpg',
  city: 'New Orleans',
  state: 'LA',
};
const caroline = {
  username: 'thereasonfortheword',
  email: 'carol@gmail.com',
  firstName: 'Caroline',
  lastName: 'bWord',
  profileImgSrc: 'htdd834.jpg',
  city: 'New Orleans',
  state: 'LA',
};
user.createUser(satima);
user.createUser(chramer);
user.createUser(world);
user.createUser(faker);
user.createUser(joe);
user.createUser(caroline);
user.createUser(susan);
user.createUser(richard);
user.createUser(ramsey);
user.createUser(flash);
user.createUser(tiffany);
