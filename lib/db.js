import mysql from 'mysql2/promise';

export async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'acai',
  });

  return connection;
}