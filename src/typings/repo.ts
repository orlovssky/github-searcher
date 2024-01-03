export interface Entry {
  oid: string
  name: string
  type: 'blob' | 'tree'
  object: {
    text: string
  }
}
export interface Response {
  node: {
    name: string
    description: string
    object: {
      entries: Entry[]
    }
  }
}
