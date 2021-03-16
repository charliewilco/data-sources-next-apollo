import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Article {
    id: String!
    title: String!
    url: String!
    imageUrl: String
  }

  type User {
    id: ID!
    name: String!
    status: String!
  }

  type Query {
    viewer: User
    articles: [Article!]!
  }
`;
