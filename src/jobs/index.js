import env from '../config/env';
import toolbox from '../helper/toolbox';
import db from '../service';

const users = {
  async getUser(root, { key, email }, { req, models }) {
    await toolbox.keyCheck(req, key);
    return db.find(models.User, { email });
  },
  async addUser(root, {
    firstName,
    lastName,
    email,
    password,
    key,
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    password = await toolbox.hashPassword(password);
    const user = await db.add(models.User, {
      firstName,
      lastName,
      email,
      password,
    });
    return user;
  },
};

const categories = {
  async addCategory(root, {
    name,
    key
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const data = await db.add(models.Category, {
      name,
    });
    return data;
  },

  async allCategories(root, { key }, { req, models }) {
    await toolbox.keyCheck(req, key);
    return db.all(models.Category);
  }
};

const workouts = {
  async addWorkout(root, {
    category,
    name,
    difficulty,
    key
  }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const cat = await db.find(models.Category, { name: category });
    if (!cat) toolbox.errors(req.res, 'this category does not exist', 400);
    const data = await db.add(models.Workout, {
      name,
      categoryId: cat.id,
      difficulty,
    });
    // console.log('🚨 Values: ', data);
    data.category = cat;
    return data;
  },

  async allWorkouts(root, { key }, { req, models }) {
    await toolbox.keyCheck(req, key);
    const data = await db.allWorkouts(models.Workout, models.Category);
    // console.log('🚨 Values: ', data);
    return data;
  }
};

export {
  users,
  categories,
  workouts,
};
