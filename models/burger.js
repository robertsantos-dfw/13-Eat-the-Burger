module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  return Burger;
};

var orm = require("../config/orm");

var burger = {
  selectAll: function (cb) {
    orm.SelectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    console.log(cols, vals);
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (id, cb) {
    condition = "id=" + id;
    orm.updateOne(
      "burgers",
      {
        devoured: true,
      },
      condition,
      cb
    );
  },

  deleteOne: function (id, cb) {
    condition = "id=" + id;
    orm.deleteOne("burgers", condition, cb);
  },
};

module.exports = burger;
