'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('inv_xperience', 'xperience_id', {
        type: Sequelize.INTEGER,
        after: 'id',
        allowNull: true
      })
    ])
  }, 
  
  async down(queryInterface, Sequelize) {
   return Promise.all([
    queryInterface.removeColumn('inv_xperience', 'xperience_id')
   ])
  }
};