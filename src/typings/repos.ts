export interface Repository {
  id: string
  name: string
  owner: {
    login: string
    avatarUrl: string
  }
  object: {
    oid: string
  }
  description: string
  forkCount: number
  stargazerCount: number
}
export interface Response {
  search: {
    repos: { repo: Repository }[]
  }
}
