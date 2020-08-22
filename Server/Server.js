const { GraphQLServer } = require('graphql-yoga');

const Messages = [];

const typeDefs = `
    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        getMessages: [ Message! ]
    }
`
const resolvers = {
    Query: {
        getMessages: () => Messages,
    }
}

const AppServer = new GraphQLServer({ typeDefs, resolvers });

AppServer.start(
    ({ port }) => {
        console.log( `Server is running on http://localhost/${port}/` )
    }
)
