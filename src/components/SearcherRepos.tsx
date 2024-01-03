import {
  Avatar,
  Flex,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Text
} from '@mantine/core'
import { IconGitFork, IconStar } from '@tabler/icons-react'
import classes from 'assets/styles/repos.module.css'
import { Link } from 'react-router-dom'
import { Repository } from 'typings/repos.ts'

const SearcherRepos = ({ repos }: { repos: Repository[] }) => {
  const encode = (repoId: string, treeOid: string) => {
    return '/' + btoa(JSON.stringify({ repoId, treeOid }))
  }

  return (
    <>
      <Space h="xl" />

      <SimpleGrid cols={1}>
        {repos.map((repo) => (
          <Link
            key={repo.id}
            to={encode(repo.id, repo.object.oid)}
            className={classes.link}
          >
            <Paper withBorder className={classes.card} radius="lg">
              <Grid>
                <Grid.Col span={8}>
                  <Group gap="md" wrap="nowrap">
                    <Avatar src={repo.owner.avatarUrl} />
                    <Flex direction="column">
                      <Text size="xl">{repo.name}</Text>
                      <Text w={450} size="sm" c="dimmed" truncate="end">
                        {repo.description}
                      </Text>
                    </Flex>
                  </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 6, md: 2 }}>
                  <Group gap="xs" h="100%">
                    <IconStar />
                    <Text size="sm">{repo.stargazerCount}</Text>
                  </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 6, md: 2 }}>
                  <Group gap="xs" h="100%">
                    <IconGitFork />
                    <Text size="sm">{repo.forkCount}</Text>
                  </Group>
                </Grid.Col>
              </Grid>
            </Paper>
          </Link>
        ))}
      </SimpleGrid>

      <Space h="xl" />
    </>
  )
}

export default SearcherRepos
