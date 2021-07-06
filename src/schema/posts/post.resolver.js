const connection = require('../../../config/knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(connection);

const resolvers = {
    Query: {
        posts: (parent, args, context, info) => {
            try {
                return knex("posts");
            }catch(e){
                console.log(e);
            }
        },
        post: (parent, args, context, info) => {
            try {
                return knex("posts").where('id', args.id).first();
            }catch(e){
                console.log(e);
            }
        }
    },
    Mutation: {
        createPost: async (root, { input }, context, info) => {
            try { 
                let id = await knex("posts").insert(input);
                input["id"] = id[0];

                return input;
            }catch(e){
                console.log(e);
            }
        },
        updatePost: async (root, { input }, context, info) => {
            try {                  
                await knex("posts")
                .where('id', input.id)
                .update(input);
                
                let detail = await knex('posts').where('id', input.id)
                return detail[0];
            }catch(e){
                console.log(e);
            }
        },
        deletePost: async (root, { id }, context, info) => {
            try {
                let detail = await knex('posts').where('id', id);
                await knex('posts').where('id', id).del();
                
                return detail[0];
            }catch(e){
                console.log(e);
            }
        },
    }
}

module.exports = resolvers;