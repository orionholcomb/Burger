var connector = require("./connection.js");

var orm = {
    selectAll = function(verdict) {
        var select = "SELECT * FROM burgers;";
        connector.query(select, function(err, res) {
            if (err) {
                console.log("There was an error selecting from the database");
            }
            verdict(res);
        });
    },

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