'use strict';
module.exports = (sequelize, DataTypes) => {
  const MaquinaPieza = sequelize.define('maquina_pieza', {
      id_pieza: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
      id_maquina: {
          allowNull: false,
          type: DataTypes.INTEGER,
          primaryKey: true
      },
      cant: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
  }, {
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      tableName: 'maquina_pieza',
      classMethods: {}
  });
  MaquinaPieza.associate = function(models) {
  // associations can be defined here
    MaquinaPieza.belongsTo(models.tipo_pieza,
        {
            foreignKey: 'id_pieza',
        }
    );
    MaquinaPieza.belongsTo(models.tipo_maquina,
        {
            foreignKey: 'id_maquina',
        }
    );

  };
  return MaquinaPieza;
};