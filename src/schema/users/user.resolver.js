const connection = require('../../../config/knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(connection);

const resolvers = {
    Query: {
        users: (parent, args, context, info) => {
            try {
                return knex("users");
            }catch(e){
                console.log(e);
            }
        },
        user: (parent, args, context, info) => {
            try {
                return knex("users").where('id', args.id).first();
            }catch(e){
                console.log(e);
            }
        }
    },
    Mutation: {
        createUser: async (root, { input }, context, info) => {
            try { 
                let id = await knex("users").insert(input);
                input["id"] = id[0];

                return input;
            }catch(e){
                console.log(e);
            }
        },
        updateUser: async (root, { input }, context, info) => {
            try {                  
                await knex("users")
                .where('id', input.id)
                .update(input);
                
                let detail = await knex('users').where('id', input.id)
                return detail[0];
            }catch(e){
                console.log(e);
            }
        },
        deleteUser: async (root, { id }, context, info) => {
            try {
                let detail = await knex('users').where('id', id);
                await knex('users').where('id', id).del();
                
                return detail[0];
            }catch(e){
                console.log(e);
            }
        },
    }
}

module.exports = resolvers;