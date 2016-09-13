const task = require('../models/task');


const task1 = {
  address: '142 lost road',
  taskName: 'where in the world is carmen sandiago',
  desc: 'she is lost and no one can fins here this is your mission!',
  type: 'Handyman',
  difficulty: 1,
  deadlineDate: '2016-10-01T17:50:00.000Z',
  userID: 267,
};

const task2 = {
  address: 'ABC Lane',
  taskName: 'I am being sued',
  desc: 'Please give me some poorly thought out legal advice',
  type: 'Informative',
  difficulty: 1,
  deadlineDate: '2016-11-11T01:22:00.000Z',
  userID: 5,
};

const task3 = {
  address: '6969 HotStuff Avenue',
  taskName: 'Clean my toilet',
  desc: 'HELP! I TOOK A BIG DUMP AND THERE IS POO POO EVERYWHERE!',
  type: 'Domestic',
  difficulty: 3,
  deadlineDate: '2016-10-03T02:33:00.000Z',
  userID: 6,
};

const task4 = {
  address: ' 8900 lake forest blvd',
  taskName: 'Find my socks',
  desc: 'i put it in the dryer and now they gone',
  type: 'Errands',
  difficulty: 1,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 7,
};

const task5 = {
  address: ' 8008 Crazy Street',
  taskName: 'Buy me some bananas',
  desc: 'I need some bananas ASAP! Do not ask why.',
  type: 'Physical Labor',
  difficulty: 1,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 8,
};

const task6 = {
  address: ' 123 Lane Street',
  taskName: 'im confused',
  desc: 'no sure what im on this is so weird.',
  type: 'Errands',
  difficulty: 1,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 9,
};

const task7 = {
  address: ' 3213 Cry Street',
  taskName: 'take me on a date',
  desc: 'im broke and i want to eat something ',
  type: 'Miscellaneous',
  difficulty: 1,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 10,
};

const task8 = {
  address: ' 999 please Street',
  taskName: 'just do it',
  desc: 'yes',
  type: 'Errands',
  difficulty: 1,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 11,
};

const task9 = {
  address: ' 8008 Crazy Street',
  taskName: 'Buy me some bananas',
  desc: 'I need some bananas ASAP! Do not ask why.',
  type: 'Errands',
  difficulty: 1,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 12,
};

const task10 = {
  address: ' 7462 love lane',
  taskName: 'Sidekick needed',
  desc: 'looking to expand m super hero business, so come and help a super hero out',
  type: 'Handyman',
  difficulty: 2,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 13,
};

const task11 = {
  address: ' 808 Heartbreak Road',
  taskName: 'try my cookies',
  desc: 'cookies are my passion but my i need someone to try them',
  type: 'Miscellaneous',
  difficulty: 1,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 14,
};

const task12 = {
  address: ' 2397 whatnot Lane',
  taskName: 'teach me coding',
  desc: 'i have a great idea and would like someone to show me how to make it a reality',
  type: 'Informative',
  difficulty: 1,
  deadlineDate: '2016-09-11T05:15:00.000Z',
  userID: 7,
};

task.createTask(task1);
// task.createTask(task2);
// task.createTask(task3);
// task.createTask(task4);
// task.createTask(task5);
// task.createTask(task6);
// task.createTask(task7);
// task.createTask(task8);
// task.createTask(task9);
// task.createTask(task10);
// task.createTask(task11);
// task.createTask(task12);
