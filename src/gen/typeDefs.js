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

  type Query {
    getUser(
      email: String!
      key: String!
      ): User

    allCategories(
      key: String!
    ): [Category!]
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
  }
`;

module.exports = typeDefs;
