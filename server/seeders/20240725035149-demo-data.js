"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dataCompany = require("../data/data.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    await queryInterface.bulkInsert("Data", dataCompany, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Data", null, {});
  },
};
