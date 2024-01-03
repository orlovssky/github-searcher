import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { gql } from 'graphql-request'
import { parse } from 'graphql/index'
import { Response } from 'typings/repos.ts'
import client from '../index.ts'

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
