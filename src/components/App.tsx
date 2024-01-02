import 'assets/fonts/AzeretMono/Fonts/WEB/css/azeret-mono.css'
import 'assets/fonts/Outfit/Fonts/WEB/css/outfit.css'
import {
  Container,
  createTheme, MantineProvider
} from '@mantine/core'
import Card from 'components/Card.tsx'
import Header from 'components/Header.tsx'
import Searcher from 'components/Searcher.tsx'

const theme = createTheme({
  fontFamily: 'Outfit, Verdana, sans-serif',
  fontFamilyMonospace: 'AzeretMono, Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, Greycliff CF, sans-serif' }
})

const App = () => {

  return (
    <MantineProvider theme={theme}>
      <Header />

      <Container mt='md' size='md'>
        <Searcher />

        <Card />
      </Container>
    </MantineProvider>
  )
}

export default App