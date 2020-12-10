module.exports = (sequelize, DataTypes) => {
  const Analytics = sequelize.define(
    'Analytics',
    {
      routineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'Routines',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      setsCompleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      repsBreakdown: {
        type: DataTypes.ARRAY((DataTypes.INTEGER)),
        allowNull: true
      },
      weightsBreakdown: {
        type: DataTypes.ARRAY((DataTypes.STRING)),
        allowNull: true
      },
      bodyWeight: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {}
  );
  Analytics.associate = (models) => {
    Analytics.belongsTo(models.Routine, {
      as: 'routine',
      foreignKey: 'routineId'
    });
  };
  return Analytics;
};
