const gql = require('graphql-tag');

const typeDefs = gql`
    type Query {
        posts: [Post]
        post(id:ID!): Post
    }

    type Mutation {
        createPost(input: PostMutation): Post
        updatePost(input: PostMutation): Post
        deletePost(id: ID!): Post
    }

    type Post {
        id: ID
        title: String
        body: String
        slug: String
        date: String
    }

    input PostMutation {
        id: ID
        title: String!
        body: String!
        slug: String!
        date: String!
    }
`

module.exports = typeDefs;