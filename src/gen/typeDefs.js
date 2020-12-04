import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type User {
    id: String!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    weightGoal: String!
  }

  type Category {
    id: Int!
    name: String!
  }

  type Workout {
    id: Int!
    category: Category
    name: String!
    difficulty: String!
  }

  type Session {
    id: Int!
    user: User
    workout: Workout
    numberOfSets: Int!
    repsPerSet: Int!
    status: String
    date: Date!
    weight: String!
  }

  type Query {
    getUser(
      email: String!
      key: String!
      ): User

    allCategories(
      key: String!
    ): [Category!]
    
    allWorkouts(
      key: String!
    ): [Workout!]

    allSessions(
      key: String!
    ):[Session!]

    sessionByDate(
      key: String!
      day: Date
    ): [Session]
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      key: String!
    ): User!

    addCategory(
      name: String!
      key: String!
    ): Category

    addWorkout(
      name: String!
      category: String!
      difficulty: String!
      key: String!
    ): Workout

    addSession(
      userId: String!
      workoutId: Int!
      numberOfSets: Int!
      repsPerSet: Int!
      status: String
      date: Date!
      key: String!
    ): Session
  }
`;

module.exports = typeDefs;
