//Sequelize DB

module.exports = function (sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    //validate burgername field
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
      
    }, //make the burger's devoured field carry a default value of false
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });


  return burgers;

}