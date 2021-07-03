const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql");

const UsersType = new GraphQLObjectType({
    name: "Users",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),
});

module.exports = UsersType;