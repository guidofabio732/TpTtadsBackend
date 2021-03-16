'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoPieza = sequelize.define('tipo_pieza', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      descp: {
          allowNull: false,
          type: DataTypes.STRING
      },
      cant: {
          allowNull: false,
          type: DataTypes.INTEGER
      }
  }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'tipo_pieza',
      classMethods: {}
  });
  TipoPieza.associate = function(models) {
  // associations can be defined here
  };
  return TipoPieza;
};