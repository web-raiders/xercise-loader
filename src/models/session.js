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
      status: {
        type: DataTypes.ENUM('pending', 'completed'),
        allowNull: false,
        defaultValue: 'pending'
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
    },
    {}
  );
  Session.associate = (models) => {
    Session.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
    Session.hasMany(models.Routine, {
      as: 'routines',
      foreignKey: 'sessionId',
    });
  };
  return Session;
};
