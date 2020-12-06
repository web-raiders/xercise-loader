import { GraphQLDateTime } from 'graphql-iso-date';
import {
  users,
  categories,
  workouts,
  sessions,
  routines,
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
  allSessions,
} = sessions;
const {
  addRoutine,
  routineBySession,
} = routines;

const resolvers = {

  Date: GraphQLDateTime,
  Query: {
    getUser,
    allCategories,
    allWorkouts,
    allSessions,
    routineBySession,
  },

  Mutation: {
    addUser,
    addCategory,
    addWorkout,
    addSession,
    addRoutine,
  },

};

module.exports = resolvers;
