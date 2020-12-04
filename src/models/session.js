module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    'Session',
    {
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
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
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {}
  );
  Session.associate = (models) => {
    Session.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'userId',
    });
  };
  return Session;
};
