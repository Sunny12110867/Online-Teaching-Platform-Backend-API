import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Bhardwaj@12110867',
    database: 'airtribe'
};

const db = mysql.createPool(dbConfig);

export default db;
