const tb_name = "lessons";

// title, course, video link, pdfs

// quiz question, options

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tb_name, (table) => {
    table.bigIncrements("id").unique().primary();
    table.string("title");
    table.integer("course_id").notNullable();
    table.string("video_link");
    table.json("pdfs");
    table.text("description");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tb_name);
};
