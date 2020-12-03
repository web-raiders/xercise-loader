import {
  users,
  categories,
  workouts,
} from '../jobs';

const {
  addUser,
  getUser,
} = users;
const {
  addCategory,
  allCategories,
} = categories;
const {
  addWorkout,
  allWorkouts,
} = workouts;

const resolvers = {

  Query: {
    getUser,
    allCategories,
    allWorkouts,
  },

  Mutation: {
    addUser,
    addCategory,
    addWorkout,
  },

};

module.exports = resolvers;
