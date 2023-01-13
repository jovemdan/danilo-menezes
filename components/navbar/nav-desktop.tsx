import { Flex, HStack } from '@chakra-ui/react'

import { ActiveLink } from './active-link'

export function NavDesktop() {
  return (
    <Flex as='nav' mt={8} gap='52' justifyContent='flex-start'>
      <ActiveLink href='/'>Home</ActiveLink>
      <ActiveLink href='/posts'>Projects</ActiveLink>
      <ActiveLink href='/projects'>Blog</ActiveLink>
    </Flex>
  )
}
