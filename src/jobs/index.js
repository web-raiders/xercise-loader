import env from '../config/env';
import toolbox from '../helper/toolbox';

const users = {
  async getUser(root, { key, email }, { req, models }) {
    await toolbox.keyCheck(req, key);
    return models.User.findOne({ where: { email } });
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
    const user = await models.User.create({
      firstName,
      lastName,
      email,
      password,
    });
    return user;
  },
};

const five = 5;
export {
  users,
  five,
};
