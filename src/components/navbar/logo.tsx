import NextLink from 'next/link'
import { Avatar, Box } from '@chakra-ui/react'

export function Logo() {
  return (
    <NextLink href='/' passHref>
      <Box>
        <Avatar name='Danilo Menezes' src='https://github.com/jovemdan.png' />
      </Box>
    </NextLink>
  )
}
