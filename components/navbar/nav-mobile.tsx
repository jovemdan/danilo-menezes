import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  HStack,
  VStack,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Link,
  Image,
} from '@chakra-ui/react'
import { SocialIcons } from '../hi/social-icons'
import { ActiveLink } from './active-link'
import { Logo } from './logo'

export function HeaderMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex as='header' mt={8} justify='space-between' align='center'>
        <Logo />

        <Icon
          as={HamburgerIcon}
          w={6}
          h={6}
          color='#FF9900'
          cursor='pointer'
          opacity='0.9'
          transition='all 0.2s'
          _hover={{ opacity: 1 }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer onClose={onClose} isOpen={isOpen} size='full'>
        <DrawerOverlay />
        <DrawerContent bg='#000532' p={4}>
          <DrawerCloseButton color='#FF9900' size='lg' mt='6' />
          <DrawerBody
            h='100vh'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
          >
            <VStack as='nav' spacing={4} mb={20}>
              <ActiveLink fontSize='2xl' onClick={onClose} href='/'>
                Home
              </ActiveLink>
              <ActiveLink fontSize='2xl' onClick={onClose} href='/projects'>
                Projects
              </ActiveLink>
              <ActiveLink fontSize='2xl' onClick={onClose} href='/blog'>
                Blog
              </ActiveLink>
            </VStack>

            <SocialIcons />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
