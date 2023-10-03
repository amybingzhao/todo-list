const mysql = require("mysql")
const util = require("util")

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: "TodoList",
})

const dbQuery = util.promisify(db.query).bind(db);

async function runQuery(query) {
    try {
        const result = await dbQuery(query);
        console.log(`Successfully ran ${query}`);
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = { runQuery }