const tb_name = "chapter_translations";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tb_name, (table) => {
    table.bigIncrements("id").unique().primary();
    table
      .bigInteger("chapter_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("chapters")
      .onDelete("CASCADE")
      .notNullable();
    table
      .bigInteger("lang_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("languages")
      .onDelete("SET NULL");
    table.string("lang_code");
    table.string("name");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tb_name);
};
