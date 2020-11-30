import env from '../config/env';
import toolbox from '../helper/toolbox';

const users = {
  async getUser(root, { key, email }, { req, models }) {
    if (key !== env.KEY) toolbox.errors(req.res, 'wrong key buddy', 403);
    return models.User.findOne({ where: { email } });
  },
  async addUser(root, {
    firstName,
    lastName,
    email,
    password,
    key,
  }, { req, models }) {
    if (key !== env.KEY) toolbox.errors(req.res, 'wrong key buddy', 403);
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
