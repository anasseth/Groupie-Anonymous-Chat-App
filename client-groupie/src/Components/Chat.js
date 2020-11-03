import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Messages from './Messages.js'

const client = new ApolloClient({
    url: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

function Chat() {
    return (
        <ApolloProvider client={client}>
            <Messages user='Anas'/>
        </ApolloProvider>
    );
}

export default Chat;