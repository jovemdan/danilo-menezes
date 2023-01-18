import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { Navbar } from '../components/navbar'

export default function Projects() {
  return (
    <>
      <Box maxWidth='860px' height='100vh' margin='0 auto' px={'10'}>
        <Navbar />

        <Flex mt={['10', '12', '24']} gap='3'>
          <Image src='/divider-small.svg' alt='divider' />
          <Text
            fontSize={['15px', '20px', '24px']}
            fontWeight='700'
            lineHeight='36px'
            color='white'
          >
            Selected projects
          </Text>
        </Flex>

        <Flex
          mt={19}
          gap={['20px', '20px', '87px']}
          flexDirection={['column', 'column', 'row']}
        >
          <Box>
            <Text
              w='135px'
              fontSize={['15px', '20px', '24px']}
              fontWeight='700'
              lineHeight='36px'
              color='#9A9A9A'
            >
              2022 - Now
            </Text>
          </Box>
          <Box maxW='622px'>
            <Text
              color='white'
              fontWeight='700'
              fontSize={['14px', '15px', '16px']}
            >
              Bitrefill
            </Text>
            <Text
              as='p'
              fontWeight='700'
              fontSize={['14px', '15px', '16px']}
              color='#9A9A9A'
              alignItems='left'
              mt='2px'
            >
              I currently work at Bitrefill, mainly focusing on search &
              discovery. I also lead design & development of the design system.
            </Text>
            <Text
              fontWeight='700'
              fontSize={['14px', '15px', '16px']}
              color='#FF9900'
              mt='10px'
            >
              Read case study
            </Text>

            <Box
              mt='16px'
              w='100%'
              height='285px'
              bgColor='#B476A6'
              borderRadius='9px'
            ></Box>
          </Box>
        </Flex>

        <Flex
          mt={[20, 20, 48]}
          gap={['20px', '20px', '87px']}
          flexDirection={['column', 'column', 'row']}
        >
          <Box>
            <Text
              w='135px'
              fontSize={['15px', '20px', '24px']}
              fontWeight='700'
              lineHeight='36px'
              color='#9A9A9A'
            >
              2022 - Now
            </Text>
          </Box>
          <Box maxW='622px'>
            <Text
              color='white'
              fontWeight='700'
              fontSize={['14px', '15px', '16px']}
            >
              Bitrefill
            </Text>
            <Text
              as='p'
              fontSize={['14px', '15px', '16px']}
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
              w='100%'
              height='285px'
              bgColor='#B476A6'
              borderRadius='9px'
            ></Box>
          </Box>
        </Flex>

        <Flex
          mt={[20, 20, 48]}
          gap={['20px', '20px', '87px']}
          flexDirection={['column', 'column', 'row']}
        >
          <Box>
            <Text
              w='135px'
              fontSize={['15px', '20px', '24px']}
              fontWeight='700'
              lineHeight='36px'
              color='#9A9A9A'
            >
              2022 - Now
            </Text>
          </Box>
          <Box maxW='622px'>
            <Text
              color='white'
              fontWeight='700'
              fontSize={['14px', '15px', '16px']}
            >
              Bitrefill
            </Text>
            <Text
              as='p'
              fontWeight='700'
              fontSize={['14px', '15px', '16px']}
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
              w='100%'
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
