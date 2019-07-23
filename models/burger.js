import orm from "../config/orm,js";

// relaying recorded info to the orm
var burger = {
  select: orm.selectAll(),

  // takes the new burger name and sends it to the insertOne function
  insert: function(name, verdict) {
    orm.insertOne([name, false], verdict);
  },

  // creates variables to use the updateOne function with name and ID provided by the user
  update: function(name, id, verdict) {
    var newInfo = "burger_name = '" + name + "', devoured: true";
    var condition = "id=" + id;

    orm.updateOne(newInfo, condition, verdict);
  }
};

module.exports = burger;
