import { Container, Image, Space, Text } from '@mantine/core'
import logo from 'assets/images/logo.svg'
import classes from 'assets/styles/header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Link to="/" className={classes.link}>
            <Image h="100%" src={logo} />
            <Space w="xs" />
            <Text className={classes.text}>Github searcher</Text>
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header
