const faker = require("faker")
const generate = Array(20).fill(0).map((_, i) => {
  return {
    title: faker.lorem.words(),
    body: faker.lorem.paragraphs(),
    slug: faker.lorem.slug()
  }
})

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert(generate);
    });
};