const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


// Database Connection

mongoose.connect('mongodb://localhost:27017/database2021')
    .then(() => {
        console.log("Mongoose connected to Db...");
    }).
    catch((err) => {
        console.log(err.message);
    });




//  All Things Are Set Completed Sucessfully Dont Need To Touch This Part

const startServer = async () => {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app: app });
    const PORT = 5555
    app.listen(PORT, () => console.log("Server Intiated @ localhost:" + PORT));


}
startServer();