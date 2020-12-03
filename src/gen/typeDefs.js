import { gql } from 'apollo-server-express';

const typeDefs = gql`

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
  }
`;

module.exports = typeDefs;
