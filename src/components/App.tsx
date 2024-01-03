import 'assets/fonts/AzeretMono/Fonts/WEB/css/azeret-mono.css'
import 'assets/fonts/Outfit/Fonts/WEB/css/outfit.css'
import { createTheme, MantineProvider } from '@mantine/core'
import Header from 'components/Header.tsx'
import Searcher from 'components/Searcher.tsx'

const theme = createTheme({
  primaryColor: 'violet',
  fontFamily: 'Outfit, Verdana, sans-serif',
  fontFamilyMonospace: 'AzeretMono, Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, Greycliff CF, sans-serif' }
})

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Searcher />
    </MantineProvider>
  )
}

export default App
