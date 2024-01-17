'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Anatoliy',
          password: 123,
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U04V306UPFU-fd6bea915107-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Anna',
          password: 123,
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U04V2RKNTQT-27e88a30d249-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vladislav',
          password: 123,
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U055XJJM6EL-f1b198fdec4c-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Yuriy',
          password: 123,
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U0501JBRK0R-fc535f5fab4d-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Andrey',
          password: 123,
          img: 'https://files.slack.com/files-tmb/T04V5DDHUN8-F06541K4DHN-604ac3065d/e30bebd9bc8a2aad2d35bfabad2f1eb5_480.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
