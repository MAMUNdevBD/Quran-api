const tb_name = "words";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tb_name, (table) => {
    table.bigIncrements("id").unique().primary();
    table.integer("position");
    table.string("text_uthmani");
    table.string("text_imlaei");
    table.string("text_indopak");
    table.string("verse_key");
    table.integer("page_number");
    table.integer("line_number");
    table.string("audio_url");
    table.string("location");
    table.string("char_type_name");
    table.string("code_v1");
    table.string("code_v2");
    table.integer("v1_page");
    table.integer("v2_page");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tb_name);
};
