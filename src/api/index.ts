import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
})

export default client
