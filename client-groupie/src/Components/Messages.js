import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGES = gql`
query messages{
    getMessages {
      id
    }
  }
`;

function Messages({ user }) {

    const { loading, error, data } = useQuery(GET_MESSAGES)
    console.log(error)
    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error :(</p>;
    else return JSON.stringify(data)

}

export default Messages;