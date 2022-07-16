const tb_name = "translations";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tb_name, (table) => {
    table.bigIncrements("id").unique().primary();
    table.enum("parent", ["language", "chapter", "verse"]);
    table.bigInteger("parent_id");
    table.string("name");
    table.string("lang_code");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tb_name);
};
