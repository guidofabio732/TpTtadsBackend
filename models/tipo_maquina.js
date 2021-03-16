'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('tipo_maquina', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      descp: {
          allowNull: false,
          type: DataTypes.STRING
      }
  }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'tipo_maquina',
      classMethods: {}
  });
  Usuario.associate = function(models) {
  // associations can be defined here
  };
  return Usuario;
};