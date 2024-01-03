import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { gql } from 'graphql-request'
import { parse } from 'graphql/index'
import { Repository } from 'stores/search.ts'
import client from '../index.ts'

interface Response {
  search: {
    repos: { repo: Repository }[]
  }
}

export default (search: string) => {
  const query: TypedDocumentNode<Response> = parse(gql`
    query getRepository($query: String!) {
      search(type: REPOSITORY, query: $query, last: 10) {
        repos: edges {
          repo: node {
            ... on Repository {
              id
              name
              owner {
                login
                avatarUrl
              }
              object(expression: "HEAD:") {
                ... on Tree {
                  oid
                }
              }
              description
              forkCount
              stargazerCount
            }
          }
        }
      }
    }
  `)

  return client.request(query, {
    query: search
  })
}
