const bcryptjs = require('bcryptjs')

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface) => {
      await queryInterface.bulkInsert(
        'users',
        [
        {
        nome: 'Luiz',
        email: "luizito@hothot.com",
        password_hash: await bcryptjs.hash('123456', 11),
        created_at: new Date(),
        updated_at: new Date(),
        },
        {
        nome: 'Marco',
        email: "Marquito@hothot.com",
        password_hash: await bcryptjs.hash('654321', 11),
        created_at: new Date(),
        updated_at: new Date(),
          },
          {
        nome: 'Serjao',
        email: "serjao@hothot.com",
        password_hash: await bcryptjs.hash('1234', 11),
        created_at: new Date(),
        updated_at: new Date(),
            }
    ],
      {});

  },

   down (queryInterface, Sequelize) {

  }
};
