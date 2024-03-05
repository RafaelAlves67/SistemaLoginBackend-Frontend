import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123456789#",
    database: "users"
})


