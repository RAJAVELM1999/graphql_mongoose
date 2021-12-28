//  Queries are use to get an Data from the db
const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Post{
    id: ID
    name: String
    type: String
    identifier: String
}
type Query
{
    hello:String
    getAll:[Post]
}

input PostInput
{
    name: String
    type: String
    identifier: String

}

type Mutation
{
    createLevel(post:PostInput):Post
    updateLevel(id:String,post:PostInput):Post
    deleteLevel(id:String):String
}
`;

module.exports = typeDefs;