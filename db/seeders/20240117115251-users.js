'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Anatoliy',
          isAdmin: false,
          password: await bcrypt.hash('123', 10),
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U04V306UPFU-fd6bea915107-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Anna',
          isAdmin: false,
          password: await bcrypt.hash('123', 10),
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U04V2RKNTQT-27e88a30d249-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vladislav',
          isAdmin: false,
          password: await bcrypt.hash('123', 10),
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U055XJJM6EL-f1b198fdec4c-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Yuriy',
          isAdmin: false,
          password: await bcrypt.hash('123', 10),
          img: 'https://ca.slack-edge.com/T04V5DDHUN8-U0501JBRK0R-fc535f5fab4d-512',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Andrey',
          isAdmin: false,
          password: await bcrypt.hash('123', 10),
          img: 'https://files.slack.com/files-tmb/T04V5DDHUN8-F06541K4DHN-604ac3065d/e30bebd9bc8a2aad2d35bfabad2f1eb5_480.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'admin',
          isAdmin: true,
          password: await bcrypt.hash('123', 10),
          img: 'https://avatars.mds.yandex.net/i?id=33cf8b8f5c72c3a276d2e36f86728d4b0f3dd992-8210081-images-thumbs&n=13',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
