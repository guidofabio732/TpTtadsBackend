'use strict';

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('usuarios', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      nombre: {
          type: DataTypes.STRING
      },
      apellido: {
          type: DataTypes.STRING
      },
      nombre_usuario: {
          allowNull: false,
          type: DataTypes.STRING
      },
      password: {
          allowNull: false,
          type: DataTypes.STRING
      }
  }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'usuarios',
      classMethods: {}
  });
  return Usuario;
}