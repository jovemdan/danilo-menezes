import { Box, Flex, Text } from '@chakra-ui/react'
import { Navbar } from '../components/navbar'

export default function Projects() {
  return (
    <>
      <Box maxWidth='860px' height='100vh' margin='0 auto' px={'10'}>
        <Navbar />

        <Box mt={127}>
          <Text
            fontSize='24px'
            fontWeight='700'
            lineHeight='36px'
            color='white'
          >
            Selected projects
          </Text>
        </Box>

        <Flex mt={18} gap='87px'>
          <Box>
            <Text
              w='135px'
              fontSize='24px'
              fontWeight='700'
              lineHeight='36px'
              color='#9A9A9A'
            >
              2022 - Now
            </Text>
          </Box>
          <Box>
            <Text color='white' fontWeight='700'>
              Bitrefill
            </Text>
            <Text
              as='p'
              fontWeight='700'
              color='#9A9A9A'
              alignItems='left'
              mt='2px'
            >
              I currently work at Bitrefill, mainly focusing on search &
              discovery. I also lead design & development of the design system.
            </Text>
            <Text fontWeight='700' color='#FF9900' mt='10px'>
              Read case study
            </Text>

            <Box
              mt='16px'
              w='622px'
              height='285px'
              bgColor='#B476A6'
              borderRadius='9px'
            ></Box>
          </Box>
        </Flex>

        <Flex mt={48} gap='87px'>
          <Box>
            <Text
              w='135px'
              fontSize='24px'
              fontWeight='700'
              lineHeight='36px'
              color='#9A9A9A'
            >
              2022 - Now
            </Text>
          </Box>
          <Box>
            <Text color='white' fontWeight='700'>
              Bitrefill
            </Text>
            <Text
              as='p'
              fontWeight='700'
              color='#9A9A9A'
              alignItems='left'
              mt='2px'
            >
              I currently work at Bitrefill, mainly focusing on search &
              discovery. I also lead design & development of the design system.
            </Text>
            <Text fontWeight='700' color='#FF9900' mt='10px'>
              Read case study
            </Text>

            <Box
              mt='16px'
              w='622px'
              height='285px'
              bgColor='#B476A6'
              borderRadius='9px'
            ></Box>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
