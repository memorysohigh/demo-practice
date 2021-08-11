const mysql = require('mysql')

// 创建mysql数据库

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'mysql'
})

connection.connect()

let query = connection.query


module.exports = {
    query
}