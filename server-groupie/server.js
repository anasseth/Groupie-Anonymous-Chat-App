const { GraphQLServer, PubSub } = require('graphql-yoga');

const MessagesDataStore = [];

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }
  type Query {
    getMessages: [Message!]
  }
  type Mutation {
    postMessage(user: String!, content: String!): ID!
  }
`
const resolvers = {
    Query: {
        getMessages: () => MessagesDataStore , 
    },
    Mutation: {
        postMessage: (parent, { user, content }) => {
            const id = MessagesDataStore.length;
            MessagesDataStore.push({
              id,
              user,
              content,
            });
            return id
        }
    }
}

const AppServer = new GraphQLServer({ typeDefs, resolvers });

AppServer.start(
    ({ port }) => {
        console.log( `Server is running on http://localhost/${port}/` )
    }
)