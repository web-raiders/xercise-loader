module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      weightGoal: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {}
  );
  User.associate = (models) => {
    User.hasMany(models.Session, {
      as: 'sessions',
      foreignKey: 'userId'
    });
  };
  return User;
};
