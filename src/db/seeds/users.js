const faker = require("faker")
const generate = Array(10).fill(0).map((_, i) => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetName(),
    phone: faker.phone.phoneNumber()
  }
})

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(generate);
    });
};