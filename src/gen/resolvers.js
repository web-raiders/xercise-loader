import { GraphQLDate } from 'graphql-iso-date';
import {
  users,
  categories,
  workouts,
  sessions,
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
const {
  addSession,
} = sessions;

const resolvers = {

  Date: GraphQLDate,
  Query: {
    getUser,
    allCategories,
    allWorkouts,
  },

  Mutation: {
    addUser,
    addCategory,
    addWorkout,
    addSession,
  },

};

module.exports = resolvers;
