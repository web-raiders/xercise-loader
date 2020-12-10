module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define(
    'Workout',
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Category',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.ENUM('easy', 'medium', 'hard'),
        allowNull: false,
        defaultValue: 'easy'
      },
    },
    {}
  );
  Workout.associate = (models) => {
    Workout.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId',
    });
    Workout.hasMany(models.Routine, {
      as: 'routines',
      foreignKey: 'workoutId',
    });
  };
  return Workout;
};
