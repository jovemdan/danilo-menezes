import { Flex, Link, Image } from '@chakra-ui/react'

export function SocialIcons() {
  return (
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
  )
}
