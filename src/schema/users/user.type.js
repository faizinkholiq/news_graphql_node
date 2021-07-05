const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        users: [User]
        user(id:ID!): User
    }

    type Mutation {
        createUser(input: UserMutation): User
        updateUser(input: UserMutation): User
        deleteUser: String
    }

    type User {
        id: ID!
        name: String
        email: String
        address: String
        phone: String
    }

    input UserMutation {
        id: ID
        name: String!
        email: String!
        address: String!
        phone: String!
    }
`

module.exports = typeDefs;