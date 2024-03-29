import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  VStack,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SocialIcons } from '../hi/social-icons'
import { ActiveLink } from './active-link'
import { Logo } from './logo'

export function HeaderMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { asPath } = useRouter()

  const isBlogDetails = asPath.startsWith('/blog/')

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
        <DrawerContent bg='#010522' p={4}>
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
              <ActiveLink fontSize='2xl' onClick={onClose} href='/blog' pathWithParams={isBlogDetails ? asPath : undefined}>
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
