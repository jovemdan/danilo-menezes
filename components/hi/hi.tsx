/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'
export function Hi() {
  return (
    <Box maxWidth='860px' margin='0 auto' px={'10'}>
      <Flex
        height='100vh'
        justifyContent='center'
        flexDirection='column'
        textAlign='left'
      >
        <Text
          as='h1'
          fontSize={['45px', '4.5rem', '5.5rem']}
          fontWeight='700'
          fontStyle='normal'
          lineHeight={['65px', '70px', '100px']}
          color='#FF9900'
        >
          Hi, I'm Danilo Menezes
        </Text>

        <Flex flexDirection='column' gap='5' pt='6'>
          <Flex gap='6'>
            <Image src='/divider.svg' alt='divider' />

            <Box>
              <Text color='white' fontSize={['0.8rem', '1rem', '1.2rem']}>
                —I'm a software engineer passionate about transforming people`s
                lives through technology. I like to solve challenges with codes
                and i also help some people get into technology. I am interested
                in participating in open source projects.
              </Text>
            </Box>
          </Flex>

          <Box pl='7'>
            <Text color='white' fontSize={['0.8rem', '1rem', '1.2rem']}>
              Have questions or comments? To get in touch, email
            </Text>

            <Link href='mailto:danilogdev@gmail.com?' target='_blank'>
              <Text color='#00B2FF' fontSize={['0.8rem', '1rem', '1.2rem']}>
                danilogdev@gmail.com
              </Text>
            </Link>

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
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
