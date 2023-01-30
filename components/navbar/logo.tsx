import NextLink from 'next/link'
import { Avatar, Box } from '@chakra-ui/react'

export function Logo() {
  return (
    <NextLink href='/' passHref>
      <Box>
        <Avatar name='Danilo Menezes' src='/perfil.png' />
      </Box>
    </NextLink>
  )
}
