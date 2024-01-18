'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          user_id: 1,
          news_id: 1,
          comment: '1111',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          news_id: 1,
          comment: '2222',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          news_id: 1,
          comment: '3333',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
