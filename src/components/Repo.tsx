import {
  Box,
  Center,
  Container,
  Loader,
  Modal,
  Paper,
  SimpleGrid,
  Space,
  Text
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconFile, IconFolder } from '@tabler/icons-react'
import getRepo, { Entry } from 'api/requests/getRepo.ts'
import classes from 'assets/styles/repo.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Repo = () => {
  let { repoData } = useParams()
  const navigate = useNavigate()
  const [opened, { open, close }] = useDisclosure(false)
  const [isLoading, setIsLoading] = useState(false)
  const [entries, setEntries] = useState<Entry[]>([])
  const [headData, setHeadData] = useState({
    name: '',
    description: ''
  })
  const [entry, setEntry] = useState<Entry>()
  const decode = () => {
    if (repoData) {
      return JSON.parse(atob(repoData))
    }
  }

  const openEntry = (value: Entry) => {
    if (value.type === 'blob') {
      setEntry(value)
      open()
    } else {
      navigate(
        '/' +
          btoa(
            JSON.stringify({
              repoId: decode().repoId,
              treeOid: value.oid
            })
          )
      )
    }
  }

  useEffect(() => {
    const repoDataDecoded = decode()

    setIsLoading(true)
    setEntries([])

    getRepo(repoDataDecoded.repoId, repoDataDecoded.treeOid)
      .then((data) => {
        setHeadData({
          name: data.node.name,
          description: data.node.description
        })
        setEntries(data.node.object.entries)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [repoData])

  return (
    <>
      <Modal
        size="100%"
        trapFocus={false}
        opened={opened}
        onClose={close}
        title={entry?.name}
      >
        <pre className={classes.code}>
          <code>{entry?.object.text}</code>
        </pre>
      </Modal>

      <Container mt="sm" size="sm">
        {Boolean(headData.name) && (
          <Paper className={classes.card} radius="lg">
            <Text size="xl">{headData.name}</Text>
            <Text size="sm" c="dimmed">
              {headData.description}
            </Text>
          </Paper>
        )}

        {isLoading && (
          <Center h={80}>
            <Loader size="lg" type="dots" />
          </Center>
        )}

        <Space h="md" />

        <SimpleGrid cols={1} spacing="xs">
          {entries.map((entry) => (
            <Box
              key={entry.oid}
              className={classes.box}
              onClick={() => {
                openEntry(entry)
              }}
            >
              {entry.type === 'blob' && <IconFile />}
              {entry.type === 'tree' && <IconFolder />}
              <Text ml={10}>{entry.name}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Space h="xl" />
      </Container>
    </>
  )
}

export default Repo
