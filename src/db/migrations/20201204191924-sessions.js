module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Sessions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    workoutId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Workouts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    numberOfSets: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    repsPerSet: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('pending', 'completed'),
      allowNull: false,
      defaultValue: 'pending'
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE
    },
    weight: {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface) => queryInterface.dropTable('Sessions')
};
