const Post = require('./Post')


// Resolver for Inseerting the Data ,Updating the Data, Deleting the data

const resolvers = {
    Query: {
        hello: () => { return "Hai There This Is Rajavel" },

        getAll: async () => { return await Post.find(); },


    },
    Mutation: {
        createLevel: async (parent, args, context, info) => {
            const { name, type, identifier } = args.post
            const post = await new Post({ name, type, identifier }).save()
            return post
        },
        updateLevel: async (parent, args, context, info) => {
            const { id } = args;
            const { name, type, identifier } = args.post;
            const post = await Post.findByIdAndUpdate(id, { name, type, identifier }, { new: true });
            return post
        },
        deleteLevel: async (parent, args, context, info) => {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return "One Data Deleted Scucessfully id :" + (id)
        },

    }

}

module.exports = resolvers;