import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { theme } from '../styles/theme'
export default function Home() {
  return (
    <>
      <Box maxWidth='630px' margin='0 auto'>
        <Flex
          maxWidth='500px'
          height='100vh'
          // margin='0 auto'
          justifyContent='center'
          flexDirection='column'
          textAlign='left'
        >
          <Text
            as='h1'
            fontSize='70px'
            fontWeight='700'
            fontStyle='normal'
            lineHeight='96px'
            color='#FF9900'
          >
            Hi, I`m Danilo <br />
            Menezes
          </Text>

          <Flex flexDirection='column' gap='5' pl='10' pt='6'>
            <Text color='white'>
              —I`m building tools and sharing approaches that make coding easy,
              because all too often we as programmers find ourselves stuck...
              stuck solving tangential problems, indicating gaps in toolchains
              and knowledge. Closing these gaps is a passion of mine.
            </Text>
            <Text color='white'>
              Have questions or comments? To get in touch, email
              <Text color='#00B2FF'>
                <a href='#'>danilogdev@gmail.com </a>
              </Text>
            </Text>
          </Flex>

          {/* <Flex>
            <i data-feather='circle'></i>
          </Flex> */}
        </Flex>
      </Box>
    </>
  )
}
