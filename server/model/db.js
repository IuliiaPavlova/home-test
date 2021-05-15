/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';
import pkg from 'pg';

const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const query = `
CREATE TABLE IF NOT EXISTS users (
  id integer PRIMARY KEY NOT NULL,
  name varchar(40),
  email varchar(40) NOT NULL,
  password varchar(40) NOT NULL
);
`;
pool.query(query, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Table is successfully created');
  pool.end();
});

export default pool;
