exports.up = function (knex) {
    return knex.schema.createTable("cars", (table) => {
        table.increments();
        table.string("VIN", 17).notNullable().unique();
        table.string("make").notNullable();
        table.string("model").notNullable();
        table.float("mileage").notNullable();
        table.string("title");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars");
};
