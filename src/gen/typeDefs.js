import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type User {
    id: String!
    email: String!
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
    status: String
    date: Date!
  }

  type Routine {
    id: Int!
    session: Session
    workout: Workout
    numberOfSets: Int!
    repsPerSet: Int!
    status: String
    weight: String!
  }

  type Analytics {
    id: Int!
    routine: Routine
    setsCompleted: Int!
    repsBreakdown: [Int!]
    weightsBreakdown: [String!]
    bodyWeight: String!
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

    routineBySession(
      sessionId: Int!
      key: String!
    ): [Routine]

    analyticsByRange(
      from: Date!
      to: Date!
      key: String!
    ): [Analytics]
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
      status: String!
      date: Date!
      key: String!
    ): Session

    addRoutine(
      sessionId: Int!
      workoutId: Int!
      numberOfSets: Int!
      repsPerSet: Int!
      status: String!
      weight: String!
      key: String!
    ): Routine

    addAnalytics(
      routineId: Int!
      setsCompleted: Int!
      repsBreakdown: [Int]
      weightsBreakdown: [String]
      bodyWeight: String
      key: String!
    ): Analytics
  }
`;

module.exports = typeDefs;
