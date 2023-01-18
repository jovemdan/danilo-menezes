import { Flex, HStack } from '@chakra-ui/react'

import { ActiveLink } from './active-link'
import { Logo } from './logo'

export function NavDesktop() {
  return (
    <Flex
      mt={8}
      maxW='854px'
      gap='175px'
      alignItems='center'
      alignContent='center'
    >
      <Logo />
      <Flex as='nav' gap='78px' justifyContent='center'>
        <ActiveLink href='/'>Home</ActiveLink>
        <ActiveLink href='/projects'>Projects</ActiveLink>
        <ActiveLink href='/blog'>Blog</ActiveLink>
      </Flex>
    </Flex>
  )
}
