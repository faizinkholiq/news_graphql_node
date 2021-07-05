exports.up = function (knex) {
    return knex.schema
    .createTable('posts', function (table) {
        table.increments('id');
        table.string('title', 255).notNullable();
        table.text('body');
        table.string('slug', 255);
        table.timestamp('date').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("posts");
};
