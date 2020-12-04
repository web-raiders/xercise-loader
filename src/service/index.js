const services = {
  async add(model, data) {
    try {
      const { dataValues: value } = await model.create(data);
      return value;
    } catch (error) {
      throw new Error(error);
    }
  },

  async find(model, keys) {
    try {
      return model.findOne({ where: keys });
    } catch (error) {
      throw new Error(error);
    }
  },

  async findMultiple(model, keys) {
    try {
      return model.findAll({
        where: keys
      });
    } catch (error) {
      throw new Error(error);
    }
  },

  async update(model, updateData, keys) {
    try {
      const [rowaffected, [entity]] = await model.update(
        updateData, { returning: true, where: keys }
      );
      if (!rowaffected) throw new Error('Not Found');
      return entity.dataValues;
    } catch (error) {
      throw new Error(error);
    }
  },

  async delete(model, keys) {
    try {
      const numberOfRowsDeleted = await model.destroy({ where: keys });
      if (!numberOfRowsDeleted) throw new Error('Not Found');
      return true;
    } catch (error) {
      throw new Error(error);
    }
  },

  async all(model) {
    try {
      const entities = await model.findAll({ where: {} });
      return entities;
    } catch (error) {
      throw new Error(error);
    }
  },
  async allWorkouts(model, associate) {
    try {
      const entities = await model.findAll({
        where: {},
        include: [
          {
            model: associate,
            as: 'category',
            required: false,
            attributes: ['id', 'name']
          }
        ],
      }).map((values) => values.get({ plain: true }));
      return entities;
    } catch (error) {
      throw new Error(error);
    }
  },
  async allSessions(model, user, workout) {
    try {
      const entities = await model.findAll({
        where: {},
        include: [
          {
            model: user,
            as: 'users',
            required: false,
            attributes: ['id', 'firstName', 'lastName', 'email']
          },
          {
            model: workout,
            as: 'workout',
            required: false,
            attributes: ['name', 'categoryId', 'difficulty']
          },
        ],
      }).map((values) => values.get({ plain: true }));
      return entities;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default services;
