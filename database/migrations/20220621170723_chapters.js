const tb_name = "chapters";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(tb_name, (table) => {
    table.bigIncrements("id").unique().primary();
    table.string("revelation_place");
    table.integer("revelation_order");
    table.boolean("bismillah_pre");
    table.string("name_complex");
    table.string("name_arabic");
    table.integer("verses_count");
    table.integer("start_page");
    table.integer("end_page");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tb_name);
};
