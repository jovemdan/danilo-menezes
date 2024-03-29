/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { Fade, Slide } from 'react-awesome-reveal'
import { SocialIcons } from './social-icons'
export function Hi() {
  return (
    <Flex
      justifyContent='center'
      flexDirection='column'
      textAlign='left'
      mt='24'
    >
      <Slide>
        <Text
          as='h1'
          fontSize={['45px', '4.5rem']}
          fontWeight='700'
          fontStyle='normal'
          lineHeight={['65px', '70px', '100px']}
          color='#FF9900'
        >
          Hi, I'm Danilo Menezes
        </Text>
      </Slide>


      <Flex flexDirection='column' gap='5' pt='6'>
        <Flex gap='6'>
          <Fade delay={1e3} cascade damping={1e-1}>
            <Image src='/divider.svg' alt='divider' />

            <Box maxWidth='635px'>
              <Text color='white' fontSize={['0.8rem', '1rem', '1.2rem']}>
                —I'm a software engineer passionate about transforming people`s
                lives through technology. I like to solve challenges with codes
                and i also help some people get into technology. I am interested
                in participating in open source projects.
              </Text>
            </Box>
          </Fade>
        </Flex>

        <Box pl='7'>
          <Fade delay={1e3} cascade damping={1e-1}>
            <Text color='white' fontSize={['0.8rem', '1rem', '1.2rem']}>
              Have questions or comments? To get in touch, email
            </Text>
            <Link href='mailto:danilogdev@gmail.com?' target='_blank'>
              <Text color='#00B2FF' fontSize={['0.8rem', '1rem', '1.2rem']}>
                danilogdev@gmail.com
              </Text>
            </Link>
            <SocialIcons />
          </Fade>
        </Box>
      </Flex>
    </Flex>
  )
}
