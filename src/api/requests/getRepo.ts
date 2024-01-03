import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { gql } from 'graphql-request'
import { parse } from 'graphql/index'
import { Response } from 'typings/repo.ts'
import client from '../index.ts'

export default (repoId?: string, treeOid?: string) => {
  const query: TypedDocumentNode<Response> = parse(gql`
    query repository($id: ID!, $treeOid: GitObjectID!) {
      node(id: $id) {
        ... on Repository {
          name
          description
          object(oid: $treeOid, expression: "HEAD:") {
            ... on Tree {
              entries {
                oid
                name
                type
                object {
                  ... on Blob {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return client.request(query, {
    id: repoId,
    treeOid: treeOid
  })
}
