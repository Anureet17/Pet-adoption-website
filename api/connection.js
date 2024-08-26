const mysql = require("mysql")

/* DB connection */
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "system",
    database: "petAdoption"
})

connection.connect((error) => {
    if(error) {
        // console.log("Error")
        console.log(error.message)
    } else {
        console.log("DB Connected")
    }
})

module.exports = connection