import NextLink from 'next/link'
import { HStack, Avatar, Image, Box } from '@chakra-ui/react'

export function Logo() {
  return (
    <NextLink href='/' passHref>
      <Box as='a'>
        <Avatar name='Danilo Menezes' src='/github.svg' />
      </Box>
    </NextLink>
  )
}
