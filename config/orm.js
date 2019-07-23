var connector = require("./connection.js");

var orm = {

    // function that selects all current information from database and stores it in a variable
    selectAll = function(verdict) {
        var select = "SELECT * FROM burgers;";
        connector.query(select, function(err, res) {
            if (err) {
                console.log("There was an error selecting from the database");
            }
            verdict(res);
        });
    },

    // function that takes the values input from the user and inserts them in to the database
    insertOne = function(values, verdict) {
        var insert = "INSERT INTO burgers (burger_name, devoured) VALUES ";

        insert + "(" + values + ");";

        console.log(insert);

        connector.query(insert, values, function (err, res) {
            if (err) {
                console.log("There was an error adding to the database");
            }
            verdict(res);
        });
    },

    // function that takes user inputs and updates the database depending on the condition (ID tag) selected
    updateOne = function( updateInfo, condition, verdict ) {
        var update = "UPDATE burgers SET ";

        update + updateInfo + "WHERE" + condition;

        console.log(update);
        connector.query(update, function(err, res) {
            if (err) {
                console.log("There was an error updating the database");
            }
            verdict(res);
        });
    }
};

module.exports = orm;