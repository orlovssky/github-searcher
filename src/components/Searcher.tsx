import {
  ActionIcon,
  Center,
  Container,
  Image,
  Loader,
  TextInput
} from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { IconSearch, IconX } from '@tabler/icons-react'
import getRepos from 'api/requests/getRepos.ts'
import searching from 'assets/images/cat.svg'
import SearcherRepos from 'components/SearcherRepos.tsx'
import { useEffect, useState } from 'react'
import { Repository } from 'typings/repos.ts'

const Searcher = () => {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [debounced] = useDebouncedValue(search, 500)
  const [repos, setRepos] = useState<Repository[]>([])
  const changeSearch = (value: string) => {
    if (!value) {
      setRepos([])
    }

    setSearch(value)
  }

  useEffect(() => {
    if (!debounced) {
      return
    }

    setIsLoading(true)
    setRepos([])

    getRepos(debounced)
      .then((data) => {
        setRepos(data.search.repos.map((repo) => repo.repo))
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [debounced])

  return (
    <Container mt="xl" size="md">
      <Container size="xs">
        <TextInput
          placeholder="Repository"
          radius="lg"
          size="xl"
          value={search}
          leftSection={<IconSearch />}
          rightSection={
            Boolean(search) && (
              <ActionIcon
                variant="subtle"
                radius="xl"
                disabled={isLoading}
                onClick={() => changeSearch('')}
              >
                <IconX />
              </ActionIcon>
            )
          }
          onChange={(event) => changeSearch(event.currentTarget.value)}
        />
      </Container>

      {isLoading && (
        <Center h={80}>
          <Loader size="lg" type="dots" />
        </Center>
      )}

      {!isLoading && Boolean(search) && <SearcherRepos repos={repos} />}

      {!isLoading && !Boolean(search) && (
        <Container size="sm">
          <Image src={searching} />
        </Container>
      )}
    </Container>
  )
}

export default Searcher
