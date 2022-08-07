const tb_name = "verses";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tb_name, (table) => {
    table.bigIncrements("id").unique().primary();
    table.integer("chapter_id");
    table.integer("verse_number");
    table.string("verse_key");
    table.integer("verse_index");
    table.string("text_uthmani");
    table.string("text_uthmani_simple");
    table.string("text_imlaei");
    table.string("text_imlaei_simple");
    table.string("text_indopak");
    table.string("text_uthmani_tajweed");
    table.integer("juz_number");
    table.integer("hizb_number");
    table.integer("rub_number");
    table.string("sajdah_type");
    table.string("sajdah_number");
    table.integer("page_number");
    table.string("image_url");
    table.integer("image_width");
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
