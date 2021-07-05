const { makeExecutableSchema } = require("@graphql-tools/schema");
const merge = require('lodash.merge');
const userSchema = require('./users');
// const postSchema = require('./post');

const schema = makeExecutableSchema({
    typeDefs: [
        userSchema.typeDefs,
        // postSchema.typeDefs
    ],
    resolvers: merge(
        userSchema.resolvers,
        // postSchema.resolvers
    )
});

module.exports = schema;