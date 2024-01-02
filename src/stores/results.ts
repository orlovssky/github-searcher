import { create } from 'zustand'

interface Store {
  query: string
  setQuery: () => void
}

const useSearcherStore = create<Store>((set) => ({
  query: '',
  incrementLoaded: () => set(({
    loaded 
  }) => ({ loaded: loaded + 1 }))
}))

export default useSearcherStore