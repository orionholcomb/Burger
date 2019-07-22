var mysql = require("mysql");

var connector = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "",
    database: "burgers_db"
});

connector.connect(function (err) {

    if (err) {
        console.log("There was an error connecting to the database");

        return;
    }

    console.log("connected to the database!")
});

module.exports = connector;