import {
  Container, Image, Space, Text
} from '@mantine/core'
import logo from 'assets/images/logo.svg'
import classes from 'assets/styles/header.module.css'

const Header = () => {

  return (
    <header className={classes.header}>
      <Container size='md'>
        <div className={classes.inner}>
          <Image
            h='100%'
            src={logo}
          />

          <Space w='xs' />

          <Text
            fw={900}
            gradient={{ from: '#D33213', to: '#F9DB00', deg: 90 }}
            size='xl'
            variant='gradient'
          >Github searcher
          </Text>
        </div>
      </Container>
    </header>
  )
}

export default Header