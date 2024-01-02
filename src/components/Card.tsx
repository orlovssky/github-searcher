import {
  Paper, Text, ThemeIcon, rem 
} from '@mantine/core'
import { IconColorSwatch } from '@tabler/icons-react'
import classes from 'assets/styles/card.module.css'

const Card = () => {
  
  return (
    <Paper
      withBorder
      className={classes.card}
      radius='md'
    >
      <ThemeIcon
        gradient={{ deg: 0, from: 'pink', to: 'orange' }}
        radius='md'
        size='xl'
        variant='gradient'
      >
        <IconColorSwatch stroke={1.5} style={{ width: rem(28), height: rem(28) }} />
      </ThemeIcon>

      <Text
        fw={500}
        mt='md'
        size='xl'
      >
        Theming documentation
      </Text>

      <Text
        c='dimmed'
        mt='sm'
        size='sm'
      >
        Extend default theme with any amount of additional colors, replace shadows, radius, spacing,
        fonts and many other properties to match your design requirements. Mantine theme is just an
        object, you can subscribe to it in any part of application via context and use it to build
        your own components.
      </Text>
    </Paper>
  )
}

export default Card