import { create } from 'zustand'

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
interface Store {
  search: string
  setSearch: (search: string) => void
  repos: Repository[]
  setRepos: (repos: Repository[]) => void
}

const useSearchStore = create<Store>((set) => ({
  search: '',
  setSearch: (search) => set(() => ({ search })),
  repos: [],
  setRepos: (repos) => set(() => ({ repos }))
}))

export default useSearchStore
