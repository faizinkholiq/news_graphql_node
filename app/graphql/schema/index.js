const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString, GraphQLSchema } = require("graphql");
const UsersType = require("./model/users");
const connection = require('../../../knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(connection);

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UsersType),
            args: {id: { type: GraphQLInt }},
            resolve(parent, args) {
                try {
                    let posts = knex("users")
                    if(args.id != null) posts.where('id', args.id);
                    
                    return posts;
                 }catch(e){
                    console.log(e);
                 }
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UsersType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                address: { type: GraphQLString },
                phone: { type: GraphQLString },
            },
            async resolve(parent, args) {
                try { 
                    let id = await knex("users").insert(args);
                    args["id"] = id[0];
                    return args;
                }catch(e){
                    console.log(e);
                }
            }
        },
        updateUser: {
            type: UsersType,
            args: {
                id: { type: GraphQLInt },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                address: { type: GraphQLString },
                phone: { type: GraphQLString },
            },
            async resolve(parent, args) {
                try {                   
                    await knex("users")
                    .where('id', args.id)
                    .update(args);
                    
                    let detail = await knex('users').where('id', args.id)
                    return detail[0];
                }catch(e){
                    console.log(e);
                }
            }
        },
        deleteUser: {
            type: UsersType,
            args: {
                id: { type: GraphQLInt },
            },
            async resolve(parent, args) {
                try {                   
                    let detail = await knex('users').where('id', args.id);
                    await knex('users').where('id', args.id).del();
                    
                    return detail[0];
                }catch(e){
                    console.log(e);
                }
            } 
        },
    }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });