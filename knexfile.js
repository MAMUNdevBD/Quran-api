// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "codeaz",
      database: "quran",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "codeaz",
      database: "quran",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "codeaz",
      database: "quran",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/database/migrations",
    },
    seeds: {
      directory: __dirname + "/database/seeds",
    },
  },
};
