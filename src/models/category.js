module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {}
  );
  Category.associate = (models) => {
    Category.hasMany(models.Workout, {
      as: 'workouts',
      foreignKey: 'categoryId'
    });
  };
  return Category;
};
