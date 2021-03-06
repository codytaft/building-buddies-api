
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/buildingbuddies',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: `${__dirname}/db/seeds/development`,
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/buildingbuddies_test',
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: `${__dirname}/db/seeds/test`,
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: `${__dirname}/db/seeds/production`,
    },
    useNullAsDefault: true,
  },
};
