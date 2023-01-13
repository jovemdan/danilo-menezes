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
import { ActiveLink } from './active-link'

export function HeaderMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex as='header' mt={8} justify='space-between' align='center'>
        {/* <Logo /> */}

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
              <ActiveLink fontSize='2xl' onClick={onClose} href='/posts'>
                Projects
              </ActiveLink>
              <ActiveLink fontSize='2xl' onClick={onClose} href='/projects'>
                Blog
              </ActiveLink>
            </VStack>

            <Flex gap='5' pt='6'>
              <Link href='https://github.com/jovemdan' target='_blank'>
                <Image src='/github.svg' alt='github' cursor='pointer' />
              </Link>
              <Link href='https://twitter.com/jovemdan_' target='_blank'>
                <Image src='/twitter.svg' alt='twitter' cursor='pointer' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/danilo-gon%C3%A7alves-a862a6142/'
                target='_blank'
              >
                <Image src='/linkedin.svg' alt='linkedin' cursor='pointer' />
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
