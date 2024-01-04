import { GraphQLClient } from 'graphql-request'
import { decode } from 'js-base64'

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${decode(import.meta.env.VITE_GITHUB_TOKEN)}`
  }
})

export default client
