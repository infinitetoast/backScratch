const { session, driver } = require('../db');

module.exports = {
  createTask: (task) => {
    return new Promise((resolve, reject) => {

    });
  },
  getAllTasks: () => {

  },
  getTaskById: (taskId) => {
     // taskId is string
    
  },
  updateTaskById: (taskId, newPropsObj) => {
    /* 
      newPropsObj = {
        stars: 4,
        dueDate: 31231 
      }
    */
  },
  getTasksByUserId: (userId) => {

  },
  deleteTaskById: (taskId) => {

  },
};
