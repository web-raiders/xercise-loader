module.exports = (sequelize, DataTypes) => {
  const Routine = sequelize.define(
    'Routine',
    {
      sessionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Session',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      workoutId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Workout',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      numberOfSets: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      repsPerSet: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'completed'),
        allowNull: false,
        defaultValue: 'pending'
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {}
  );
  Routine.associate = (models) => {
    Routine.belongsTo(models.Session, {
      as: 'session',
      foreignKey: 'sessionId',
    });
    Routine.belongsTo(models.Workout, {
      as: 'workout',
      foreignKey: 'workoutId',
    });
    Routine.hasMany(models.Analytics, {
      as: 'analytics',
      foreignKey: 'routineId'
    });
  };
  return Routine;
};
