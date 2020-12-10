module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Analytics', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    routineId: {
      type: Sequelize.INTEGER,
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
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    repsBreakdown: {
      type: Sequelize.ARRAY((Sequelize.INTEGER)),
      allowNull: true
    },
    weightsBreakdown: {
      type: Sequelize.ARRAY((Sequelize.STRING)),
      allowNull: true
    },
    bodyWeight: {
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
  down: (queryInterface) => queryInterface.dropTable('Analytics')
};
