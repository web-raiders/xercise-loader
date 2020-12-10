module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Routines', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    sessionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Sessions',
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
  down: (queryInterface) => queryInterface.dropTable('Routines')
};
