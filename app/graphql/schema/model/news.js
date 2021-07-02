const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const newsType = new GraphQLObjectType({
    name: "News",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),
});

module.exports = newsType;