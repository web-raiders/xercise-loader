import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import env from '../config/env';

const toolbox = {

  errors(res, message, code = 500) {
    res.status(code);
    throw new Error(message);
  },

  jwtCheck(token) {
    try {
      if (token) return jwt.verify(token, env.SECRET);
      return null;
    } catch (error) {
      return null;
    }
  },

  async hashPassword(password) {
    return bcrypt.hash(password, 10);
  },

  async keyCheck(req, key) {
    if (key !== env.KEY) return toolbox.errors(req.res, 'wrong key buddy', 403);
  }
};

export default toolbox;
