
// creating a database connection
const Pool = require('pg').Pool;
const connectionString = {
  user: 'postgres',
  host: 'localhost',
  database: 'nodedb',
  password: '123',
  port: 5432,
};

module.exports = {
  connection_string: connectionString,
  connection: new Pool(connectionString),
  session_key: 'ravi',
  app_key: 'Luxk2PdtS3eN3WsS6fXudg',
  app_secret: '2JmQ0t7COw5YTNQhEQlmGWFplS3UrGZT9q51',
};