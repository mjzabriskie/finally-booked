// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  input BookInput {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
  }
  type Book {
    authors: [String]
    description: String!
    bookId: ID!
    image: String
    link: String
    title: String!
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
