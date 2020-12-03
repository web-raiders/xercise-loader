import { users, categories } from '../jobs';

const {
  addUser,
  getUser,
} = users;
const {
  addCategory,
  allCategories,
} = categories;

const resolvers = {

  Query: {
    getUser,
    allCategories,
  },

  Mutation: {
    addUser,
    addCategory,
  },

};

module.exports = resolvers;
