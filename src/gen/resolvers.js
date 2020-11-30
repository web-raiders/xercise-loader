import { users } from '../jobs';

const {
  addUser,
  getUser,
} = users;

const resolvers = {

  Query: {
    getUser,
  },

  Mutation: {
    addUser,
  },

};

module.exports = resolvers;
