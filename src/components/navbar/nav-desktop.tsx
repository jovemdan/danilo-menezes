import { Flex } from '@chakra-ui/react'
import { ActiveLink } from './active-link'
import { Logo } from './logo'

export function NavDesktop() {
  return (
    <Flex
      mt={8}
      maxW='724x'
      gap='192px'
      alignItems='center'
      alignContent='center'
    >
      <Logo />
      <Flex as='nav' gap='128px' justifyContent='center'>
        <ActiveLink href='/'>Home</ActiveLink>
        <ActiveLink href='/projects'>Projects</ActiveLink>
        <ActiveLink href='/blog'>Blog</ActiveLink>
      </Flex>
    </Flex>
  )
}
