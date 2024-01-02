import { TextInput } from '@mantine/core'
import { useDebouncedState } from '@mantine/hooks'
import { useEffect } from 'react'

const token = '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'

const Searcher = () => {
  const [ search, setSearch ] = useDebouncedState('', 500)
  useEffect(() => {
    if (!search) return

    try {
      fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`
        },
        body: JSON.stringify({ query: 'query {search(query: \'asd\', type: \'REPOSITORY\') {nodes {name}}}' })
      }).then((res) => res.json()).
        then((res) => {
          console.log('===========---------')
          console.log(res)
          console.log('===========---------')
        })
    } catch (e) {
      console.log(e)
    }
  }, [ search ])

  return (
    <TextInput
      defaultValue={search}
      placeholder='Code'
      radius='lg'
      size='xl'
      onChange={(event) => setSearch(event.currentTarget.value)}
    />
  )
}

export default Searcher