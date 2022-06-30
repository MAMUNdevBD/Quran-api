const tb_name = "languages";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tb_name, (table) => {
    table.bigIncrements("id").unique().primary();
    table.string("name");
    table.string("iso_code");
    table.string("native_name");
    table.enum("direction", ["rtl", "ltr"]);
    table.integer("translations_count").defaultTo(0);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tb_name);
};
