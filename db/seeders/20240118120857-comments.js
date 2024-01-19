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
          comment: 'Безобразие',
          comment_user_name: 'Anatoliy',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          news_id: 1,
          comment: 'Уууууу',
          comment_user_name: 'Anna',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          news_id: 1,
          comment: 'Я не успел попробовать!',
          comment_user_name: 'Vladislav',
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