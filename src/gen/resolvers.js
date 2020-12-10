import { GraphQLDateTime } from 'graphql-iso-date';
import {
  users,
  categories,
  workouts,
  sessions,
  routines,
  analytics,
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
const {
  addAnalytics,
  analyticsByRange,
} = analytics;

const resolvers = {

  Date: GraphQLDateTime,
  Query: {
    getUser,
    allCategories,
    allWorkouts,
    allSessions,
    routineBySession,
    analyticsByRange,
  },

  Mutation: {
    addUser,
    addCategory,
    addWorkout,
    addSession,
    addRoutine,
    addAnalytics,
  },

};

module.exports = resolvers;
