import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type User {
    id: String!,
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    weightGoal: String!
  }

  type Query {
    getUser(
      email: String!
      key: String!
      ): User
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      key: String!
    ): User!
  }
`;

module.exports = typeDefs;
