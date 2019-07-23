import orm from "../config/orm,js";

var burger = {
   select: orm.selectAll(),

   insert: function (name, verdict) {
        orm.insertOne([ name, false ], verdict)
   },

   update: function (name, id, verdict) {
       var newInfo = "burger_name = '" + name + "', devoured: true";
       var condition = "id=" + id;

       orm.updateOne( newInfo, condition, verdict);
   }
};

module.exports = burger;