exports.up = function (knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('email', 255);
        table.string('address', 255);
        table.string('phone', 255);
    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("users");
};