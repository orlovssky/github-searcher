import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import Header from 'components/Header.tsx'
import Repo from 'components/Repo.tsx'
import Searcher from 'components/Searcher.tsx'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Searcher />
      },
      {
        path: ':repoData',
        element: <Repo />
      }
    ]
  }
])

const theme = createTheme({
  primaryColor: 'violet',
  fontFamily: 'Outfit, Verdana, sans-serif',
  fontFamilyMonospace: 'AzeretMono, Monaco, Courier, monospace',
  headings: { fontFamily: 'Outfit, Greycliff CF, sans-serif' }
})

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
)
